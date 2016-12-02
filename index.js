const express = require('express'),
      app = express();

const port = process.argv[2];

app.get('/', (req, res) => {
    res.send({
        message: 'yeah!'
    });
});

app.listen(port);
