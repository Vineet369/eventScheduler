'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
  
    static associate(models) {
      Questions.belongsTo(models.Regions, { foreignKey: 'region_id' });
      Questions.belongsTo(models.Cycles, { foreignKey: 'region_id' });
    }
  }
  Questions.init({
    text: DataTypes.STRING,
    cycle: DataTypes.INTEGER,  
    region_id: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
}; 