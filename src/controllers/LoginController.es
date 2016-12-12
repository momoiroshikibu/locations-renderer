import fetch from 'isomorphic-fetch';
import LoginView from '../views/LoginView';
import htmlify from '../views/htmlify';
import {renderToString} from 'react-dom/server';


function index(req, res) {

    if (req.session.accessToken == null) {
        return res.send(
            htmlify({
                title: 'Login',
                body: renderToString(LoginView())
            })
        );
    } else {
        res.send({
            session: req.session
        });

    }
}

function authenticate(req, res) {
    console.log(req.body);

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
        req.session.accessToken = response.accessToken;
    }).then((json) => {
        res.send({
            response: json
        });
        // res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });

}

function getSession(req, res) {
    res.send({
        session: req.session
    });
}

export {
    index,
    authenticate,
    getSession
}
