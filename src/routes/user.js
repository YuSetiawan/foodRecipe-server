const express = require('express');
const router = express.Router();
const uploadUser = require('../middlewares/uploadUser');
const userController = require('../controller/user');
router
  .get('/profile/:id', userController.getselectUsers)
  .get('/profile', userController.getAllUser)
  .post('/register', userController.registerUser)
  .post('/login', userController.loginUser)
  .put('/profile/:id', uploadUser, userController.updateUsers)
  .delete('/profile/:id', userController.deleteUsers);
module.exports = router;
