'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Users = require('./user')(sequelize, Sequelize.DataTypes); 

const Regions = require('./region')(sequelize, Sequelize.DataTypes); 

const Questions = require('./question')(sequelize, Sequelize.DataTypes); 

const Cycles = require('./cycle')(sequelize, Sequelize.DataTypes); 

db.Users = Users; 
db.Regions = Regions; 
db.Questions = Questions;
db.Cycles = Cycles;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
