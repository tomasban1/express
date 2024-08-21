import express from 'express';
import { serviceMemberRouter } from './serviceMemberRouter.js';

export const servicesRouter = express.Router();

servicesRouter.get('/', (req, res) => {
    return res.send('Services page')
});


servicesRouter.get('/:serviceName', (request, response) => {
    const services = ['design', 'ux', 'coding']
    if (services.includes(request.params.serviceName)) {
        return response.send(`About ${request.params.serviceName} service`)
    }
    return response.send('Services page: such services are not recognized');

})

servicesRouter.use('/:serviceName/members', serviceMemberRouter)