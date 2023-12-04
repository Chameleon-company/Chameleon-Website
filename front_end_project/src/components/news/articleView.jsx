import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleView({image, title, preview, author = "Unknown", category = "Article", date = "Month DD, YYYY"}) {
        
        const {id} = useParams()

        return (
        <h1>Hello World {id}</h1>
        
        );
};

export default ArticleView;