import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const upcomingEvents = [
  {
    id: '1',
    title: 'Live Tour: Impressionist Masters',
    description: 'Join our curator for a live guided tour through the Impressionist collection, exploring the revolutionary techniques of Monet, Renoir, and Degas.',
    date: 'January 25, 2026',
    time: '2:00 PM EST',
    type: 'Live Tour',
    imageUrl: 'https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800',
    attendees: 234,
  },
  {
    id: '2',
    title: 'Artist Talk: Modern Expressions',
    description: 'Art historian Dr. Sarah Chen discusses the evolution of modern art and its lasting impact on contemporary artists.',
    date: 'January 28, 2026',
    time: '7:00 PM EST',
    type: 'Artist Talk',
    imageUrl: 'https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800',
    attendees: 156,
  },
  {
    id: '3',
    title: 'Workshop: Understanding Color Theory',
    description: 'An interactive workshop exploring how the masters used color to evoke emotion and create depth in their paintings.',
    date: 'February 2, 2026',
    time: '11:00 AM EST',
    type: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800',
    attendees: 89,
  },
  {
    id: '4',
    title: 'New Exhibition: Japanese Woodblock Prints',
    description: 'Opening celebration of our new exhibition featuring 50 masterworks from the Edo period, including rare pieces from Hokusai and Hiroshige.',
    date: 'February 10, 2026',
    time: '6:00 PM EST',
    type: 'Exhibition Opening',
    imageUrl: 'https://images.unsplash.com/photo-1545486332-9e0999c535b2?w=800',
    attendees: 312,
  },
];

const eventTypeColors: Record<string, string> = {
  'Live Tour': 'bg-accent/10 text-accent',
  'Artist Talk': 'bg-highlight/10 text-highlight-foreground',
  'Workshop': 'bg-primary/10 text-primary',
  'Exhibition Opening': 'bg-green-500/10 text-green-700',
};

export default function Events() {
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
            <h1 className="heading-display mb-4">Virtual Events</h1>
            <p className="body-large text-muted-foreground">
              Join live tours, artist talks, workshops, and exhibition openings. 
              Experience art education from anywhere in the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="grid md:grid-cols-3 gap-6 p-6 rounded-xl border border-border bg-card hover:shadow-card transition-shadow">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <div className="aspect-[16/10] rounded-lg overflow-hidden">
                      <img
                        src={event.imageUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${eventTypeColors[event.type]}`}>
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 flex-1">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>Virtual</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button>Register Now</Button>
                      <Button variant="outline">Add to Calendar</Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="heading-section mb-4">Never Miss an Event</h2>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter and be the first to know about upcoming events, 
              new exhibitions, and exclusive virtual experiences.
            </p>
            <Button variant="secondary" size="lg">
              Subscribe to Updates
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
