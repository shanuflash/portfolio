import {
  PageShell,
  Section,
  DiagonalDivider,
  TitleBlock,
  ContactSection,
} from '@/components/layout';
import SearchBar from './search-bar';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Blog | Shanu Sivakumar',
};

async function getPosts() {
  return [];
}

const BlogCard = ({ post }) => (
  <div className="border-b soft-grid-border p-6 transition-all duration-300 hover:-translate-y-px hover:bg-muted/20">
    <div className="flex items-start justify-between mb-3">
      <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md font-medium">
        {post.category}
      </span>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-accent cursor-pointer">
      {post.title}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed">
      {post.excerpt}
    </p>
  </div>
);

const EmptyState = () => (
  <div className="p-8 text-center">
    <div className="flex justify-center mb-4">
      <div className="w-12 h-12 border-2 soft-grid-border rounded-full flex items-center justify-center bg-background">
        <FileText className="w-6 h-6 text-muted-foreground" />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">
      404: Thoughts not found
    </h3>
    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
      Still compiling my thoughts into readable format...
    </p>
  </div>
);

const Blog = async () => {
  const posts = await getPosts();

  return (
    <PageShell nav="blog">
      <SearchBar />
      <Section annotation="SEC 01 · LOG" padded={false}>
        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </Section>
      <DiagonalDivider label="SEC 02" />
      <ContactSection annotation="SEC 02 · CONTACT" />
      <TitleBlock sheet="SHT 03 · BLOG" />
    </PageShell>
  );
};

export default Blog;
