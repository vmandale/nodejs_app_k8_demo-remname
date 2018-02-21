var request = require('supertest');
var app = require('../server.js');
 
describe('GET /', function() {
  it('respond with Serie A 2016/17', function(done) {
    request(app).get('/').expect('Serie A 2016/17', done);
  });
});