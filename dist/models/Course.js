"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
exports.Course = database_1.sequelize.define('Course', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    synopsis: {
        allowNull: false,
        type: sequelize_1.DataTypes.TEXT
    },
    thumbnailUrl: {
        type: sequelize_1.DataTypes.STRING,
    },
    featured: {
        defaultValue: false,
        type: sequelize_1.DataTypes.BOOLEAN
    },
    categoryId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
    }
});
