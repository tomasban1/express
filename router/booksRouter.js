import express from 'express';

export const booksRouter = express.Router();

booksRouter.get('/', (request, response) => {
    return response.send('GET: books')
})
booksRouter.post('/', (request, response) => {
    return response.send('POST: books')
})
booksRouter.put('/', (request, response) => {
    return response.send('PUT: books')
})
booksRouter.delete('/', (request, response) => {
    return response.send('DELETE: books')
})