const supertest = require('supertest');

const server = require('./server.js');

describe('server', () => {
    describe('GET /', () => {
        it('reponds with 200 OK', () => {
            return supertest(server)
            .get('/messages')
            .expect(200)
        })
        it('responds with 200 OK', () => {
            return supertest(server)
            .get('/users')
            .expect(200)
        })
        it('responds with 200 OK', () => {
            return supertest(server)
            .get('/announcements')
            .expect(200)
        })
        it('responds with 200 OK', () => {
            return supertest(server)
            .get('/myMentors/1')
            .expect(200)
        })
        it('responds with 200 OK', async () => {
            supertest(server)
            .get('/users')
            .expect('Content-Type', /json/i);
        })
        it('responds with 200 OK', async () => {
            supertest(server)
            .get('/messages')
            .expect('Content-Type', /json/i);
        })
        it('responds with 200 OK', async () => {
            supertest(server)
            .get('/myMentors/1')
            .expect('Content-Type', /json/i);
        })
        it('responds with correct status', async () => {
            supertest(server)
            .get('/announcements')
            .expect('Content-Type', String);
        })
    })
})