"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.User = database_1.sequelize.define('User', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    birth: {
        allowNull: false,
        type: sequelize_1.DataTypes.DATE
    },
    email: {
        allowNull: false,
        unique: true,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isIn: [['admin', 'user']]
        }
    }
}, {
    hooks: {
        beforeSave: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.isNewRecord || user.changed('password')) {
                user.password = yield bcrypt_1.default.hash(user.password.toString(), 10);
            }
        })
    }
});
exports.User.prototype.checkPassword = function (password, callbackfn) {
    bcrypt_1.default.compare(password, this.password, (err, isSame) => {
        if (err) {
            callbackfn(err);
        }
        else {
            callbackfn(err, isSame);
        }
    });
};
