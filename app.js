// index.js
const express = require('express');
const Post = require('./models/Post'); // Adjust the path based on your file structure
const sequelize = require('./sequel-config');
const bodyParser = require("body-parser")
const app = express();
const PORT = process.env.PORT || 3000;

// Routes 
const userRoutes = require('./routes/User');
const followRoutes = require('./routes/Follower');
const postRoutes = require('./routes/Post');
const likeRoutes = require('./routes/Reaction');
const commentRoutes = require('./routes/Comments');

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.use(userRoutes);
app.use(followRoutes);
app.use(postRoutes);
app.use(likeRoutes);
app.use(commentRoutes);


// Sync models with the database

// IIFE

(async () => {
  try {
    await sequelize.sync();
    console.log('Database synced successfully');

  } catch (error) {
    console.error('Error syncing database:', error);
  }})();




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
