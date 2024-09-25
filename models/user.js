'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      
      Users.belongsTo(models.Regions, { foreignKey: 'region_id' });
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Regions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
