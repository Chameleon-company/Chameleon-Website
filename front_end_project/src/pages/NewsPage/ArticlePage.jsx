import React from 'react';
import { useParams } from 'react-router-dom';
import articleList from './articles';
import ArticleView from '../../components/News/ArticleView';

function ArticlePage() {
    const { id } = useParams();
    const article = articleList.find(article => article.key === Number(id));

    if (!article) {
        return (
            <div className="max-w-screen-md mx-auto my-8 px-4">
                <p>Article not found</p>
            </div>
        );
    }

    // Article details
    return (
        <ArticleView />
    );
}

export default ArticlePage;
