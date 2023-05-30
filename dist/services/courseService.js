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
exports.courseService = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
exports.courseService = {
    findByIdWithEpisodes: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const courseWithEpisodes = yield models_1.Course.findByPk(id, {
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url', 'thumbnailUrl']
            ],
            include: {
                association: 'episodes',
                attributes: [
                    'id',
                    'name',
                    'synopsis',
                    'order',
                    ['video_url', 'videoUrl'],
                    ['seconds_long', 'secondsLong']
                ],
                order: [['order', 'ASC']],
                separate: true
            }
        });
        return courseWithEpisodes;
    }),
    getRandomFeaturedCourses: () => __awaiter(void 0, void 0, void 0, function* () {
        const featuredCourses = yield models_1.Course.findAll({
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url', 'thumbnailUrl']
            ],
            where: {
                featured: true
            }
        });
        const randomFeaturedCourses = featuredCourses.sort(() => 0.5 - Math.random());
        return randomFeaturedCourses.slice(0, 3);
    }),
    getTopTenNewest: () => __awaiter(void 0, void 0, void 0, function* () {
        const courses = yield models_1.Course.findAll({
            limit: 10,
            order: [['created_at', 'DESC']]
        });
        return courses;
    }),
    getTopTenByLikes: () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const result = yield ((_a = models_1.Course.sequelize) === null || _a === void 0 ? void 0 : _a.query(`SELECT
                courses.id,
                courses.name,
                courses.synopsis,
                courses.thumbnail_url AS thumbnailUrl,
                COUNT(users.id) AS likes
            FROM courses
                LEFT OUTER JOIN likes
                    ON courses.id = likes.course_id
                    INNER JOIN users
                        ON users.id = likes.user_id
            GROUP BY courses.id
            ORDER BY likes DESC
            LIMIT 10;
            `));
        if (result) {
            const [topTen] = result;
            return topTen;
        }
        else {
            return null;
        }
    }),
    findByName: (name, page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const { count, rows } = yield models_1.Course.findAndCountAll({
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url', 'thumbnailUrl']
            ],
            where: {
                name: {
                    [sequelize_1.Op.iLike]: `%${name}%`
                }
            },
            limit: perPage,
            offset
        });
        return {
            courses: rows,
            page,
            perPage,
            total: count
        };
    })
};
