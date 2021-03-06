import fetch from 'isomorphic-fetch';
import LoginView from '../views/LoginView';
import htmlify from '../views/htmlify';
import {renderToString} from 'react-dom/server';


export function login(req, res) {
    res.send(
        htmlify({
            title: 'Login',
            body: renderToString(LoginView(req))
        })
    );
}

export function authenticate(req, res) {
    fetch('http://localhost:5000/access-tokens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'mail-address': req.body.username,
            'password': req.body.password
        })
    }).then((response) => {
        return response.json();
    }).then((response) => {
        // { accessToken: '3690549408', userId: 160, createdAt: 3690576000 }
        req.session.accessToken = response.accessToken;
    }).then((json) => {
        res.redirect('/');
    }).catch((error) => {
        req.session.message = 'Login Failed';
        res.redirect('/login');
    });
}
