"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SORT_OPT = exports.TYPES = void 0;
exports.TYPES = {
    service: Symbol.for("UserService"),
    controller: Symbol.for("userController"),
};
var SORT_OPT;
(function (SORT_OPT) {
    SORT_OPT["nombre"] = "author";
    SORT_OPT["correo"] = "correo@mail.com";
    SORT_OPT[SORT_OPT["edad"] = 20] = "edad";
})(SORT_OPT = exports.SORT_OPT || (exports.SORT_OPT = {}));
