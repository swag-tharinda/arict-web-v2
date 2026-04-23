import React from 'react';
import './PageHero.css';

const PageHero = ({ tag, title }) => {
  return (
    <div className="page-hero">
      <div className="container">
        <div className="pill-tag page-hero-tag">{tag}</div>
        <h1 className="page-hero-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
  );
};

export default PageHero;
