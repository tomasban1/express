import express from 'express';

export const serviceMemberRouter = express.Router({
    mergeParams: true,
});

serviceMemberRouter.get('/', (request, response) => {
    const services = ['design', 'ux', 'coding']
    if (services.includes(request.params.serviceName)) {
        return response.send(`Paslaugos ${request.params.serviceName} nariu sarasas`);

    }
    return response.send(`Services page: ${request.params.serviceName} not found`)
})
serviceMemberRouter.get('/:memberName', (request, response) => {
    const serviceName = request.params.serviceName;
    const memberName = request.params.memberName;
    const members = ['Donatelas', 'Leonardas', 'Rafaelas', 'Mikelandzelas']
    if (members.includes(request.params.memberName)) {

        return response.send(`Paslaugos ${serviceName} nario ${memberName} informacija`);
    }
    return response.send(`Paslaugos ${serviceName} nario ${memberName} nepavyko rasti`);

})

