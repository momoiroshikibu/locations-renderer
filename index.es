import express from 'express';
import LoginView from './lib/views/LoginView';
import HistoryController from './lib/controllers/HistoryController';
import {login, authenticate} from './lib/controllers/LoginController';
import PortalController from './lib/controllers/PortalController';
import LocationController from './lib/controllers/LocationController';

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
    secret: 'yeah',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: false
    }
}));


import morgan from 'morgan';
app.use(morgan('combined'));


import SessionChecker from './lib/middlewares/SessionChecker';

app.get('/login', login);

app.get('/', SessionChecker, PortalController);

app.get('/locations', SessionChecker, LocationController);

app.post('/authenticate', urlEncodedParser, authenticate);

app.get('/history', SessionChecker, HistoryController);

app.listen(port);
