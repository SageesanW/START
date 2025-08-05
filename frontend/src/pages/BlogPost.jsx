import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { mockBlogPosts } from '../mock/mockData';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - will be replaced with actual API call
    const fetchPost = () => {
      // Convert title to slug format for matching
      const foundPost = mockBlogPosts.find(p => 
        p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
      );
      
      if (foundPost) {
        // Add full content for the blog post
        const fullPost = {
          ...foundPost,
          content: `
            <p>This is the full content of the blog post. In a real application, this would be stored in the database and retrieved via API.</p>
            
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <h2>Key Points</h2>
            <ul>
              <li>Advanced software development techniques</li>
              <li>AI integration best practices</li>
              <li>Real-world implementation examples</li>
              <li>Performance optimization strategies</li>
            </ul>
            
            <h2>Technical Implementation</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <pre><code>// Example code snippet
function implementAI(data) {
  return processWithMachineLearning(data);
}</code></pre>
            
            <h2>Conclusion</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          `
        };
        setPost(fullPost);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Header */}
      <div className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/blog">
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 mb-8">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
          
          <Badge className="bg-purple-500/90 text-white mb-4">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 pb-16">
        <div className="prose prose-lg prose-invert max-w-none">
          <div 
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="bg-gray-800 text-gray-300 hover:bg-purple-500/20 hover:text-purple-400"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Share this article:</span>
            <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:border-purple-400 hover:text-purple-400">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockBlogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  className="group"
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <Badge className="bg-purple-500/90 text-white mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;