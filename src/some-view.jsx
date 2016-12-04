import ReactDOMServer from 'react-dom/server';
import SampleComponent from './SampleComponent';
import React from 'react';

export default function () {
    return ReactDOMServer.renderToString(<SampleComponent />);
};
