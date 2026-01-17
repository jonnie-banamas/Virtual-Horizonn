import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Heart, 
  Download, 
  Share2, 
  Volume2,
  Info,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Artwork } from '@/lib/artworks';

interface ArtworkViewerProps {
  artwork: Artwork;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

export function ArtworkViewer({
  artwork,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
}: ArtworkViewerProps) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 4));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="artwork-title"
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between bg-gradient-to-b from-foreground/50 to-transparent">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Close viewer"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.5}
                className="text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-50"
                aria-label="Zoom out"
              >
                <ZoomOut className="h-5 w-5" />
              </Button>
              <button
                onClick={handleResetZoom}
                className="text-primary-foreground text-sm font-mono min-w-[4rem]"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 4}
                className="text-primary-foreground hover:bg-primary-foreground/10 disabled:opacity-50"
                aria-label="Zoom in"
              >
                <ZoomIn className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className={cn(
                  "text-primary-foreground hover:bg-primary-foreground/10",
                  isFavorite && "text-accent"
                )}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart className={cn("h-5 w-5", isFavorite && "fill-current")} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                aria-label="Share artwork"
              >
                <Share2 className="h-5 w-5" />
              </Button>
              {artwork.isPublicDomain && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/10"
                  aria-label="Download high-resolution image"
                >
                  <Download className="h-5 w-5" />
                </Button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
                aria-label="Play audio guide"
              >
                <Volume2 className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowInfo(!showInfo)}
                className={cn(
                  "text-primary-foreground hover:bg-primary-foreground/10",
                  showInfo && "bg-primary-foreground/20"
                )}
                aria-label={showInfo ? "Hide information" : "Show information"}
                aria-expanded={showInfo}
              >
                <Info className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          {hasPrevious && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Previous artwork"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          )}
          {hasNext && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 text-primary-foreground hover:bg-primary-foreground/10"
              aria-label="Next artwork"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          )}

          {/* Artwork Image */}
          <div className="absolute inset-0 flex items-center justify-center overflow-auto p-16">
            <motion.div
              drag
              dragElastic={0.1}
              style={{ scale: zoomLevel }}
              className="cursor-grab active:cursor-grabbing"
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="max-w-[90vw] max-h-[80vh] object-contain shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Info Panel */}
          <AnimatePresence>
            {showInfo && (
              <motion.aside
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-background shadow-2xl overflow-y-auto"
              >
                <div className="p-6">
                  <h2 id="artwork-title" className="font-display text-2xl font-semibold mb-2">
                    {artwork.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {artwork.artist}, {artwork.year}
                  </p>

                  <div className="space-y-6">
                    <section>
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Details
                      </h3>
                      <dl className="grid grid-cols-2 gap-2 metadata text-sm">
                        <dt className="text-muted-foreground">Medium</dt>
                        <dd>{artwork.medium}</dd>
                        <dt className="text-muted-foreground">Dimensions</dt>
                        <dd>{artwork.dimensions}</dd>
                        <dt className="text-muted-foreground">Movement</dt>
                        <dd>{artwork.movement}</dd>
                      </dl>
                    </section>

                    <section>
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Description
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {artwork.description}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">
                        Historical Context
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {artwork.historicalContext}
                      </p>
                    </section>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
