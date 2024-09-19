import React, { useState } from 'react';
import CommentForm from './CommentForm';

// Comment section functionality
const CommentSection = () => {
    const [comments, setComments] = useState([]);
  
    const addComment = (commentText, author) => {
      const currentTime = new Date();
      const comment = {
        text: commentText,
        author: author,
        time: currentTime.toLocaleString(),
      };
  
      // Updating the state synchronously without causing UI suspension
      setComments((prevComments) => [...prevComments, comment]);
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
  
    // Styling for author name
    const authorStyle = {
      fontWeight: 'bold',
      fontSize: '14px',
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
              <span style={authorStyle}>{comment.author}</span>: {comment.text}
              <span style={timeStyle}>{comment.time}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommentSection;
