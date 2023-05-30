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
exports.likesController = void 0;
const likeService_1 = require("../services/likeService");
exports.likesController = {
    // POST /likes
    save: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const { courseId } = req.body;
        try {
            const like = yield likeService_1.likeService.create(userId, courseId);
            return res.status(201).json(like);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // DELETE /likes/:id
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const courseId = req.params.id;
        try {
            yield likeService_1.likeService.delete(userId, Number(courseId));
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    })
};
