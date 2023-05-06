"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpNotFoundOr404 = exports.httpUnauthorized = exports.httpOk = exports.httpInternalServerError = void 0;
function httpInternalServerError(response, message) {
    const json_response = {
        status: false,
        status_code: 500,
        message: message,
        results: response
    };
    return json_response;
}
exports.httpInternalServerError = httpInternalServerError;
function httpOk(response, message) {
    const json_response = {
        status: true,
        status_code: 200,
        message: message,
        results: response
    };
    return json_response;
}
exports.httpOk = httpOk;
function httpUnauthorized(response, message) {
    const json_response = {
        status: false,
        status_code: 401,
        message: message,
        results: response
    };
    return json_response;
}
exports.httpUnauthorized = httpUnauthorized;
function httpNotFoundOr404(response, message) {
    const json_response = {
        status: false,
        status_code: 404,
        message: message,
        results: response
    };
    return json_response;
}
exports.httpNotFoundOr404 = httpNotFoundOr404;
