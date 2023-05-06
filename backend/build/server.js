"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const Constants_1 = require("./config/Constants");
const app_1 = __importDefault(require("./app"));
const httpServer = http_1.default.createServer(app_1.default);
httpServer.listen(Constants_1.AppConfig.PORT, () => console.log(`The server is running on port ${Constants_1.AppConfig.PORT}`));
httpServer.timeout = 120000;
exports.default = httpServer;
