'use strict';
module.exports = (sequelize, DataTypes) => {
  const Landlord = sequelize.define('Landlord', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    tableName: "LandLord"
  });
  Landlord.associate = function(models) {
    Landlord.hasMany(models.Apartment, {
      foreignKey: "landlordId"
    })
    // associations can be defined here
  };
  return Landlord;
};