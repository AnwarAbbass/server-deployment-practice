'use strickt';

const serv = require('../server.js');
require('dotenv').config();

const PORT= process.env.PORT||3000;

serv.start(PORT);