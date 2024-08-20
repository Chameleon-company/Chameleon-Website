import React from 'react';

function Posts ({ posts }) {
    return (
        <div className='row'>
            {posts.map(({ id, image, title, subtitle }) => (

                // Content Card
                <div className='col-12 col-md-6 col-lg-4 p-2' key={id}>
                    <div className='card h-100'>
                        <img src={image} className='card-img-top' alt='post-image' />
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text text-truncate'>{subtitle}.</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;