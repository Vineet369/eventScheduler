'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cycles extends Model {
   
    static associate(models) {
      Cycles.hasMany(models.Questions, { foreignKey: 'region_id' });
    }
  }
  Cycles.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    cycle_span: DataTypes.INTEGER,
    region_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cycles',
  });
  return Cycles;
};