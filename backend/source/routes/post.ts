import express, { Router } from "express";
import PostController from "../controllers/PostController"
import { authenticateUser } from "../middleware/Authenticate";
const PostEndpoint: Router = express.Router();
PostEndpoint.get("/", PostController.index);
PostEndpoint.post("/", authenticateUser, PostController.create);
export default PostEndpoint;
