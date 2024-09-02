// Import necessary modules
const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Dummy blog post data
let blogPost = {
  title: "Understanding JavaScript: A Beginner's Guide",
  author: "Jane Doe",
  date: "August 29, 2024",
  content: `
    <h1>Understanding JavaScript: A Beginner's Guide</h1>
    <p>Welcome to this comprehensive guide on JavaScript! Whether you are new to programming or looking to enhance your skills, this blog post is for you.</p>
    <h2>What is JavaScript?</h2>
    <p>JavaScript is a versatile programming language commonly used in web development. It allows you to create dynamic and interactive web applications.</p>
    <h2>Why Learn JavaScript?</h2>
    <ul>
      <li><strong>Popularity:</strong> JavaScript is one of the most widely used programming languages.</li>
      <li><strong>Flexibility:</strong> It can be used on both the client-side and server-side.</li>
      <li><strong>Community Support:</strong> There is a vast community and numerous resources available for learning.</li>
    </ul>
    <h2>Getting Started</h2>
    <p>To start with JavaScript, you'll need a basic understanding of HTML and CSS. JavaScript can be included in your HTML files using the <code>&lt;script&gt;</code> tag.</p>
    <pre><code>// Example of a simple JavaScript code
    console.log('Hello, world!');
    </code></pre>
    <p>For more advanced topics, you can explore JavaScript frameworks and libraries like React, Angular, and Vue.js.</p>
    <h2>Conclusion</h2>
    <p>JavaScript is a powerful language that can open up many opportunities in the world of web development. Start learning today and see where it takes you!</p>
  `,
};

// Serve the blog post editor page
app.get('/edit', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'edit.html'));
});

// Serve the blog post view page
app.get('/blog', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>${blogPost.title}</title>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <style>
          body { font-family: Arial, sans-serif; }
          .container { width: 80%; margin: 0 auto; }
          .content { margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${blogPost.title}</h1>
          <p><strong>Author:</strong> ${blogPost.author}</p>
          <p><strong>Date:</strong> ${blogPost.date}</p>
          <div class="content">${blogPost.content}</div>
          <a href="/edit">Edit</a>
        </div>
      </body>
    </html>
  `);
});

// Handle saving blog post updates
app.post('/save', express.json(), (req, res) => {
  const { title, author, date, content } = req.body;
  blogPost = { title, author, date, content };
  res.send('Blog post updated successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
