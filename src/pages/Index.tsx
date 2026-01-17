import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Users, Globe, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';
import { GalleryCard } from '@/components/gallery/GalleryCard';
import { ArtistCard } from '@/components/artist/ArtistCard';
import { artworks, galleries, artists } from '@/lib/artworks';
import heroImage from '@/assets/hero-gallery.jpg';

const featuredArtworks = artworks.slice(0, 6);
const featuredGalleries = galleries.slice(0, 3);
const featuredArtists = artists.slice(0, 4);

const features = [
  {
    icon: Globe,
    title: 'Access Anywhere',
    description: 'Experience world-class art from the comfort of your home, anywhere in the world.',
  },
  {
    icon: Sparkles,
    title: 'Immersive 3D',
    description: 'Walk through virtual galleries with stunning 3D environments and intuitive navigation.',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Learn from art historians with audio guides and rich educational content.',
  },
  {
    icon: Accessibility,
    title: 'Fully Accessible',
    description: 'Designed for everyone with comprehensive accessibility features and options.',
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            {/* <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Now featuring: Impressionist Masters Collection
            </motion.span> */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-display text-primary-foreground mb-6"
            >
              Art Without{' '}
              <span className="italic">Boundaries</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-large text-primary-foreground/80 mb-8"
            >
              Step into museum-quality virtual galleries and experience masterpieces from every era. 
              No tickets, no travel—just extraordinary art, accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/galleries">
                  Enter Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10">
                <Link to="/about">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Tour
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-foreground rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Galleries */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-section mb-2"
              >
                Virtual Galleries
              </motion.h2>
              <p className="text-muted-foreground">Explore curated spaces designed for immersive viewing</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/galleries">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGalleries.map((gallery, index) => (
              <GalleryCard key={gallery.id} gallery={gallery} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link to="/galleries">View All Galleries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Artworks */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-section mb-2"
              >
                Trending Now
              </motion.h2>
              <p className="text-muted-foreground">Most viewed artworks this month</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:flex">
              <Link to="/artworks">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArtworks.map((artwork, index) => (
              <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-section mb-4"
              >
                Meet the Masters
              </motion.h2>
              <p className="text-muted-foreground mb-8">
                Explore the lives and works of history's most influential artists. 
                From the Renaissance to Modern Art, discover the stories behind the masterpieces.
              </p>
              <Button asChild>
                <Link to="/artists">
                  Explore All Artists
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="space-y-2">
              {featuredArtists.map((artist, index) => (
                <ArtistCard key={artist.id} artist={artist} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            Ready to Explore?
          </motion.h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of art lovers experiencing museum-quality exhibitions from anywhere in the world. 
            Start your journey today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/galleries">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary hover:bg-primary-foreground/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
