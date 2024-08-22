import express from 'express';

import { servicesRouter } from './router/servicesRouter.js';
import { teamRouter } from './router/teamRouter.js';
import { studentsRouter } from './router/studentsRouter.js';
import { booksRouter } from './router/booksRouter.js';
import { apiRouter } from './router/apiRouter.js';
import { phoneRouter } from './router/phoneRouter.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    return response.send('Home page');
})

app.get('/about', (request, response) => {
    return response.send('About page');
})

app.use('/api', apiRouter);
app.use('/students', studentsRouter);
app.use('/books', booksRouter);
app.use('/phones', phoneRouter)
app.use('/services', servicesRouter);
app.use('/team', teamRouter);

app.get('*', (request, response) => {
    return response.send('Ups... 404 Nerasta');
})

app.listen(port, () => {
    console.log(`App running on: http:localhost:${port}`);
})