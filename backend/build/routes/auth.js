"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LoginController_1 = __importDefault(require("../controllers/auth/LoginController"));
const AuthEndpoint = express_1.default.Router();
AuthEndpoint.post('/login', LoginController_1.default.login);
AuthEndpoint.post('/register', LoginController_1.default.register);
exports.default = AuthEndpoint;
