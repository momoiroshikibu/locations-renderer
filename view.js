const ReactDOMServer = require('react-dom/server');
const SampleComponent = require('./src/SampleComponent.jsx');
const React = require('react');

console.log(
    ReactDOMServer.renderToString(<SampleComponent />)
)
