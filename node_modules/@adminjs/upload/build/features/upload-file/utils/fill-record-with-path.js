"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillRecordWithPath = void 0;
const adminjs_1 = require("adminjs");
exports.fillRecordWithPath = async (record, context, uploadOptionsWithDefault, provider) => {
    const { properties, multiple } = uploadOptionsWithDefault;
    const key = adminjs_1.flat.get(record === null || record === void 0 ? void 0 : record.params, properties.key);
    const storedBucket = properties.bucket && adminjs_1.flat.get(record === null || record === void 0 ? void 0 : record.params, properties.bucket);
    let filePath;
    if (multiple && key && key.length) {
        filePath = await Promise.all(key.map(async (singleKey, index) => {
            var _a;
            return (provider.path(singleKey, (_a = storedBucket === null || storedBucket === void 0 ? void 0 : storedBucket[index]) !== null && _a !== void 0 ? _a : provider.bucket, context));
        }));
    }
    else if (!multiple && key) {
        filePath = await provider.path(key, storedBucket !== null && storedBucket !== void 0 ? storedBucket : provider.bucket, context);
    }
    return Object.assign(Object.assign({}, record), { params: adminjs_1.flat.set(record.params, properties.filePath, filePath) });
};
