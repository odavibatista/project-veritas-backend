"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../config/environment");
exports.jwtService = {
    signToken: (payload, expiration) => {
        return jsonwebtoken_1.default.sign(payload, environment_1.JWT_KEY, {
            expiresIn: expiration
        });
    },
    verifyToken: (token, callbackfn) => {
        jsonwebtoken_1.default.verify(token, environment_1.JWT_KEY, callbackfn);
    }
};
