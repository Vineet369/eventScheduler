'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cycles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cycles.hasMany(models.Questions, { foreignKey: 'region_id' });
    }
  }
  Cycles.init({
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    region_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cycles',
  });
  return Cycles;
};