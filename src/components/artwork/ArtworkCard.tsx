import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Artwork } from '@/lib/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  variant?: 'default' | 'featured' | 'compact';
  showArtist?: boolean;
}

export function ArtworkCard({ 
  artwork, 
  index = 0, 
  variant = 'default',
  showArtist = true 
}: ArtworkCardProps) {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative",
        isFeatured && "md:col-span-2 md:row-span-2"
      )}
    >
      <Link
        to={`/artwork/${artwork.id}`}
        className="block"
        aria-label={`View ${artwork.title} by ${artwork.artist}`}
      >
        <div className={cn(
          "relative overflow-hidden bg-secondary rounded-lg artwork-hover",
          isFeatured ? "aspect-[4/3]" : isCompact ? "aspect-square" : "aspect-[3/4]"
        )}>
          {/* Image */}
          <img
            src={artwork.thumbnailUrl}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Quick Actions */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 shadow-md"
              onClick={(e) => {
                e.preventDefault();
                // Toggle favorite
              }}
              aria-label="Add to favorites"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 shadow-md"
              aria-label="Quick view"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>

          {/* Movement Badge */}
          <div className="absolute top-4 left-4">
            <span className="metadata px-2 py-1 bg-background/90 rounded-md text-xs">
              {artwork.movement}
            </span>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className={cn(
              "font-display font-medium text-primary-foreground",
              isFeatured ? "text-xl" : "text-lg"
            )}>
              {artwork.title}
            </h3>
            {showArtist && (
              <p className="text-primary-foreground/80 text-sm mt-1">
                {artwork.artist}, {artwork.year}
              </p>
            )}
          </div>
        </div>
      </Link>

      {/* Info below image (visible by default) */}
      {!isCompact && (
        <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className={cn(
            "font-display font-medium line-clamp-1",
            isFeatured ? "text-xl" : "text-lg"
          )}>
            {artwork.title}
          </h3>
          {showArtist && (
            <p className="text-muted-foreground text-sm mt-1">
              {artwork.artist}, {artwork.year}
            </p>
          )}
        </div>
      )}
    </motion.article>
  );
}
