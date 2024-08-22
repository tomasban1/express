import express from 'express';

export const phoneRouter = express.Router();

phoneRouter.route('/')
    .get((req, res) => {
        return res.send(`GET: phones`);
    })
    .post((req, res) => {
        return res.send(`POST: phones`);
    })
    .put((req, res) => {
        return res.send(`PUT: phones`);
    })
    .delete((req, res) => {
        return res.send(`DELETE: phones`);
    });