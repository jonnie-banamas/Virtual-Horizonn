import { motion, AnimatePresence } from 'framer-motion';
import { X, Type, Contrast, Gauge, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useAccessibility } from '@/contexts/AccessibilityContext';

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AccessibilityPanel({ isOpen, onClose }: AccessibilityPanelProps) {
  const { settings, updateSettings, resetSettings } = useAccessibility();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background shadow-elevated overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-title"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 id="accessibility-title" className="font-display text-2xl font-semibold">
                  Accessibility
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  aria-label="Close accessibility panel"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-8">
                Customize your viewing experience to match your needs.
              </p>

              <div className="space-y-8">
                {/* Text Size */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <Type className="h-5 w-5 text-accent" />
                    <h3 className="font-medium">Text Size</h3>
                  </div>
                  <RadioGroup
                    value={settings.textSize}
                    onValueChange={(value) => updateSettings({ textSize: value as typeof settings.textSize })}
                    className="grid grid-cols-3 gap-3"
                  >
                    <div>
                      <RadioGroupItem value="normal" id="text-normal" className="peer sr-only" />
                      <Label
                        htmlFor="text-normal"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 cursor-pointer"
                      >
                        <span className="text-sm">Aa</span>
                        <span className="text-xs mt-1">Normal</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="large" id="text-large" className="peer sr-only" />
                      <Label
                        htmlFor="text-large"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 cursor-pointer"
                      >
                        <span className="text-base">Aa</span>
                        <span className="text-xs mt-1">Large</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="extra-large" id="text-xl" className="peer sr-only" />
                      <Label
                        htmlFor="text-xl"
                        className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-accent peer-data-[state=checked]:bg-accent/10 cursor-pointer"
                      >
                        <span className="text-lg">Aa</span>
                        <span className="text-xs mt-1">X-Large</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </section>

                {/* High Contrast */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Contrast className="h-5 w-5 text-accent" />
                    <div>
                      <Label htmlFor="high-contrast" className="font-medium">High Contrast</Label>
                      <p className="text-sm text-muted-foreground">Increase color contrast for better visibility</p>
                    </div>
                  </div>
                  <Switch
                    id="high-contrast"
                    checked={settings.highContrast}
                    onCheckedChange={(checked) => updateSettings({ highContrast: checked })}
                  />
                </section>

                {/* Reduced Motion */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-accent" />
                    <div>
                      <Label htmlFor="reduced-motion" className="font-medium">Reduced Motion</Label>
                      <p className="text-sm text-muted-foreground">Minimize animations and transitions</p>
                    </div>
                  </div>
                  <Switch
                    id="reduced-motion"
                    checked={settings.reducedMotion}
                    onCheckedChange={(checked) => updateSettings({ reducedMotion: checked })}
                  />
                </section>

                {/* Screen Reader Optimized */}
                <section className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye className="h-5 w-5 text-accent" />
                    <div>
                      <Label htmlFor="screen-reader" className="font-medium">Screen Reader Optimized</Label>
                      <p className="text-sm text-muted-foreground">Enhanced content structure for screen readers</p>
                    </div>
                  </div>
                  <Switch
                    id="screen-reader"
                    checked={settings.screenReaderOptimized}
                    onCheckedChange={(checked) => updateSettings({ screenReaderOptimized: checked })}
                  />
                </section>
              </div>

              {/* Reset Button */}
              <div className="mt-12 pt-6 border-t border-border">
                <Button variant="outline" onClick={resetSettings} className="w-full">
                  Reset to Defaults
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
