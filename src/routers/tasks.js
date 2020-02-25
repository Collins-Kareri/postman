const express = require('express');
const Tasks = require('../models/tasks');
const router = new express.Router();

router.post('/tasks', async(req, res) => {
    const task = new Tasks(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    };
});

router.get('/tasks', async(req, res) => {
    try {
        const task = await Tasks.find({});
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch('/tasks/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates' })
    };

    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    };
});

router.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const task = await Tasks.findById(_id);
        if (!task) {
            return res.status(404).send();
        };
        res.send(task)
    } catch (e) {
        res.status(500).send(e);
    };
});

module.exports = router;