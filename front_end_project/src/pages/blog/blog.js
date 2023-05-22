import React, { Component } from 'react';
import ArticleView from '../../components/blog/articleView';
import './blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <h1>Latest Blog</h1>
        <div>
          <ArticleView />
        </div>
      </div>
    );
  }
}

export default Blog;
