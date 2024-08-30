import React from 'react';
import { useLocation } from 'react-router-dom';
import Screen from '../../components/app/Screen';

function Post () {
    const location = useLocation();
    const { post } = location.state || {};

    console.log('Post component rendered with post:', post);

    // Inline style for centering the image and setting its width
    const imageStyle = { display: 'block', margin: '0 auto', width: '50%' };

    return (
        <>
            <Screen>
                <div className='container mt-xl-auto my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
                    <div className='row'>
                        {post ? (
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        ) : (
                            <p>No post data available.</p>
                        )}
                    </div>
                </div>
            </Screen>
        </>
    );
}

export default Post;
