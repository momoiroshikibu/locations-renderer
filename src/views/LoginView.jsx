import React from 'react';

export default function LoginView(props) {

    return (
        <div>
            <h1>Login</h1>
            <form method="POST" action="authenticate">
                <p>{props.session.message}</p>
                <p>username</p>
                <input type="text" name="username"/>
                <p>password</p>
                  <input type="password" name="password"/>
                <button>Login</button>
            </form>
        </div>
    );
}
