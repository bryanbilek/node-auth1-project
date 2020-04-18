const express = require('express');
const server = express();
const helmet = require('helmet');
// const projectsRouter = require('./routes/projectsRouter');
// const resourcesRouter = require('./routes/resourcesRouter');
// const tasksRouter = require('./routes/tasksRouter');

server.use(express.json());
server.use(helmet());
// server.use('/api/projects', projectsRouter);
// server.use('/api/resources', resourcesRouter);
// server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
    res.send('<h2>Web Auth I Module Challenge</h2>');
});

module.exports = server;