"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRefreshToken = exports.generateAccessToken = exports.authenticateUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const Response_1 = require("../utils/Response");
const User_model_1 = require("../database/models/User.model");
const Constants_1 = require("../config/Constants");
function authenticateUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = request.body.token || request.headers["x-access-token"];
        if (!token) {
            return response.status(401).send((0, Response_1.httpUnauthorized)({}, "Token required for authentication."));
        }
        try {
            const decoded = (0, jsonwebtoken_1.verify)(token, Constants_1.AppConfig.ACCESS_TOKEN_SECRET);
            if (decoded) {
                const auth_user = yield User_model_1.User.findOne({ _id: decoded._id });
                request.user = {
                    id: auth_user === null || auth_user === void 0 ? void 0 : auth_user._id,
                    name: auth_user === null || auth_user === void 0 ? void 0 : auth_user.name
                };
            }
        }
        catch (error) {
            return response.status(401).send((0, Response_1.httpUnauthorized)({}, "Invalid and expired token"));
        }
        return next();
    });
}
exports.authenticateUser = authenticateUser;
function generateAccessToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0, jsonwebtoken_1.sign)(user, Constants_1.AppConfig.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
    });
}
exports.generateAccessToken = generateAccessToken;
function generateRefreshToken(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const refreshToken = (0, jsonwebtoken_1.sign)(user, Constants_1.AppConfig.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
        return refreshToken;
    });
}
exports.generateRefreshToken = generateRefreshToken;
