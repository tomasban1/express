

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    return response.send('Labas rytas!');
})
app.get('/about', (request, response) => {
    return response.send('Nori suzinoti apie projekta?');
})
app.get('*', (request, response) => {
    return response.send('Ups... Nerasta');
})

app.listen(port, () => {
    console.log(`App running on: http:localhost:${port}`);
})