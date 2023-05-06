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
const Post_models_1 = require("../database/models/Post.models");
const Response_1 = require("../utils/Response");
const index = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post_models_1.Post.find({});
        return response.send((0, Response_1.httpOk)(posts, `Post fetched`));
    }
    catch (error) {
        return response.send((0, Response_1.httpInternalServerError)(error, "Internal server error"));
    }
});
const create = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { post_data, title } = request.body;
        const newPost = new Post_models_1.Post();
        newPost.title = title;
        newPost.post_data = post_data;
        newPost.save().then((data) => {
            return response.send((0, Response_1.httpOk)(data, "Post created"));
        }).catch((error) => {
            return response.send((0, Response_1.httpInternalServerError)(error, "Internal server error"));
        });
    }
    catch (error) {
        return response.send((0, Response_1.httpInternalServerError)(error, "Internal server error"));
    }
});
exports.default = { index, create };
