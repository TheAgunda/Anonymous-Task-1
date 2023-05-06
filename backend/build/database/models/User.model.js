"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const UserSchema = new mongoose_1.Schema({
    name: { type: String },
    email: {
        type: String, lowercase: true, index: true, required: true,
    },
    password: {
        type: String, max: 1024, required: true
    },
    isDeleted: { type: Boolean, default: false, select: false },
}, {
    timestamps: true
});
UserSchema.pre('save', function (_next) {
    const user = this;
    if (!user.isModified('password')) {
        return _next();
    }
    (0, bcrypt_1.genSalt)(10, (error, salt) => {
        if (error) {
            return _next(error);
        }
        (0, bcrypt_1.hash)(user.password, salt, (error, passwordHash) => {
            if (error) {
                return _next(error);
            }
            user.password = passwordHash;
            return _next();
        });
    });
});
UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });
UserSchema.methods.comparePassword = function (requestPassword, cb) {
    (0, bcrypt_1.compare)(requestPassword, this.password, (error, isMatch) => {
        return cb(error, isMatch);
    });
};
UserSchema.methods.hidePasswordAndAddTokens = function (accessToken, refreshToken) {
    const user = this.toObject();
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    delete user.password;
    return user;
};
exports.User = (0, mongoose_1.model)("User", UserSchema);
