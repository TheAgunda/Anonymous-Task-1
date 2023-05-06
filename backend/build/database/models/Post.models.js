"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    post_data: {
        type: String, required: true,
    },
}, {
    timestamps: true
});
PostSchema.set('toObject', { virtuals: true });
PostSchema.set('toJSON', { virtuals: true });
exports.Post = (0, mongoose_1.model)("Post", PostSchema);
