"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotFound = void 0;
var pageNotFound = function (req, res) {
    res.status(404).json({ message: 'Page not found' });
};
exports.pageNotFound = pageNotFound;
