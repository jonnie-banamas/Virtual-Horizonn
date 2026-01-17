import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { getArtistById, getArtworksByArtist } from '@/lib/artworks';

export default function ArtistProfile() {
  const { id } = useParams<{ id: string }>();
  const artist = id ? getArtistById(id) : undefined;
  const artworks = id ? getArtworksByArtist(id) : [];

  if (!artist) {
    return (
      <Layout>
        <div className="section-padding container mx-auto px-4 text-center">
          <h1 className="heading-section mb-4">Artist Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The artist you're looking for doesn't exist in our collection.
          </p>
          <Button asChild>
            <Link to="/artists">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Artists
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const lifespan = artist.deathYear 
    ? `${artist.birthYear} – ${artist.deathYear}`
    : `b. ${artist.birthYear}`;

  return (
    <Layout>
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button asChild variant="ghost" size="sm">
          <Link to="/artists">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Artists
          </Link>
        </Button>
      </div>

      {/* Artist Header */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-1"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-artwork">
                <img
                  src={artist.imageUrl}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <h1 className="heading-display mb-4">{artist.name}</h1>
              
              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{lifespan}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{artist.nationality}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>{artist.movements.join(', ')}</span>
                </div>
              </div>

              <p className="body-large text-foreground leading-relaxed mb-8">
                {artist.biography}
              </p>

              <div>
                <h3 className="font-display text-lg font-medium mb-3">Notable Works</h3>
                <ul className="space-y-2">
                  {artist.notableWorks.map((work) => (
                    <li key={work} className="text-muted-foreground">• {work}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Artist's Works in Collection */}
      {artworks.length > 0 && (
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="heading-section mb-8">Works in Our Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork, index) => (
                <ArtworkCard 
                  key={artwork.id} 
                  artwork={artwork} 
                  index={index}
                  showArtist={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
