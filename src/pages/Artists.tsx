import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { ArtistCard } from '@/components/artist/ArtistCard';
import { artists } from '@/lib/artworks';

export default function Artists() {
  // Group artists by movement
  const movements = [...new Set(artists.flatMap(a => a.movements))];

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
            <h1 className="heading-display mb-4">Artists</h1>
            <p className="body-large text-muted-foreground">
              Discover the masters who shaped art history. From Renaissance visionaries to 
              modern innovators, explore their lives, techniques, and lasting influence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artists List */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-2">
              {artists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Movement */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-center mb-8"
          >
            Browse by Movement
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {movements.map((movement, index) => (
              <motion.button
                key={movement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full border border-border bg-background hover:bg-secondary hover:border-accent transition-colors text-sm"
              >
                {movement}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
