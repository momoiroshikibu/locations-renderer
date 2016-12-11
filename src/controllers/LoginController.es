import LoginView from '../views/LoginView';
import htmlify from '../views/htmlify';
import {renderToString} from 'react-dom/server';


export default function LoginController(req, res) {
    res.send(
        htmlify({
            title: "Login",
            body: renderToString(LoginView())
        })
    );
}
