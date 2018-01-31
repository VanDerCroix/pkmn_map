'use strict';
module.exports = (sequelize, DataTypes) => {
  var Gym = sequelize.define('Gym', {
    gymid: DataTypes.STRING,
    name: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Gym;
};