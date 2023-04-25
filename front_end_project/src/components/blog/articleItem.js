import React, { useState } from 'react';
import './articleItem.css';

const ArticleItem = (props) => {
  return (
    <div
      className={props.className}
      onClick={() => {
        props.clickHandler(props.article, props.title);
      }}
    >
      <img className="item-image" src={props.image}></img>
      <p className="item-title">{props.title}</p>
      <hr className="item-separator"></hr>
    </div>
  );
};

export default ArticleItem;
