
import Link from 'next/link';
import { placeholderBlogPosts } from '@/lib/placeholder-data';
import type { BlogPost } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, ArrowRight, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function BlogPage() {
  const posts: BlogPost[] = placeholderBlogPosts;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          My Thoughts &amp; Insights
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Welcome to my blog. Here I share articles about technology, design, and everything in between.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug} className="flex transform flex-col overflow-hidden shadow-lg transition-all hover:shadow-xl">
            {post.imageUrl && (
              <Link href={`/blog/${post.slug}`} className="block">
                <img
                  src={post.imageUrl}
                  alt={post.imageAlt || post.title}
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover"
                  data-ai-hint={post.imageHint || "blog image"}
                />
              </Link>
            )}
            <CardHeader>
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                <CardTitle className="text-2xl leading-tight">{post.title}</CardTitle>
              </Link>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CalendarDays className="mr-1.5 h-4 w-4" />
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center">
                  <UserCircle className="mr-1.5 h-4 w-4" />
                  {post.author}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    <Tag className="mr-1 h-3 w-3" />{tag}
                  </Badge>
                ))}
              </div>
              <Button asChild variant="ghost" className="group p-0 text-primary hover:text-primary">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
