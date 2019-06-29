'use strict';
module.exports = (sequelize, DataTypes) => {
  const Apartment = sequelize.define('Apartment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING,
    tenantId: DataTypes.INTEGER,
    landlordId: DataTypes.INTEGER,
    isVacant: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    tableName: "Apartment"
  });
  Apartment.associate = function(models) {
    // associations can be defined here
    Apartment.belongsTo(models.Tenant,{
      foreignKey: "tenantId"
    })
    Apartment.belongsTo(models.Landlord,{
      foreignKey: "landlordId"
    })
  };
  return Apartment;
};