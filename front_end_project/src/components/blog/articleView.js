import React, { useState } from 'react';
import './articleView.css';
import ArticleItem from './articleItem';
import Article from './articles/articles';
import ArticleList from './articles/articlelist';

const ArticleView = () => {
  const [changeArticle, setChangeArticle] = useState('');
  const [selectedArticle, setselectedArticle] = useState('');

  const clickHandler = (article, articleTitle) => {
    setChangeArticle(article);
    setselectedArticle(articleTitle);
  };

  return (
    <div className="article-view-container">
      <div className="list-container">
        {ArticleList.map((article) => (
          <ArticleItem
            key={article.id}
            article={article.article}
            title={article.title}
            image={article.image}
            clickHandler={clickHandler}
            className={
              article.title === selectedArticle
                ? 'item-container active'
                : 'item-container'
            }
          />
        ))}
      </div>
      <div className="article-show">{changeArticle}</div>
    </div>
  );
};

export default ArticleView;
