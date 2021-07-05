const express = require('express');
const path = require("path")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const postRoutes = require("./routes/posts")
const userRoutes = require("./routes/user")
const app = express();
mongoose.connect("mongodb+srv://Karl:yv5DZUVKOQxazsRA@cluster0.ehs83.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database!')
})
.catch(() => {
  console.log('Connected failed!')
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join("backend/images")));
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
app.use("/api/user", userRoutes);


module.exports = app;
