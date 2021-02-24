'use strict';

const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id : {
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        email : {
            type : DataTypes.STRING,
            allowNull: false,
        }
    });

    return Lead;
}