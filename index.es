import express from 'express';
import LoginView from './lib/views/LoginView';
import HistoryController from './lib/controllers/HistoryController';
import {index, authenticate, getSession} from './lib/controllers/LoginController';

import bodyParser from 'body-parser';

const urlEncodedParser = bodyParser.urlencoded({
    extended: false
});


const app = express(),
      port = process.argv[2];


const session = require('express-session'),
      RedisStore = require('connect-redis')(session);

app.use(session({
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379
    }),
    secret: 'keyboard cat'
}));


import morgan from 'morgan';
app.use(morgan('combined'));



app.get('/', index);

app.post('/authenticate', urlEncodedParser, authenticate);

app.get('/session', getSession);

app.get('/history', HistoryController);

app.listen(port);
