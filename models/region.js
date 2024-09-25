'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
   
    static associate(models) {
      Regions.hasMany(models.Questions, { foreignKey: 'region_id' });
      Regions.hasMany(models.Users, { foreignKey: 'region_id' });
    }
  }
  Regions.init({
    name: DataTypes.STRING,
    time_zone: DataTypes.STRING, 

  }, {
    sequelize,
    modelName: 'Regions', 
  });
  return Regions;
};