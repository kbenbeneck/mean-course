const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const Post = require('./models/post')
const app = express();
mongoose.connect("mongodb+srv://Karl:yv5DZUVKOQxazsRA@cluster0.ehs83.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database!')
})
.catch(() => {
  console.log('Connected failed!')
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested_With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully'
  });
});

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
    message: "Posts fetched successfully!",
    posts: posts
  });
});

module.exports = app;
