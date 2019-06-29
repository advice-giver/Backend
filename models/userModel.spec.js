const db = require('../database/dbConfig.js');

const { findAll, findById, remove, update, add, findUser } = require('./userModel.js');


describe('userModel', () => {
    describe('get()', () => {
        it('should get a list of users', async () => {
            const users = await findAll();

            expect(users).toHaveLength(7);
        })
    })
})