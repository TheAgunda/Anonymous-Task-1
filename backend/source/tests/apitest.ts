import chai from "chai";
import chaiHttp from "chai-http";

import httpServer from "../server";

let should = chai.should();
chai.use(chaiHttp);

describe('TESTS', () => {
    describe('/GET posts', () => {
        it('It should GET all the posts', (done) => {
            chai.request(httpServer)
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
    
            }
            chai.request(httpServer)
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