"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PostController_1 = __importDefault(require("../controllers/PostController"));
const Authenticate_1 = require("../middleware/Authenticate");
const PostEndpoint = express_1.default.Router();
PostEndpoint.get("/", PostController_1.default.index);
PostEndpoint.post("/", Authenticate_1.authenticateUser, PostController_1.default.create);
exports.default = PostEndpoint;
