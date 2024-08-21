import express from 'express';
import { students } from './data/students.js';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    return response.send('Home page');
})

app.get('/about', (request, response) => {
    return response.send('About page');
})
// ----------------------------------------------------------------
app.get('/students', (request, response) => {
    return response.send(`Mokosi ${Object.keys(students).length} studentai: ${students.jonas.name}, ${students.maryte.name}, ${students.petras.name} ir ${students.ona.name}`)

})
app.get('/students/:studentName', (request, response) => {
    for (const student in students) {
        if (request.params.studentName === student) {
            return response.send(`Studentas, vardu ${student} yra ${students[student].age} metu amziaus ir yra ${students[student].isMarried ? 'vedes' : 'nevedes'}`)
        }

    }
    return response.send(`Studento vardu ${request.params.studentName} nera.`)
})
// ------------------------------------------------------------------------------
app.get('/services', (request, response) => {
    return response.send('Services page');
})

app.get('/services/:serviceName', (request, response) => {
    const services = ['design', 'ux', 'coding']
    if (services.includes(request.params.serviceName)) {
        return response.send(`About ${request.params.serviceName} service`)
    }
    return response.send('Services page: such services are not recognized');

})

app.get('/services/:serviceName/members', (request, response) => {
    const services = ['design', 'ux', 'coding']
    if (services.includes(request.params.serviceName)) {
        return response.send(`Paslaugos ${request.params.serviceName} nariu sarasas`);

    }
    return response.send(`Services page: ${request.params.serviceName} not found`)
})
app.get('/services/:serviceName/members/:memberName', (request, response) => {
    const serviceName = request.params.serviceName;
    const memberName = request.params.memberName;
    const members = ['Donatelas', 'Leonardas', 'Rafaelas', 'Mikelandzelas']
    if (members.includes(request.params.memberName)) {
        return response.send(`Paslaugos ${serviceName} nario ${memberName} nepavyko rasti`);

    }
    return response.send(`Paslaugos ${serviceName} nario ${memberName} informacija`);
})

app.get('/services/design', (request, response) => {
    return response.send('Services page: design');
})


app.get('/services/coding', (request, response) => {
    return response.send('Services page: coding');
})


app.get('/team', (request, response) => {
    return response.send('Team page');
})

app.get('/team/:name', (request, response) => {
    if (request.params === 'chuck') {
        return response.send(`Team member: ${request.params.name} all info about this person.`)
    }
    return response.send(`Team member: + "${request.params.name}" page not found`);
})

app.get('/team/chuck', (request, response) => {
    return response.send('Team page: Chuck Norris');
})

app.get('/team/*', (request, response) => {
    return response.send('Team page: Not found');
})

app.get('*', (request, response) => {
    return response.send('Ups... 404 Nerasta');
})


app.listen(port, () => {
    console.log(`App running on: http:localhost:${port}`);
})