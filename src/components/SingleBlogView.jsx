import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { apiFetch } from '../utils/api';
import './SingleBlogView.css';

const SingleBlogView = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Fetch all blogs and find by slug. 
    // If backend supports /blogs/:slug directly, this can be updated later.
    apiFetch('/blogs')
      .then(data => {
        if (data && data.length > 0) {
          const foundBlog = data.find(b => b.slug === slug);
          if (foundBlog) {
            setBlog(foundBlog);
          } else {
            setError('Blog post not found.');
          }
        } else {
          setError('No blogs available.');
        }
      })
      .catch(err => {
        console.error("Failed to load blog:", err);
        setError('Failed to load the blog post.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="single-blog-loading bg-black">
        <div className="loader-pulse"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="single-blog-error bg-black">
        <div className="container">
          <h2>Oops!</h2>
          <p>{error}</p>
          <button onClick={() => navigate('/blogs')} className="btn btn-primary">
            <ArrowLeft size={18} /> Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Calculate estimated read time (rough estimate based on word count)
  const wordCount = blog.content ? blog.content.replace(/<[^>]*>?/gm, '').split(/\s+/).length : 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <article className="single-blog bg-black">
      {/* ─── HERO SECTION ─── */}
      <div className="single-blog-hero">
        <div className="hero-parallax-bg" style={{ backgroundImage: `url(${blog.cover_image_url || 'https://via.placeholder.com/1920x1080'})` }}></div>
        <div className="hero-gradient-overlay"></div>
        
        <div className="container hero-content">
          <Link to="/blogs" className="back-link">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          
          <div className="hero-tags">
            <span className="hero-tag"><Tag size={14} /> {blog.tags?.[0] || 'Updates'}</span>
            <span className="hero-meta"><Calendar size={14} /> {new Date(blog.published_at || blog.created_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="hero-meta"><Clock size={14} /> {readTime} min read</span>
          </div>
          
          <h1 className="hero-title">{blog.title}</h1>
        </div>
      </div>

      {/* ─── CONTENT SECTION ─── */}
      <div className="container single-blog-content-wrapper">
        <div className="single-blog-glass-container">
          
          {/* Render HTML content safely. Assuming backend sends sanitized HTML. */}
          {blog.content ? (
            <div 
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
          ) : (
            <div className="rich-text-content">
              <p>{blog.summary || "No content available for this post."}</p>
            </div>
          )}

          <div className="single-blog-footer">
            <div className="share-section">
              <p>Share this article:</p>
              <div className="share-buttons">
                <button onClick={() => { navigator.clipboard.writeText(window.location.href); toast.success('Link copied to clipboard!'); }} className="share-btn">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </article>
  );
};

export default SingleBlogView;
