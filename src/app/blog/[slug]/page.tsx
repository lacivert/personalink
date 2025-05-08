import { placeholderBlogPosts } from '@/lib/placeholder-data';
import type { BlogPost } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, UserCircle, ArrowLeft, Tag } from 'lucide-react';
import { format } from 'date-fns';

// This function can be used if you need to generate static paths at build time.
// For now, we'll fetch dynamically.
// export async function generateStaticParams() {
//   return placeholderBlogPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

async function getPost(slug: string): Promise<BlogPost | undefined> {
  // In a real app, you would fetch this from a database or CMS
  return placeholderBlogPosts.find(post => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
      <article>
        <header className="mb-8">
           <Button variant="ghost" asChild className="mb-6 pl-0 text-primary hover:text-primary">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="mr-2 h-5 w-5" />
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center">
              <UserCircle className="mr-2 h-5 w-5" />
              By {post.author}
            </div>
          </div>
          {post.imageUrl && (
            <div className="my-8 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
                priority // Prioritize loading the main blog image
                data-ai-hint={post.imageHint || "article main image"}
              />
            </div>
          )}
        </header>

        {/* Ensure prose styles are applied for rich text content */}
        <div
          className="prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-blockquote:border-primary prose-blockquote:text-muted-foreground max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-12 border-t pt-8">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-sm font-normal">
                     <Tag className="mr-1 h-3 w-3" /> {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </footer>
      </article>
    </div>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | PersonaLink Blog`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: post.imageUrl ? [{ url: post.imageUrl, alt: post.imageAlt || post.title }] : [],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: post.imageUrl ? [post.imageUrl] : [],
    }
  };
}
