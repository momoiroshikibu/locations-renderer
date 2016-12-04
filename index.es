import express from 'express';
import SomeView from './lib/some-view';

const app = express(),
      port = process.argv[2];

app.get('/', (req, res) => {
    res.send(SomeView());
});

app.listen(port);
