'use strickt';

const serv = require('../server.js');
const test = require('supertest');
const req = test(serv.app);

describe('server', () => {
  it('should be 404 status', async () => {
    const res = await req.get('/III')
    expect(res.status).toBe(404);
  });

  it('should be 500 status', async () => {
    const res = await req.get('/bad')
    expect(res.status).toEqual(500);
  });

  it('should be welcome message', async () => {
    const res = await req.get('/')
    expect(res.status).toBe(200);
    expect(res.text).toBe('welcome to server.js');
  });

});