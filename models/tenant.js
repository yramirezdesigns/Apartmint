'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define('Tenant', {
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
    tableName: "Tenant"
  });
  Tenant.associate = function(models) {
    // associations can be defined here
    Tenant.hasOne(models.Apartment, {
      foreignKey: "tenantId"
    })
  };
  return Tenant;
};