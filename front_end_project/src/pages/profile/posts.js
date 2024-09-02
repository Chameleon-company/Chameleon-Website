import React from 'react';
import { useHistory } from 'react-router-dom';


function Posts ({ posts }) {
    const history = useHistory();

    const onClick = (post) => {
        history.push({ pathname: `/posts/${post.id}`, state: { post } });
    };

    return (
        <div className='row'>
            {posts.map((post) => (
                <div className='col-12 col-md-6 col-lg-4 p-2' key={post.id}>
                    <div className='card h-100' onClick={() => onClick(post)}>
                        <img src={post.image} className='card-img-top' alt='post' />
                        <div className='card-body'>
                            <h5 className='card-title'>{post.title}</h5>
                            <p className='card-text text-truncate'>{post.subtitle}.</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
}

export default Posts;
