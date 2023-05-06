"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Database = __importStar(require("./database/Database"));
const apis_1 = __importDefault(require("./routes/apis"));
const Constants_1 = require("./config/Constants");
/**
 * Database connectivity
 */
Database.connect();
const ExpressApp = (0, express_1.default)();
ExpressApp.use(express_1.default.json());
ExpressApp.use(express_1.default.urlencoded({ extended: false }));
ExpressApp.use(express_1.default.static("public"));
const allowedOrigins = ['http://localhost:3000',];
const options = {
    origin: allowedOrigins,
    exposedHeaders: 'x-auth-token',
};
ExpressApp.use((0, cors_1.default)(options));
ExpressApp.use(`${Constants_1.AppConfig.API_VERSION}`, apis_1.default);
/**
 * Error handling
 * */
ExpressApp.use((request, response, next) => {
    return response.sendStatus(404);
});
exports.default = ExpressApp;
