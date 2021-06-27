const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const postRoutes = require("./routes/posts")
const app = express();
mongoose.connect("mongodb+srv://Karl:yv5DZUVKOQxazsRA@cluster0.ehs83.mongodb.net/node-angular?retryWrites=true&w=majority")
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
  "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postRoutes);


module.exports = app;
