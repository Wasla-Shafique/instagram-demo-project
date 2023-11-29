// index.js
const express = require('express');
// const User = require('./models/User'); // Adjust the path based on your file structure
// const Post = require('./models/Post'); // Adjust the path based on your file structure
// const sequelize = require('./sequel-config');


const app = express();
const PORT = process.env.PORT || 3000;

// Sync models with the database
// (async () => {
//   try {
//     await sequelize.sync();
//     console.log("inside sql")
//     console.log('Database synced successfully');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

// app.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     res.json(users);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
