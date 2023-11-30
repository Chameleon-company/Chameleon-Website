import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  image,
  title,
  preview,
  author = "Unknown",
  category = "Article",
  date = "Month DD, YYYY",
  id,
}) => {
  return (
    <div className="sm:max-w-xl md:max-w-lg lg:max-w-md transition-all h-auto bg-gray-100 overflow-hidden mx-3 my-6 hover:shadow-lg hover:scale-105 hover:transition-all">
      <Link to={`/article/${id}`}>
        <img src={image} alt="" />
        <div className="px-8 pt-6 pb-4 flex flex-col flex-wrap justify-between">
          <h3 className="text-2xl line-clamp-2 text-balance font-semibold text-gray-800 mb-4">
            {title}
          </h3>
          <p className="mb-8 line-clamp-3">{preview}</p>
          <p>
            By <strong>{author}</strong>
          </p>
          <hr />
          <div>
            <p className="inline text-gray-600 text-sm">{category}</p>
            <p className="inline mx-3 text-gray-600 text-sm">•</p>
            <p className="inline text-gray-600 text-sm">{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
