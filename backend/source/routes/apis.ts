import express, { Router } from "express";
import auth_route from "./auth";
import post_route from "./post";
const APIEndpoint: Router = express.Router();
APIEndpoint.use('/posts', post_route);
APIEndpoint.use("/auth", auth_route);
export default APIEndpoint;
