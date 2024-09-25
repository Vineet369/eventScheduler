const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');
const regionRoutes = require('./routes/region.route');
const cycleRoutes = require('./routes/cycle.route');

// Middleware
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/regions', regionRoutes);
app.use('/api/cycles', cycleRoutes);
 
module.exports = app; 
 