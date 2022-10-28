'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    admissionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};