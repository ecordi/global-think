"use strict";
// import { IRepository } from '../Interfaces/IRepository'
// import { IUser } from '../Interfaces/IUser'
// import { IResult } from '../Interfaces/IResult'
// import { injectable } from 'inversify'
// import { User } from '../Models/users'
// import "reflect-metadata";
// import { Document, Types } from 'mongoose'
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.UserService = void 0;
var inversify_1 = require("inversify");
var users_1 = require("../Models/users");
require("reflect-metadata");
// business layer
var UserService = /** @class */ (function () {
    function UserService() {
    }
    //get all users
    UserService.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.find({})];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //get a single user
    UserService.prototype.getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.findById({ _id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, '404'];
                        }
                        return [2 /*return*/, user];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, '404'];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //create a user
    UserService.prototype.createUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.create(data)];
                    case 1:
                        newUser = _a.sent();
                        return [2 /*return*/, newUser];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //update a user
    UserService.prototype.updateUser = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.findByIdAndUpdate({ _id: id }, data, { new: true })];
                    case 1:
                        users = _a.sent();
                        if (!users) {
                            return [2 /*return*/, "user not available"];
                        }
                        return [2 /*return*/, users];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //delete a user by using the find by id and delete 
    UserService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.findByIdAndDelete(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, 'user not available'];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.patchUpdate = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var updatedOne, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, users_1.User.updateOne({ _id: id }, { $set: data })];
                    case 1:
                        updatedOne = _a.sent();
                        return [2 /*return*/, updatedOne];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // //    static async getChunk(queryPool: {
    // //         sortType: string,
    // //         pageIndex: number,
    // //         orderBy: 1 | -1,
    // //         filter: {
    // //             edad: {
    // //                 $gte: number;
    // //                 $lte: number;
    // //             };
    // //         }
    // //     }, limit: number = 5) {
    // //         //const pagination = new Pagination(queryPool.pageIndex, limit); // pass page-index and limit
    // //         let items: (Document<unknown, any, IUser> & IUser & {
    // //             _id: Types.ObjectId;
    // //         })[]
    // // /*         if(queryPool.filter){
    // //             items = await User.find(queryPool.filter)
    // //             .sort({ [queryPool.sortType]: queryPool.orderBy }) // id is automatically generated by mongodb so users requested according to createdAt
    // //             .skip((queryPool.pageIndex - 1) * limit) // first user, get users by index
    // //             .limit(limit) // last user
    // //         }else{ */
    // //             items = await User.find(/* queryPool.filter */)
    // //             .sort({ [queryPool.sortType]: queryPool.orderBy }) // id is automatically generated by mongodb so users requested according to createdAt
    // //             .skip((queryPool.pageIndex - 1) * limit) // first user, get users by index
    // //             .limit(limit) // last user
    // //         const result: IResult = {
    // //             total: await User.countDocuments(),
    // //             limit: limit,
    // //             users: items
    // //         }
    // //         return result
    // //     }
    UserService.prototype.search = function (q, queryPool, limit) {
        if (limit === void 0) { limit = 2; }
        return __awaiter(this, void 0, void 0, function () {
            var answer, result, error_6;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        console.log(q);
                        return [4 /*yield*/, users_1.User.find({ $text: { $search: q, $caseSensitive: true } })
                                .sort((_a = {}, _a[queryPool.sortType] = queryPool.orderBy, _a))
                                .skip((queryPool.pageIndex - 1) * limit)
                                .limit(limit)];
                    case 1:
                        answer = _b.sent();
                        result = {
                            total: answer.length,
                            limit: limit,
                            users: answer
                        };
                        return [2 /*return*/, result];
                    case 2:
                        error_6 = _b.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserService = __decorate([
        (0, inversify_1.injectable)() // decorator
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
