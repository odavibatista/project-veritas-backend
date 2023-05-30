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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthViaQuery = exports.ensureAuth = void 0;
const jwtService_1 = require("../services/jwtService");
const userService_1 = require("../services/userService");
function ensureAuth(req, res, next) {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader)
        return res.status(401).json({
            message: 'Não autorizado: nenhum token foi encontrado.'
        });
    const token = authorizationHeader.replace(/Bearer /, '');
    jwtService_1.jwtService.verifyToken(token, (err, decoded) => __awaiter(this, void 0, void 0, function* () {
        if (err || typeof decoded === 'undefined')
            return res.status(401).json({
                message: 'Não autorizado: token inválido.'
            });
        const user = yield userService_1.userService.findByEmail(decoded.email);
        req.user = user;
        next();
    }));
}
exports.ensureAuth = ensureAuth;
function ensureAuthViaQuery(req, res, next) {
    const { token } = req.query;
    if (!token)
        return res.status(401).json({
            message: 'Não autorizado: nenhum token foi encontrado.'
        });
    if (typeof token !== 'string')
        return res.status(400).json({
            message: 'O parâmetro token deve ser do tipo string'
        });
    jwtService_1.jwtService.verifyToken(token, (err, decoded) => __awaiter(this, void 0, void 0, function* () {
        if (err || typeof decoded === 'undefined')
            return res.status(401).json({
                message: 'Não autorizado: token inválido.'
            });
        const user = yield userService_1.userService.findByEmail(decoded.email);
        req.user = user;
        next();
    }));
}
exports.ensureAuthViaQuery = ensureAuthViaQuery;
