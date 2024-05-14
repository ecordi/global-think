"use strict";
// import 'dotenv/config' // module to read .env files
// import mongoose from 'mongoose' // object document mapping module
// const connectionString = process.env.CONNSTRING
// /*
//   Avoid hard-coding sensitive information,
//   Don't forget to add senitive files to .gitignore,
//   Environment variables can be only reached from the process' itself
// */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// if (!connectionString) {
//   console.error('Db connection string is not defined in the .env file');
//   process.exit(1);
// }
// const options = {
//   autoIndex: false, // Don't build indexes
//   maxPoolSize: 10, // Maintain up to 10 socket connections
//   serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
//   socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//   family: 4 // Use IPv4, skip trying IPv6
// }
// //db connection
// export const db = mongoose.connect(connectionString!, options)
//   .then(res => {
//     if (res) {
//       console.log(`Database connection is succeffully established.`)
//     }
//   }).catch(err => {
//     console.log(err) // implement a error-handling mechanism
//   })
var mongodb_memory_server_1 = require("mongodb-memory-server");
var mongoose_1 = __importDefault(require("mongoose"));
function db() {
    return __awaiter(this, void 0, void 0, function () {
        var mongoServer, mongoUri;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongodb_memory_server_1.MongoMemoryServer.create()];
                case 1:
                    mongoServer = _a.sent();
                    mongoUri = mongoServer.getUri();
                    return [4 /*yield*/, mongoose_1.default.connect(mongoUri, { dbName: "testingDb" })];
                case 2:
                    _a.sent();
                    console.log("MongoDB successfully connected to ".concat(mongoUri));
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = db;
