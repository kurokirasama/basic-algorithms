const request = require('supertest');
const app = require('../server');

describe('Server initialization', () => {
    it('should respond to GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});
