const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const regionRoutes = require('./routes/region.route');
const assignQuestionRoutes = require('./routes/assignQuestion.route');

// Middleware
app.use(bodyParser.json());

// Use the region routes and assign question routes
app.use('/api/users', userRoutes);
app.use('/api/regions', regionRoutes);
app.use('/api/assign-question', assignQuestionRoutes);
 
module.exports = app; // Export the app to be used in index.js
 