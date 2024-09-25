const express = require('express');
const router = express.Router();
const { getUserById, createUser } = require('../controllers/user.controller.js');

// Routes for user management
router.get('/:userId', getUserById);           // Fetch a user by ID
router.post('/', createUser);                  // Create a new user
// router.put('/:userId', updateUserRegion);      // Update user's region
// router.delete('/:userId', deleteUser);         // Delete a user

module.exports = router;
