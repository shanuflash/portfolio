import Navigation from '@/components/navigation';
import DiagonalDivider from '@/components/diagonal-divider';
import SearchBar from './search-bar';
import { FileText } from 'lucide-react';
import { getIcon } from '@/components/icon-mapper';
import { socialLinks, contactEmail } from '@/data/portfolio';

export const metadata = {
  title: 'Blog | Shanu Sivakumar',
};

async function getPosts() {
  return [];
}

async function getCategories() {
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
  const categories = await getCategories();

  return (
    <div className="min-h-screen font-mono bg-background">
      <Navigation currentPage="blog" />
      <SearchBar />
      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          {posts.length > 0 ? (
            <div>
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
      <DiagonalDivider />
      <div className="bg-background border-b soft-grid-border">
        <div className="max-w-4xl border-x soft-grid-border mx-auto">
          <div className="p-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Let&apos;s build something together
            </h2>
            <div className="flex items-center gap-4 mt-1">
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-accent hover:underline transition-colors"
              >
                {contactEmail}
              </a>
            </div>
            <div className="flex items-center gap-8 mt-6 pt-6 border-t soft-grid-border">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-all duration-300 hover:text-accent hover:-translate-y-px hover:scale-110"
                >
                  {getIcon(social.icon, 'h-6 w-6')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
