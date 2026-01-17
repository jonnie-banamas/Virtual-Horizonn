import { Link } from 'react-router-dom';
import { Mail, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  explore: [
    { label: 'Virtual Galleries', href: '/galleries' },
    { label: 'Artists', href: '/artists' },
    { label: 'Events', href: '/events' },
    { label: 'Collections', href: '/collections' },
  ],
  learn: [
    { label: 'Art History', href: '/learn/history' },
    { label: 'Movements', href: '/learn/movements' },
    { label: 'Techniques', href: '/learn/techniques' },
    { label: 'Audio Guides', href: '/learn/audio' },
  ],
  about: [
    { label: 'Our Mission', href: '/about' },
    { label: 'Accessibility', href: '/accessibility' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter */}
        <div className="max-w-xl mb-16">
          <h2 className="font-display text-2xl font-semibold mb-4">
            Stay Connected
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Subscribe to receive updates on new exhibitions, artist features, and virtual events.
          </p>
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              aria-label="Email address for newsletter"
            />
            <Button type="submit" variant="secondary">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Learn</h3>
            <ul className="space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary-foreground flex items-center justify-center">
              <span className="text-primary font-display text-sm font-bold">V</span>
            </div>
            <span className="font-display text-sm font-medium">Virtual Horizon</span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Virtual Horizon. Making art accessible to everyone.
          </p>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" aria-label="Email us">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" aria-label="Follow on Instagram">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" aria-label="Follow on Twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" aria-label="Subscribe on YouTube">
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
