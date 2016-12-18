import fetch from 'isomorphic-fetch';

export default function locations(req, res) {
    fetch('http://localhost:5000/locations', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': req.session.accessToken
        }
    }).then((response) => {
        return response.json();
    }).then((locations) => {
        res.send({
            locations: locations
        });
    });

}
