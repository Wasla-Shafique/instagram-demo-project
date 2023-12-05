const path = require('path');

const express = require('express');

const userController = require('../controllers/User');
const followController = require('../controllers/Follower')

const router = express.Router();

console.log("get request in router")


router.get('/api/user', userController.getUsers);

router.post('/api/user', userController.createUser);

router.put('/api/user/:userId', userController.editUser);

router.delete('/api/user/:userId', userController.deleteUser);


module.exports = router