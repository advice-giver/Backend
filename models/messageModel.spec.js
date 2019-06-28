const db = require('../database/dbConfig.js');

const { add, update, remove, findAll, findByMessageId, getByUserId } = require('./messageModel.js');

describe('messageModel', () => {
    describe('add()', () => {
        it('should insert a message', async () => {
            await add({ message: "I really need your expertise on a business related issue", private: false, isAnswered: false, type: "Business", title: "Business Help", user_id: 15 })

            const messages = await db('messages');

            expect(messages[messages.length -1].title).toBe("Business Help")
        })
    })
    describe('getByUserId()', () => {
        it('should find messages by user id', async () => {
            const messages = await getByUserId(1);

            expect(messages).toHaveLength(1);
        })
    })

    describe('remove()', () => {
        it('should remove the message by message id', async () => {
            const messages = await remove(1); //message id, user message who posted is 1 also.
            const user1messages = await getByUserId(1);

            expect(user1messages).toHaveLength(1);
        })
    })
})