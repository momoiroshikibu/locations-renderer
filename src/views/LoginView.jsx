import React from 'react';

export default function LoginView(props) {

    function authenticate() {
        console.log('yeah');
    }

    return (
        <div>
            <h1>Login</h1>
            <form method="POST" action="authenticate">
                <p>username</p>
                <input type="text" name="username"/>
                <p>password</p>
                  <input type="password" name="password"/>
                <button onClick={authenticate}>Login</button>
            </form>
        </div>
    );
}
