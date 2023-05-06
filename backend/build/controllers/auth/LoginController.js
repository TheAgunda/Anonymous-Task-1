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
const User_model_1 = require("../../database/models/User.model");
const Response_1 = require("../../utils/Response");
const Authenticate_1 = require("../../middleware/Authenticate");
const login = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const user = yield User_model_1.User.findOne({ email: email });
        if (!user) {
            return response.send((0, Response_1.httpNotFoundOr404)({}, "User not found"));
        }
        user.comparePassword(password, (error, isMatch) => __awaiter(void 0, void 0, void 0, function* () {
            if (error) {
                return response.send((0, Response_1.httpInternalServerError)(error, "Internal Sever Error"));
            }
            if (!isMatch) {
                return response.status(401).send((0, Response_1.httpUnauthorized)({}, `Invalid or incorrect password.`));
            }
            const accessToken = yield (0, Authenticate_1.generateAccessToken)({
                _id: user._id,
            });
            const refreshToken = yield (0, Authenticate_1.generateRefreshToken)({
                _id: user._id,
            });
            response.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "none" });
            return response.send((0, Response_1.httpOk)(user.hidePasswordAndAddTokens(accessToken, refreshToken), `Login Success`));
        }));
    }
    catch (error) {
        return response.send((0, Response_1.httpInternalServerError)(error, "Internal sever error"));
    }
});
const register = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = request.body;
        const user = yield User_model_1.User.findOne({ email: email });
        if (user) {
            return response.send((0, Response_1.httpOk)({}, "User already exist"));
        }
        const newUser = new User_model_1.User();
        newUser.email = email;
        newUser.password = password;
        newUser.name = "";
        newUser.save().then((user) => {
            return response.send((0, Response_1.httpOk)(user, `Register Success`));
        }).catch((error) => {
            return response.send((0, Response_1.httpInternalServerError)(error, "Internal sever error"));
        });
    }
    catch (error) {
        return response.send((0, Response_1.httpInternalServerError)(error, "Internal sever error"));
    }
});
exports.default = { login, register };
