import express from 'express';

export const apiRouter = express.Router();



apiRouter.get('/', (req, res) => {
    const data = {
        state: 'Error',
        message: 'Give a specific API endpoint',
    };
    return res.json(data);
});

const marks = [];

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    marks.push(req.body.mark)
    return res.json({
        state: 'success',
        message: 'Mark has been added',
    });
});

apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark;

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'Error',
            message: 'Mark position (index) has to be non-negative integer.',
        });
    };

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `The index of mark you want to update cannot be higher than : ${marks.length - 1}.`,
        });
    };

    if (typeof newMarkValue !== 'number' || !Number.isInteger(newMarkValue) || newMarkValue < 0) {
        return res.json({
            state: 'Error',
            message: 'The new mark has to be a non-negative integer number.',
        });
    };

    marks[position] = newMarkValue;

    return res.json({
        state: 'success',
        message: 'Mark has been updated',
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);


    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'Error',
            message: 'Mark position (index) has to be non-negative integer.',
        });
    };

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: `There are no marks to delete.`,
        });
    };

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `The index of mark you want to update cannot be higher than : ${marks.length - 1}.`,
        });
    };



    marks.splice(position, 1)

    return res.json({
        state: 'success',
        message: 'Mark has been deleted',
    });
});