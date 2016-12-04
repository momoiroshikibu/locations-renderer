import fetch from 'isomorphic-fetch';

export default function() {

    return new Promise((resolve, reject) => {
        fetch('http://localhost:8000/history').then((response) => {
            const json = response.json();
            resolve(json);
        });
    });

}
