import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[calc(100vh-theme(spacing.16)-theme(spacing.16))] flex-col items-center justify-center px-4 py-12 text-center md:min-h-[calc(100vh-theme(spacing.16)-theme(spacing.24))]">
      <SearchX className="mb-8 h-24 w-24 text-primary opacity-50" />
      <h1 className="mb-4 text-5xl font-bold text-foreground md:text-7xl">404 - Page Not Found</h1>
      <p className="mb-8 text-lg text-muted-foreground md:text-xl">
        Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/">Go Back Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">Visit Our Blog</Link>
        </Button>
      </div>
    </div>
  );
}
