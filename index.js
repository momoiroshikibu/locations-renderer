const express = require('express'),
      app = express();




const ReactDomServer = require('react-dom/server');

const SampleComponent = require('./src/SampleComponent.jsx');


const port = process.argv[2];

app.get('/', (req, res) => {
    
//     res.send({
//         message: 'yeah!'
//     });
});

app.listen(port);

