"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationParams = void 0;
function getPaginationParams(query) {
    const { page, perPage } = query;
    const perPageNumber = typeof perPage === 'string' && parseInt(perPage, 10) > 0
        ? parseInt(perPage, 10)
        : 10;
    const pageNumber = typeof page === 'string' && parseInt(page, 10) > 0
        ? parseInt(page, 10)
        : 1;
    return [pageNumber, perPageNumber];
}
exports.getPaginationParams = getPaginationParams;
