import React, { useState } from 'react';
import './blogCard.css';

const BlogCard = (props) => {
  return (
    <div
      className={props.className}
      onClick={() => {
        props.clickHandler(props.article, props.title);
      }}
    >
      <div className="item-image-container">
        <img className="item-image" src={props.image}></img>
      </div>
      <p className="item-title">{props.title}</p>
      <hr className="item-separator"></hr>
    </div>
  );
};

export default BlogCard;
