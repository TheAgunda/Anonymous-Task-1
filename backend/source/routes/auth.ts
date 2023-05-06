import express, { Router } from "express";
import LoginController from "../controllers/auth/LoginController"
const AuthEndpoint: Router = express.Router();
AuthEndpoint.post('/login', LoginController.login);
AuthEndpoint.post('/register', LoginController.register);
export default AuthEndpoint;
