const express = require('express');
const { getCurrentQuestionForUser, assignQuestionToCycle } = require('../controllers/question.controller.js');
const router = express.Router();

// Get current question for a user
router.get('/user/:userId/question', getCurrentQuestionForUser);

// Assign question to cycle
router.post('/cycle/assign', assignQuestionToCycle);

module.exports = router;
 