import { DataTypes } from 'sequelize';
import { db } from '../database/db.js';

export const DB_Products = db.define("product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    discount:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false,
    tableName: "product"
});




