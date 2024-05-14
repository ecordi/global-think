"use strict";
// import { UserService } from '../Services/user.service'
// import { User, UserschemaValidate } from '../Models/users'
// import { injectable, inject } from 'inversify'
// import { TYPES, SORT_OPT } from "../DI/types" // used in inversify
// import { IResult } from '../Interfaces/IResult'
// import { resourceLimits } from 'worker_threads'
// import { Express, Request, Response } from 'express';
// import { NextFunction } from 'express-serve-static-core'
// import { error } from 'console'
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// @injectable() // that is called as decorator-annotation
// class UserController {
//     private service: UserService; // there is no private modifier in JS
//     constructor(@inject(TYPES.service) service: UserService) { // constructor injection
//         this.service = service
//     }
//     getUsers = async (req: Request, res: Response) => { // non-blocking approach
//         const sortParam = req.query.sort;
//         const isValid = this.isValidSortOption(sortParam)
//         const users = await this.service.getUsers();
//         res.send(users);
//     }
//     isValidSortOption(value: any): value is SORT_OPT {
//         return Object.values(SORT_OPT).includes(value);
//     }
//     //get a single user
//     getAUser = async (req: Request, res: Response) => { // when the async task is finished fires a callback function
//         const id = req.params.id // extract id from the link
//         const user = await this.service.getUser(id)
//         if (user == '404') {
//             console.log("the user is ",user);
//             return res.status(404).json({ message: 'User not found' });
//         }else{
//             console.log("user is not undefined")
//             res.status(200).send(user)
//         }
//     }
//     //add user controller
//     adduser = async (req: Request, res: Response) => {
//         //data to be saved in database
//         const data = {
//             nombre: req.body.nombre,
//             correo: req.body.correo,
//             edad: req.body.edad
//         }
//         //validating the request
//         const { error, value } = UserschemaValidate.validate(data)
//         if (error) {
//             res.send(error.message)
//         } else {
//             //call the create user function in the service and pass the data from the request
//             const user = await this.service.createUser(value)
//             res.status(201).send(user) // status is set to ok
//         }
//     }
//     //update user
//     updateUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         const user = await this.service.updateUser(id, req.body)
//         res.send(user)
//     }
//     //delete a user
//     deleteUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         await this.service.deleteUser(id)
//         res.send('user deleted')
//     }
//     //pagination
//     getChunk = async (req: Request, res: Response) => {
//         const pi = req.query;
//         console.log("🚀 ~ file: user.controller.ts:35 ~ UserController ~ getAUser= ~ pi:", req.query)
//           const limit = 5;
//           const queryPool = {
//               sortType: req.sortType,
//               pageIndex: req.pageIndex,
//               orderBy: req.orderBy,
//               filter: req.filter
//           }
//           const answer: IResult | undefined = await this.service.getChunk(queryPool, limit);
//           const isString = typeof answer;
//           if (isString === 'string') { // if an error message is returned
//               return res.status(400).json({ message: answer })
//           }
//           return res.status(200).json(answer)
//       }
//     //update user with patch
//     patchUser = async (req: Request, res: Response) => {
//         const id = req.params.id
//         const user = await this.service.patchUpdate(id, req.body)
//         res.send(user)
//     }
//     search = async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             const queryPool = {
//                 sortType: req.sortType,
//                 pageIndex: req.pageIndex,
//                 orderBy: req.orderBy
//             }
//             const query = req.query.q as string
//             console.log(req.query.q);
//             const answer = await this.service.search(query, queryPool)
//                 return res.status(200).json(answer)
//         } catch (error) { console.log(error) }
//     }
// }
// export { UserController } 
var user_service_1 = require("../Services/user.service");
var users_1 = require("../Models/users");
var inversify_1 = require("inversify");
var types_1 = require("../DI/types"); // used in inversify
var UserController = /** @class */ (function () {
    function UserController(service) {
        var _this = this;
        //get all users
        // getUsers = async (req: Request, res: Response) => {
        //   // non-blocking approach
        //   const sortParam = req.query.sort;
        //   const isValid = this.isValidSortOption(sortParam);
        //   const users = await this.service.getUsers();
        //   res.send(users);
        // };
        this.getUsers = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b, page, _c, limit, parsedPage, parsedLimit, users, count, err_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 3, , 4]);
                        _a = req.query, _b = _a.page, page = _b === void 0 ? '1' : _b, _c = _a.limit, limit = _c === void 0 ? '10' : _c;
                        parsedPage = parseInt(page, 10);
                        parsedLimit = parseInt(limit, 10);
                        return [4 /*yield*/, users_1.User.find(__assign({}, req.query))
                                .limit(parsedLimit)
                                .skip((parsedPage - 1) * parsedLimit)
                                .sort({ createdAt: -1 })];
                    case 1:
                        users = _d.sent();
                        return [4 /*yield*/, users_1.User.countDocuments()];
                    case 2:
                        count = _d.sent();
                        // Enviamos la respuesta al cliente
                        return [2 /*return*/, res.status(200).json({
                                users: users,
                                totalPages: Math.ceil(count / parsedLimit),
                                currentPage: parsedPage,
                            })];
                    case 3:
                        err_1 = _d.sent();
                        // Pasamos el error al siguiente middleware
                        next(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //get a single user
        this.getAUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.getUser(id)];
                    case 1:
                        user = _a.sent();
                        if (user == "404") {
                            console.log("the user is ", user);
                            return [2 /*return*/, res.status(404).json({ message: "User not found" })];
                        }
                        else {
                            console.log("user is not undefined");
                            res.status(200).send(user);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        //add user controller
        this.adduser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data, _a, error, value, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = {
                            nombre: req.body.nombre,
                            correo: req.body.correo,
                            edad: req.body.edad,
                        };
                        _a = users_1.UserschemaValidate.validate(data), error = _a.error, value = _a.value;
                        if (!error) return [3 /*break*/, 1];
                        res.send(error.message);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.service.createUser(value)];
                    case 2:
                        user = _b.sent();
                        res.status(201).send(user); // status is set to ok
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        //update user
        this.updateUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.updateUser(id, req.body)];
                    case 1:
                        user = _a.sent();
                        res.send(user);
                        return [2 /*return*/];
                }
            });
        }); };
        //delete a user
        this.deleteUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.deleteUser(id)];
                    case 1:
                        _a.sent();
                        res.send("user deleted");
                        return [2 /*return*/];
                }
            });
        }); };
        //pagination
        //   getChunk = async (req: Request, res: Response) => {
        //     const limit = 5;
        //     const queryPool = {
        //         sortType: req.sortType,
        //         pageIndex: req.pageIndex,
        //         orderBy: req.orderBy,
        //         filter: req.filter
        //     };
        //     console.log("🚀 ~ file: user.controller.ts:215 ~ UserController ~ getChunk= ~ queryPool:", queryPool.orderBy)
        //     try {
        //         const answer: IResult | undefined = await UserService.getChunk(queryPool, limit);
        //         if (!answer) {
        //             return res.status(404).json({ message: 'No se encontraron resultados.' });
        //         }
        //         return res.status(200).json(answer);
        //     } catch (error) {
        //         return res.status(500).json({ message: 'Error al obtener el fragmento de usuarios paginados.' });
        //     }
        // };
        //update user with patch
        this.patchUser = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.patchUpdate(id, req.body)];
                    case 1:
                        user = _a.sent();
                        res.send(user);
                        return [2 /*return*/];
                }
            });
        }); };
        this.search = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var queryPool, query, answer, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        queryPool = {
                            sortType: req.sortType,
                            pageIndex: req.pageIndex,
                            orderBy: req.orderBy,
                        };
                        query = req.query.q;
                        console.log(req.query.q);
                        return [4 /*yield*/, this.service.search(query, queryPool)];
                    case 1:
                        answer = _a.sent();
                        return [2 /*return*/, res.status(200).json(answer)];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // constructor injection
        this.service = service;
    }
    UserController.prototype.isValidSortOption = function (value) {
        return Object.values(types_1.SORT_OPT).includes(value);
    };
    UserController = __decorate([
        (0, inversify_1.injectable)() // that is called as decorator-annotation
        ,
        __param(0, (0, inversify_1.inject)(types_1.TYPES.service)),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
