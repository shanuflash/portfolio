import Navigation from '@/components/navigation';
import BinaryTitle from '@/components/binary-title';
import DiagonalDivider from '@/components/diagonal-divider';
import SearchBar from './search-bar';
import { FileText } from 'lucide-react';

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
    <h3 className="text-lg font-semibold text-foreground mb-2 hover-accent-text cursor-pointer">
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
      <BinaryTitle word="Blog" />
      <SearchBar />
      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto">
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
      <div className="border-b soft-grid-border bg-background">
        <div className="max-w-2xl border-x soft-grid-border mx-auto">
          <div className="p-6 text-center">
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {posts.length}
                </div>
                <div className="text-muted-foreground">Posts</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {categories.length}
                </div>
                <div className="text-muted-foreground">Categories</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {posts.reduce(
                    (acc, post) => acc + parseInt(post.readTime || '0'),
                    0
                  )}
                </div>
                <div className="text-muted-foreground">Min read</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
