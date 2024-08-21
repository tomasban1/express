import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

studentsRouter.get('/', (request, response) => {
    return response.send(`Mokosi ${Object.keys(students).length} studentai: ${students.jonas.name}, ${students.maryte.name}, ${students.petras.name} ir ${students.ona.name}`)

})
studentsRouter.get('/:studentName', (request, response) => {
    for (const student in students) {
        if (request.params.studentName === student) {
            return response.send(`Studentas, vardu ${student} yra ${students[student].age} metu amziaus ir yra ${students[student].isMarried ? 'vedes' : 'nevedes'}`)
        }

    }
    return response.send(`Studento vardu ${request.params.studentName} nera.`)
})