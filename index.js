import express from 'express';

import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    return response.send('Home page');
})

app.get('/about', (request, response) => {
    return response.send('About page');
})
// ----------------------------------------------------------------
app.use('/students', studentsRouter);
// ------------------------------------------------------------------------------

app.use('/books', booksRouter)

app.route('/phones')
    .get((req, res) => {
        return res.send(`GET: phones`)
    })
    .post((req, res) => {
        return res.send(`POST: phones`)
    })
    .put((req, res) => {
        return res.send(`PUT: phones`)
    })
    .delete((req, res) => {
        return res.send(`DELETE: phones`)
    })


app.use('/services', servicesRouter);
app.use('/team', teamRouter);

app.get('*', (request, response) => {
    return response.send('Ups... 404 Nerasta');
})

app.listen(port, () => {
    console.log(`App running on: http:localhost:${port}`);
})