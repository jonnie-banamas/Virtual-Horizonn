import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Download, 
  Volume2, 
  ZoomIn,
  Calendar,
  Ruler,
  Palette,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ArtworkViewer } from '@/components/artwork/ArtworkViewer';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { getArtworkById, artworks, getArtistById } from '@/lib/artworks';
import { cn } from '@/lib/utils';

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const artwork = id ? getArtworkById(id) : undefined;
  const artist = artwork ? getArtistById(artwork.artistId) : undefined;
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get related artworks (same movement, excluding current)
  const relatedArtworks = artworks
    .filter(a => a.id !== id && a.movement === artwork?.movement)
    .slice(0, 3);

  if (!artwork) {
    return (
      <Layout>
        <div className="section-padding container mx-auto px-4 text-center">
          <h1 className="heading-section mb-4">Artwork Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The artwork you're looking for doesn't exist in our collection.
          </p>
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
      </div>

      {/* Artwork Section */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div 
                className="aspect-[4/5] rounded-xl overflow-hidden shadow-artwork bg-secondary cursor-zoom-in"
                onClick={() => setIsViewerOpen(true)}
              >
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Zoom Hint */}
              <button
                onClick={() => setIsViewerOpen(true)}
                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-2 bg-background/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <ZoomIn className="h-4 w-4" />
                <span className="text-sm">Click to zoom</span>
              </button>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Movement Badge */}
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                {artwork.movement}
              </span>

              <h1 className="heading-display mb-2">{artwork.title}</h1>
              
              <Link 
                to={`/artist/${artwork.artistId}`}
                className="text-xl text-muted-foreground hover:text-accent transition-colors link-underline inline-block mb-6"
              >
                {artwork.artist}, {artwork.year}
              </Link>

              {/* Quick Actions */}
              <div className="flex items-center gap-2 mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={cn(isFavorite && "text-accent border-accent")}
                >
                  <Heart className={cn("h-4 w-4 mr-2", isFavorite && "fill-current")} />
                  {isFavorite ? 'Saved' : 'Save'}
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                {artwork.isPublicDomain && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Volume2 className="h-4 w-4 mr-2" />
                  Audio Guide
                </Button>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-secondary/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Year</p>
                    <p className="font-medium">{artwork.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Palette className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Medium</p>
                    <p className="font-medium">{artwork.medium}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Dimensions</p>
                    <p className="font-medium">{artwork.dimensions}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Artist</p>
                    <p className="font-medium">{artwork.artist}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-lg font-medium mb-3">About This Work</h3>
                  <p className="text-foreground leading-relaxed">{artwork.description}</p>
                </div>

                <div>
                  <h3 className="font-display text-lg font-medium mb-3">Historical Context</h3>
                  <p className="text-foreground leading-relaxed">{artwork.historicalContext}</p>
                </div>
              </div>

              {/* Artist Link */}
              {artist && (
                <Link
                  to={`/artist/${artist.id}`}
                  className="mt-8 p-4 bg-secondary/50 rounded-xl flex items-center gap-4 hover:bg-secondary transition-colors"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={artist.imageUrl}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Artist</p>
                    <p className="font-display font-medium">{artist.name}</p>
                    <p className="text-sm text-muted-foreground">{artist.nationality}</p>
                  </div>
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      {relatedArtworks.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-section mb-8">Related Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArtworks.map((art, index) => (
                <ArtworkCard key={art.id} artwork={art} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Artwork Viewer */}
      <ArtworkViewer
        artwork={artwork}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </Layout>
  );
}
