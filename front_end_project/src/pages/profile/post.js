import React from 'react';
import { useLocation } from 'react-router-dom';
import Screen from '../../components/app/Screen';
import { Alert } from 'react-bootstrap';

import { FaMagic } from "react-icons/fa";

function Post () {
    const location = useLocation();
    const { post } = location.state || {};

    return (
        <>
            <Screen>
                <div className='container mt-xl-auto my-auto p-5 bg-light text-dark' style={{ borderRadius: 25 }}>
                    <div className='row'>
                        <Alert variant='success'>
                            <Alert.Heading className="flex items-center space-x-2">
                                <span>AI Summary</span>
                                <FaMagic size={20} />
                            </Alert.Heading>

                            <hr />

                            <p>"AI Summary"</p>
                        </Alert>
                    </div>
                    {post ? (
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    ) : (
                        <p>No post data available.</p>
                    )}
                </div>
            </Screen>
        </>
    );
}

export default Post;
