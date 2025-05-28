
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, FileText, Newspaper, Link as LinkIcon } from 'lucide-react';

export default function HomePage() {
  const features = [
    
    {
      title: 'Blog',
      description: 'Read my thoughts on technology, design, and personal growth.',
      href: '/blog',
      icon: Newspaper,
    },
    {
      title: 'Useful Links',
      description: 'Discover a curated collection of resources and tools I find valuable.',
      href: '/links',
      icon: LinkIcon,
    },
    {
      title: 'My CV',
      description: 'Explore my professional background, skills, and experience.',
      href: '/cv',
      icon: FileText,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="text-center">
        <div className="mx-auto mb-12 max-w-xl">
           <img
            src="https://picsum.photos/seed/avatar/128/128"
            alt="Yasin Okumus"
            width={128}
            height={128}
            className="mx-auto mb-6 rounded-full shadow-lg"
            data-ai-hint="professional avatar"
          />
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Welcome to PersonaLink
          </h1>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            I&apos;m Yasin, a tired developer and lifelong learner. This is my personal space to share my journey, insights, and favorite resources.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
              <Link href="/blog">
                Read My Blog <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/cv">
                View My CV
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground">
          Explore My World
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="flex transform flex-col overflow-hidden shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex-row items-center gap-4 pb-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4 text-base">{feature.description}</CardDescription>
                <Button variant="ghost" asChild className="group text-primary hover:text-primary">
                  <Link href={feature.href}>
                    Go to {feature.title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
