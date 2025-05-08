import Link from 'next/link';
import { socialLinks } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} PersonaLink. All rights reserved.
        </p>
        <div className="flex items-center space-x-2">
          {socialLinks.map((social) => (
            <Button variant="ghost" size="icon" asChild key={social.label}>
              <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
