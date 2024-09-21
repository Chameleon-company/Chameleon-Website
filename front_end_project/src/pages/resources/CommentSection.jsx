import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/comments/getComments')
      .then(response => response.json())
      .then(data => {
        setComments(data.comments); 
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, []);

  const addComment = (commentText, author) => {
    const newComment = { text: commentText, author };

    fetch('http://localhost:3002/comments/addComment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then(response => response.json())
      .then((addedComment) => {
        setComments((prevComments) => [...prevComments, addedComment]);
      })
      .catch(error => console.error('Error adding comment:', error));
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
