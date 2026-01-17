import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { GalleryCard } from '@/components/gallery/GalleryCard';
import { galleries } from '@/lib/artworks';

export default function Galleries() {
  return (
    <Layout>
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="heading-display mb-4">Virtual Galleries</h1>
            <p className="body-large text-muted-foreground">
              Step into immersive 3D spaces designed to showcase art at its finest. 
              Each gallery offers a unique perspective on art history and contemporary creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Types */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {galleries.map((gallery, index) => (
              <GalleryCard key={gallery.id} gallery={gallery} index={index} />
            ))}
          </div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-12 border-2 border-dashed border-border rounded-xl"
          >
            <h3 className="font-display text-xl font-medium mb-2">More Galleries Coming Soon</h3>
            <p className="text-muted-foreground">
              We're constantly adding new virtual spaces and exhibitions. Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
