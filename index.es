import express from 'express';
import LoginView from './lib/views/LoginView';
import HistoryController from './lib/controllers/HistoryController';
import {login, authenticate} from './lib/controllers/LoginController';
import portal from './lib/controllers/PortalController';

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


import SessionChecker from './lib/middlewares/SessionChecker';

app.get('/login', login);

app.get('/', SessionChecker, portal);

app.post('/authenticate', urlEncodedParser, authenticate);

app.get('/history', SessionChecker, HistoryController);

app.listen(port);
