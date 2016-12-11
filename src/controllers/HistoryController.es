import fetch from 'isomorphic-fetch';
import HistoryComponent from '../HistoryComponent';
import {renderToString} from 'react-dom/server';

export default function HistoryController(req, res) {
    fetch('http://localhost:8000/history')
        .then((response) => {
            return response.json();
        }).then((history) => {
            return HistoryComponent(history);
        }).then((reactElement) => {
            const html = renderToString(reactElement);
            res.send(html);
        }).catch((e) => {
            console.error(e);
        });
}
