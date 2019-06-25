const request = require('supertest')
const app = require('./index')

describe('Test', () => {
  it('GET / should return a greeting', () => {
    return request(app)
      .get('/')
      .expect("Hello World! This is new!")
  });
});