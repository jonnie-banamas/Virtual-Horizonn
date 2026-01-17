import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Gallery } from '@/lib/artworks';

interface GalleryCardProps {
  gallery: Gallery;
  index?: number;
}

const styleIcons = {
  modern: '◼',
  classical: '◯',
  minimalist: '△',
};

const styleColors = {
  modern: 'bg-accent/10 text-accent',
  classical: 'bg-highlight/10 text-highlight-foreground',
  minimalist: 'bg-muted text-muted-foreground',
};

export function GalleryCard({ gallery, index = 0 }: GalleryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/gallery/${gallery.id}`}
        className="block"
        aria-label={`Enter ${gallery.name} virtual gallery`}
      >
        <div className="relative overflow-hidden rounded-xl aspect-[16/9] artwork-hover">
          {/* Background Image */}
          <img
            src={gallery.thumbnailUrl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className={cn(
              "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium w-fit mb-3",
              styleColors[gallery.style]
            )}>
              <span>{styleIcons[gallery.style]}</span>
              <span className="capitalize">{gallery.style} Gallery</span>
            </div>

            <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
              {gallery.name}
            </h3>

            <p className="text-primary-foreground/80 text-sm line-clamp-2 mb-4">
              {gallery.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-primary-foreground/60 text-sm">
                {gallery.artworkIds.length} artworks
              </span>
              
              <Button
                variant="secondary"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Enter Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* 3D Icon */}
          <div className="absolute top-4 right-4 p-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
            <Box className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
