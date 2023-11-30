import React from 'react';
import { useParams } from 'react-router-dom';
import articleList from './articles';

function ArticleView() {
    const { id } = useParams();
    const article = articleList.find((article) => article.id.toString() === id);

    if (!article) {
        return (
            <div className="max-w-screen-md mx-auto my-8 px-4">
                <p>Article not found</p>
            </div>
        );
    }

    // Article details
    return (
        <div className="max-w-screen-md mx-auto my-8 px-4">
            <h1>Article ID: {id}</h1>
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <img src={article.image} alt={article.title} className="mb-4" />
            <p className="text-gray-700 mb-4">{article.preview}</p>
            <p className="text-gray-600">
                By <strong>{article.author}</strong> • {article.date}
            </p>
            <p className="text-gray-600 mb-4">Category: {article.category}</p>
        </div>
    );
}

export default ArticleView;
