"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const post_1 = __importDefault(require("./post"));
const APIEndpoint = express_1.default.Router();
APIEndpoint.use('/posts', post_1.default);
APIEndpoint.use("/auth", auth_1.default);
exports.default = APIEndpoint;
