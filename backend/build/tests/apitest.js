"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importDefault(require("chai"));
const chai_http_1 = __importDefault(require("chai-http"));
const server_1 = __importDefault(require("../server"));
let should = chai_1.default.should();
chai_1.default.use(chai_http_1.default);
describe('TESTS', () => {
    describe('/GET posts', () => {
        it('It should GET all the posts', (done) => {
            chai_1.default.request(server_1.default)
                .get('/api/v1/posts')
                .end((err, res) => {
                (res).should.have.status(200);
                (res.body).should.be.a('object');
                (res.body).should.have.property('message').eql('Post fetched');
                (res.body).should.have.property('status_code').eql(200);
                (res.body).should.have.property('status').eql(true);
                done();
            });
        }).timeout(15000);
    });
    describe('/POST register', () => {
        it('It should register a test user ', (done) => {
            let user = {
                email: "user1@testuser.com",
                password: "@##@#132",
            };
            chai_1.default.request(server_1.default)
                .post('/api/v1/auth/register')
                .send(user)
                .end((err, res) => {
                res.should.have.status(200);
                (res.body).should.be.a('object');
                (res.body).should.have.property('message').eql('Register Success');
                (res.body).results.should.have.property('email');
                (res.body).results.should.have.property('password');
                (res.body).results.should.have.property('_id');
                done();
            });
        }).timeout(15000);
    });
});
