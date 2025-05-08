import { placeholderLinks } from '@/lib/placeholder-data';
import type { LinkItem } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function LinksPage() {
  const linksByCategory = placeholderLinks.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, LinkItem[]>);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Curated Links
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          A collection of useful resources, tools, and inspiring websites.
        </p>
      </header>

      {Object.entries(linksByCategory).map(([category, links]) => (
        <section key={category} className="mb-12">
          <h2 className="mb-8 text-2xl font-semibold text-primary border-b pb-2">{category}</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {links.map((item: LinkItem) => (
              <Card key={item.id} className="flex transform flex-col overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <div className="mb-3 flex items-center justify-center rounded-md bg-primary/10 p-3 text-primary self-start">
                    {item.icon ? <item.icon className="h-7 w-7" /> : <ExternalLink className="h-7 w-7" />}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-grow flex-col">
                  {item.description && (
                    <CardDescription className="mb-4 flex-grow text-base">
                      {item.description}
                    </CardDescription>
                  )}
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Visit Link <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
