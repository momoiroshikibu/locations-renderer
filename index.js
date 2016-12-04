const express = require('express'),
      app = express();

const someView = require('./lib/some-view').default;

const port = process.argv[2];

app.get('/', (req, res) => {
    res.send(someView());
});

app.listen(port);

