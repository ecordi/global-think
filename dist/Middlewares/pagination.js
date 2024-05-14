"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paginationMiddleware = function (pageIndex, pageSize) {
    if (pageSize === void 0) { pageSize = 5; }
    return function (req, res, next) {
        next(); // Call the next middleware
    };
};
