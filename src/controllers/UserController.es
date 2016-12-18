import fetch from 'isomorphic-fetch';

export default function user(req, res) {

    fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': req.session.accessToken
        }
    }).then((response) => {
        return response.json();
    }).then((users) => {
        res.send({
            users: users
        });
    });
}
