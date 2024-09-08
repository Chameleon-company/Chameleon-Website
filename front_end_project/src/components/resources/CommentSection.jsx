import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import axios from 'axios';

// Comment section functionality
const CommentSection = () => {
  const [comments, setComments] = useState([]);

  // Fetch comments from the backend
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3002/comment/getComments');  // Adjust API path if necessary
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  // Add a comment to the backend and update the state
  const addComment = async (commentText) => {
    const newComment = { text: commentText, user: 'Anonymous' };  // Adjust this as needed

    try {
      const response = await axios.post('http://localhost:3002/comment/addComment', newComment);  // Adjust API path if necessary
      setComments((prevComments) => [...prevComments, response.data]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Styling for comment box title
  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  // Styling for posted comments 
  const commentBoxStyle = {
    listStyleType: 'none',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  // Styling for timestamp
  const timeStyle = {
    fontSize: '12px',
    color: '#888',
    marginTop: '10px',
    display: 'block',
  };

  // Rendering the comment form 
  return (
    <div>
      <h2 style={titleStyle}>Comments</h2>
      <CommentForm addComment={addComment} />
      <ul style={{ padding: '0' }}>
        {comments.map((comment, index) => (
          <li key={index} style={commentBoxStyle}>
            {comment.text}
            <span style={timeStyle}>{comment.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
