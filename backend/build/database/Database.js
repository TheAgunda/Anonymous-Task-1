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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const Constants_1 = require("../config/Constants");
const mongoose_1 = __importDefault(require("mongoose"));
let database;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    if (database) {
        return;
    }
    const CONNECTION_URI = Constants_1.AppConfig.DB_CONNECTION;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 5000,
        socketTimeoutMS: 5000,
    };
    try {
        mongoose_1.default.set('strictQuery', true);
        yield mongoose_1.default.connect(CONNECTION_URI, options).then((database) => {
            console.log("Db connected");
        }).catch((error) => {
            console.log("DB Error :::", error);
        });
    }
    catch (error) {
        console.log("\nDB Error1 :::", error);
    }
    database = mongoose_1.default.connection;
});
exports.connect = connect;
const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose_1.default.disconnect();
    console.log("\nDisconnected to database");
};
exports.disconnect = disconnect;
