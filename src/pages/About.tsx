import { motion } from 'framer-motion';
import { Globe, Heart, Sparkles, Users, Accessibility, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: Globe,
    title: 'Universal Access',
    description: 'We believe everyone deserves to experience world-class art, regardless of location, mobility, or financial means.',
  },
  {
    icon: Heart,
    title: 'Passion for Art',
    description: 'Our team includes art historians, museum professionals, and technologists united by a love of creative expression.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We use cutting-edge technology to create immersive experiences that honor the artworks while making them more accessible.',
  },
  {
    icon: Accessibility,
    title: 'Inclusivity',
    description: 'Every feature we build considers diverse needs, from visual impairments to cognitive differences.',
  },
];

const team = [
  {
    name: 'Dr. Elena Rodriguez',
    role: 'Chief Curator',
    bio: 'Former curator at the Guggenheim with 20 years of experience in art history and museum studies.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Technology',
    bio: 'Pioneer in WebXR development, bringing museum experiences to life through immersive technology.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Aisha Johnson',
    role: 'Director of Accessibility',
    bio: 'Accessibility advocate ensuring our platform serves all users with dignity and excellence.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-display mb-6">
              Making Art Accessible to <span className="italic">Everyone</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Virtual Horizon is a digital art gallery platform that brings museum-quality 
              experiences to anyone with an internet connection, breaking down the barriers 
              of geography, mobility, and access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-section mb-6">Our Mission</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Art has the power to inspire, educate, and transform. Yet for too long, 
                experiencing great art has required physical presence at institutions 
                concentrated in a handful of global cities.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                We're changing that. Through immersive 3D technology, expert curation, 
                and a deep commitment to accessibility, Virtual Horizon brings the world's 
                artistic heritage to anyone who seeks it.
              </p>
              <p className="text-foreground leading-relaxed">
                Whether you're a student in a rural community, someone with mobility 
                challenges, or simply curious about art, our virtual galleries welcome you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-artwork">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
                  alt="Art gallery interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-elevated">
                <div className="font-display text-4xl font-bold">10M+</div>
                <div className="text-sm opacity-90">Virtual visitors annually</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section text-center mb-12"
          >
            Our Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-section mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team combines expertise in art history, technology, and accessibility 
              to create exceptional virtual experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-border">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-medium">{member.name}</h3>
                <p className="text-accent text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-section mb-4">Start Your Journey</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Explore our virtual galleries and discover masterpieces from around the world. 
              Art has never been more accessible.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/galleries">Enter a Gallery</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
