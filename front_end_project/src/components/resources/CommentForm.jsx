import React, { useState } from 'react';

// Defining the comment form
const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  // Form submission functionality
  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);  
      setComment('');
    }
  };

  // Styling for the form
  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  // Styling for the text input 
  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    flex: '1',
    marginRight: '10px',
  };
  
  // Styling for the 'submit' button
  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  // Styling for when user hovers on 'submit' button
  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  // Specifying the JSX to be rendered by the CommentForm component
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        style={inputStyle}
      />
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
