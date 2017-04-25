'use strict';
module.exports = function(sequelize, DataTypes) {
  var diseaseSymptom = sequelize.define('diseaseSymptom', {
    diseaseId: DataTypes.INTEGER,
    symptomId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return diseaseSymptom;
};