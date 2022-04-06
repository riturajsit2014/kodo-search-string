let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
let server = require('../app');

/**
 * Run test cases for the implemented API of searching string
 */
describe('Test for searching the king', () => {
    describe('/GET search', () => {
        it('it should GET all the objects containing the and king', (done) => {
            chai.request(server)
                .get('/search')
                .set('content-type', 'application/json')
                .send({ string: 'the king' })
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.count).should.be.eql(4);
                    done();
                });
        });
    });
    describe('/GET search with quotes', () => {
        it("it should GET all the objects containing 'the king'", (done) => {
            chai.request(server)
                .get('/search')
                .set('content-type', 'application/json')
                .send({ string: "'the king'" })
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    (res.body.count).should.be.eql(2);
                    done();
                });
        });
    });
});