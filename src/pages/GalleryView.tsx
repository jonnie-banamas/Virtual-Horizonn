import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Box, 
  Map, 
  Volume2, 
  VolumeX, 
  Maximize2,
  Info,
  Keyboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { VirtualGallery3D } from '@/components/gallery/VirtualGallery3D';
import { ArtworkViewer } from '@/components/artwork/ArtworkViewer';
import { getArtworkById } from '@/lib/artworks';
import type { Artwork } from '@/lib/artworks';

export default function GalleryView() {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleArtworkClick = (artworkId: string) => {
    const artwork = getArtworkById(artworkId);
    if (artwork) {
      setSelectedArtwork(artwork);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <Layout hideFooter>
      <div className="relative h-[calc(100vh-5rem)] bg-gallery-floor">
        {/* 3D Gallery */}
        <VirtualGallery3D onArtworkClick={handleArtworkClick} />

        {/* Controls Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/galleries')}
              className="shadow-md"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Exit Gallery
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsAudioEnabled(!isAudioEnabled)}
                className="shadow-md"
                aria-label={isAudioEnabled ? "Mute audio guide" : "Enable audio guide"}
              >
                {isAudioEnabled ? (
                  <Volume2 className="h-4 w-4" />
                ) : (
                  <VolumeX className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={toggleFullscreen}
                className="shadow-md"
                aria-label="Toggle fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Bottom Bar - Controls Help */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-auto">
            <div className="glass rounded-lg px-4 py-3 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Keyboard className="h-4 w-4" />
                  <span>Drag to look around</span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Box className="h-4 w-4" />
                  <span>Click artwork to view details</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  <span>Scroll to zoom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Info */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-auto">
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <Box className="h-4 w-4 text-accent" />
              <span className="font-display text-sm font-medium">Modern Expressions Gallery</span>
            </div>
          </div>
        </motion.div>

        {/* Toggle Controls Button */}
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setShowControls(!showControls)}
          className="absolute bottom-4 right-4 shadow-md"
          aria-label={showControls ? "Hide controls" : "Show controls"}
        >
          <Info className="h-4 w-4" />
        </Button>

        {/* Artwork Viewer Modal */}
        {selectedArtwork && (
          <ArtworkViewer
            artwork={selectedArtwork}
            isOpen={!!selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </div>
    </Layout>
  );
}
