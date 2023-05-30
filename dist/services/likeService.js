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
exports.likeService = void 0;
const models_1 = require("../models");
exports.likeService = {
    create: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const like = yield models_1.Like.create({
            userId,
            courseId
        });
        return like;
    }),
    delete: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Like.destroy({
            where: {
                userId,
                courseId
            }
        });
    }),
    isLiked: (userId, courseId) => __awaiter(void 0, void 0, void 0, function* () {
        const like = yield models_1.Like.findOne({
            where: {
                userId,
                courseId
            }
        });
        return like !== null ? true : false;
    })
};
