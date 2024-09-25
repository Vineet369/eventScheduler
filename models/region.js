'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Regions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Regions.hasMany(models.Questions, { foreignKey: 'region_id' });
      Regions.hasMany(models.Users, { foreignKey: 'region_id' });
    }
  }
  Regions.init({
    name: DataTypes.STRING,
    time_zone: DataTypes.STRING // Include time zone as well

  }, {
    sequelize,
    modelName: 'Regions',
  });
  return Regions;
};