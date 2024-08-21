import express from 'express';

export const teamRouter = express.Router();


teamRouter.get('/', (request, response) => {
    return response.send('Team page');
})

teamRouter.get('/:name', (request, response) => {
    if (request.params.name === 'chuck') {
        return response.send(`Team member: ${request.params.name} all info about this person.`)
    }
    return response.send(`Team member: "${request.params.name}" page not found`);
})