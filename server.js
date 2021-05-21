'use strict';

const express = require('express');
const app = express();

const errorHandler = require('./errorHandlers/500');
const notFoundHandler = require('./errorHandlers/404.js');

app.get('/', (req, res) => {
    res.send('welcome to server.js')
});

app.get('/bad', (req, res) => { throw new Error('something error'); });

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`listen on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start
};