import express from 'express';
import LoginView from './lib/views/LoginView';
import HistoryController from './lib/controllers/HistoryController';
import LoginController from './lib/controllers/LoginController';

const app = express(),
      port = process.argv[2];


import morgan from 'morgan';
app.use(morgan('combined'));


app.get('/', LoginController);

app.get('/history', HistoryController);

app.listen(port);
