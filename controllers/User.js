const User = require("../models/User")

console.log("get request in controller");

exports.getUsers = async (req, res, next) => {
    
  try {

    const users = await User.findAll();
    //const posts = await Post.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }

}
  
exports.createUser = async (req, res, next) => {
try {
  const { username, full_name, email, password , bio} = req.body;
  
      // Validate that the required fields are present
      if (!username) {
        return res.status(400).json({ error: 'Username is required' });
      }

      if(!full_name){
        return res.status(400).json({ error: 'Full name is required' });
      }
      if(!password){
        return res.status(400).json({ error: 'Password is required' });
      }
      if(!email){
        return res.status(400).json({ error: 'Email is required' });
      }
      // Create a new user
      const newUser = await User.create({ username,
        full_name,
        email,
        password,
        bio });
  
      // Respond with the created user
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

  
  
  // API endpoint to delete a user by ID
  exports.deleteUser = async (req, res, next) => {
    try {
      console.log("inside delete");
      const userId = req.params.userId;
  
      // Validate that userId is a positive integer
      if (!/^\d+$/.test(userId)) {
        return res.status(400).json({ error: 'Invalid userId' });
      }
  
      // Check if the user exists
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Delete the user
      await user.destroy();
  
      // Respond with a success message
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}
  
exports.editUser = async (req, res, next) => {
    try {
      console.log("inside delete api")
      const userId = req.params.userId;
      const { username } = req.body;
  
      // Validate that userId is a positive integer
      if (!/^\d+$/.test(userId)) {
        return res.status(400).json({ error: 'Invalid userId' });
      }
  
      // Check if the user exists
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user's username
      await user.update({ username });
  
      // Respond with the updated user
      res.status(200).json(user);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}