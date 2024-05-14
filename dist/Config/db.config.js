"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
require("dotenv/config"); // module to read .env files
var mongoose_1 = __importDefault(require("mongoose")); // object document mapping module
var connectionString = process.env.CONNSTRING;
/*
  Avoid hard-coding sensitive information,
  Don't forget to add senitive files to .gitignore,
  Environment variables can be only reached from the process' itself
*/
if (!connectionString) {
    console.error('Db connection string is not defined in the .env file');
    process.exit(1);
}
var options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
//db connection
exports.db = mongoose_1.default.connect(connectionString, options)
    .then(function (res) {
    if (res) {
        console.log("Database connection is succeffully established.");
    }
}).catch(function (err) {
    console.log(err); // implement a error-handling mechanism
});
// import { MongoMemoryServer } from "mongodb-memory-server"; 
// import mongoose from 'mongoose';
// export default async function db() {
//     const mongoServer = await MongoMemoryServer.create();
//     const mongoUri = mongoServer.getUri();
//     await mongoose.connect(mongoUri, { dbName: "testingDb" });
//     console.log(`MongoDB successfully connected to ${mongoUri}`);
// }
