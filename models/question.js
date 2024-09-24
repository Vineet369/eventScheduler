'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Questions.belongsTo(models.Regions, { foreignKey: 'region_id' });
    }
  }
  Questions.init({
    text: DataTypes.STRING,
    cycle: DataTypes.INTEGER,  // This is the cycle number
    region_id: DataTypes.INTEGER // Foreign key reference to Region
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};