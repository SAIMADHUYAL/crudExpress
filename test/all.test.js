
let chai = require('chai');
let chaiHttp = require('chai-http');


let expect = chai-expect;
chai.use(chaiHttp);

describe('Testing my project api',() => {
    it('200 status should be returned for /', function(done) {
        chai.request('http://localhost:3000').get('/').then((res) => {
            expect(res).to.have.status(200);
            done();
        })
        .catch((err) => {
            throw(err);
        })
    });
})