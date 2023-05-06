import { Request, Response, NextFunction } from "express";
import { Post } from "../database/models/Post.models";
import { httpInternalServerError, httpOk } from "../utils/Response";
const index = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const posts = await Post.find({});
        return response.send(httpOk(posts, `Post fetched`));
    } catch (error: any) {
        return response.send(httpInternalServerError(error, "Internal server error"));
    }
};
const create = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { post_data, title } = request.body;
        const newPost = new Post();
        newPost.title = title;
        newPost.post_data = post_data;
        newPost.save().then((data) => {
            return response.send(httpOk(data, "Post created"));
        }).catch((error) => {
            return response.send(httpInternalServerError(error, "Internal server error"));
        });
    } catch (error: any) {
        return response.send(httpInternalServerError(error, "Internal server error"));
    }
}


export default { index, create };
