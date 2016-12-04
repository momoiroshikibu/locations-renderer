import express from 'express';
import SomeView from './lib/some-view';
import {renderToString} from 'react-dom/server';

import HistoryComponent from './lib/HistoryComponent';
import HistoryController from './lib/HistoryController';

const app = express(),
      port = process.argv[2];

app.get('/', (req, res) => {
    res.send(SomeView());
});

app.get('/history', (req, res) => {
    HistoryController().then((response) => {
        return HistoryComponent(response);
    }).then((reactElement) => {
        console.log('here', reactElement);
        const html = renderToString(reactElement);
        console.log('here2');
        console.log(html);
        res.send(html);
    }).catch((e) => {
        console.error(e);
    });
});

app.listen(port);
