import React from 'react';

// Functional component for rendering an article card
function ArticleCard({image, title, preview, author = "Unknown", category = "Article", date = "Month DD, YYYY"}) {
  return (
    // Container div for the article card with responsive width and styling for hover effects
    <div className="sm:max-w-xl md:max-w-lg lg:max-w-md transition-all h-auto bg-gray-100 overflow-hidden mx-3 my-6 hover:shadow-lg hover:scale-105 hover:transition-all">
      {/* Image for the article */}
      <img src={image} alt="" />
      <div className='px-8 pt-6 pb-4 flex flex-col flex-wrap justify-between'>
        {/* Title of the article with text truncation to maintain layout */}
        <h3 className='text-2xl line-clamp-2 text-balance font-semibold text-gray-800 mb-4'>{title}</h3>
        {/* Preview of the article content */}
        <p className='mb-8 line-clamp-3'>{preview}</p>
        {/* Author of the article */}
        <p>By <strong>{author}</strong></p>
        <hr/>
        {/* Metadata for the article: category and date */}
        <div>
          <p className='inline text-gray-600 text-sm'>{category}</p>
          <p className='inline mx-3 text-gray-600 text-sm'>•</p>
          <p className='inline text-gray-600 text-sm'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
