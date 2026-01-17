import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Artist } from '@/lib/artworks';

interface ArtistCardProps {
  artist: Artist;
  index?: number;
}

export function ArtistCard({ artist, index = 0 }: ArtistCardProps) {
  const lifespan = artist.deathYear 
    ? `${artist.birthYear} – ${artist.deathYear}`
    : `b. ${artist.birthYear}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/artist/${artist.id}`}
        className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary transition-colors"
        aria-label={`View ${artist.name}'s profile`}
      >
        {/* Avatar */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-border group-hover:ring-accent transition-colors">
          <img
            src={artist.imageUrl}
            alt={artist.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-medium group-hover:text-accent transition-colors">
            {artist.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {artist.nationality} • {lifespan}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {artist.movements.slice(0, 2).map((movement) => (
              <span 
                key={movement}
                className="metadata text-xs px-2 py-0.5 bg-muted rounded"
              >
                {movement}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
      </Link>
    </motion.article>
  );
}
