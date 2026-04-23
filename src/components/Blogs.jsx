import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      date: "Oct 12, 2023",
      tag: "Development",
      title: "Latest Web Design Trends in 2024 & Beyond",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      date: "Nov 05, 2023",
      tag: "Marketing",
      title: "How to Build a Successful Digital Marketing Strategy",
      img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      date: "Dec 20, 2023",
      tag: "Design",
      title: "The Importance of UI/UX in App Development",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="blogs bg-black section-padding">
      <div className="container">
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-img-wrapper">
                <img src={blog.img} alt={blog.title} />
                <div className="blog-tag">{blog.tag}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{blog.date}</span>
                </div>
                <h3><a href="#">{blog.title}</a></h3>
                <a href="#" className="read-more">Read More <ArrowUpRight size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
