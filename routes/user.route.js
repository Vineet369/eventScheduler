const express = require('express');
const router = express.Router();
const { getUserById, createUser } = require('../controllers/user.controller.js');

// Routes for user management
router.get('/:userId', getUserById);           
router.post('/', createUser);                   
        

module.exports = router;
