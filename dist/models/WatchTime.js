"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchTime = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
exports.WatchTime = database_1.sequelize.define('WatchTime', {
    seconds: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    episodeId: {
        allowNull: false,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: 'episodes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});
