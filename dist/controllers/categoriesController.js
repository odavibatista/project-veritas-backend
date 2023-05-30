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
exports.categoriesController = void 0;
const getPaginationParams_1 = require("../helpers/getPaginationParams");
const categoryService_1 = require("../services/categoryService");
exports.categoriesController = {
    // GET /categories
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const [page, perPage] = (0, getPaginationParams_1.getPaginationParams)(req.query);
        try {
            const paginatedCategories = yield categoryService_1.categoryService.findAllPaginated(page, perPage);
            return res.json(paginatedCategories);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // GET /categories/:id
    show: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const category = yield categoryService_1.categoryService.findByIdWithCourses(id);
            return res.json(category);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    })
};
