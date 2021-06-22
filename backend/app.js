const express = require('express');

const app = express();



app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '1',
      title: "title 1",
      content: "content 1"
    },
    {
      id: '2',
      title: "title 2",
      content: "content 2"
    },
    {
      id: '3',
      title: "title 3",
      content: "content 3"
    },
  ]
  res.status(200).json({
    message: "Posts fetched succesfully!",
    posts: posts
  });
});

module.exports = app;
