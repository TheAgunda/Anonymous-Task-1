import { Schema, model, Types, Document } from 'mongoose';

interface IPost {
    title?: string;
    post_data: string;
}

const PostSchema = new Schema<IPost>(
    {
        title: { type: String, required: true },
        post_data: {
            type: String, required: true,
        },
    },
    {
        timestamps: true
    });

PostSchema.set('toObject', { virtuals: true });
PostSchema.set('toJSON', { virtuals: true });

export const Post = model<IPost>("Post", PostSchema);