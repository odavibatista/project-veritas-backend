"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsResources = void 0;
const models_1 = require("../../models");
const category_1 = require("./category");
const course_1 = require("./course");
const episode_1 = require("./episode");
const user_1 = require("./user");
exports.adminJsResources = [
    {
        resource: models_1.Category,
        options: category_1.categoryResourceOptions
    },
    {
        resource: models_1.Course,
        options: course_1.courseResourceOptions,
        features: course_1.CourseResourceFeatures
    },
    {
        resource: models_1.Episode,
        options: episode_1.episodeResourceOptions,
        features: episode_1.episodeResourceFeatures
    },
    {
        resource: models_1.User,
        options: user_1.userResourceOptions
    }
];
