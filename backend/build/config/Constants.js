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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class AppConfig {
}
AppConfig.API_VERSION = "/api/v1";
AppConfig.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
AppConfig.DB_CONNECTION = (_b = process.env.DB_CONNECTION) !== null && _b !== void 0 ? _b : "";
AppConfig.ACCESS_TOKEN_SECRET = "VSMa0G6YqBfMVkIibZaF";
AppConfig.REFRESH_TOKEN_SECRET = "DNmAzjAdNdBb81zrZQjq";
exports.AppConfig = AppConfig;
