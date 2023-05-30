"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const environment_1 = require("../config/environment");
exports.sequelize = new sequelize_1.Sequelize(environment_1.DATABASE_URL, {
    define: {
        underscored: true
    }
});
