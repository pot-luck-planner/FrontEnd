import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form } from 'semantic-ui-react';
import axios from 'axios';


const Login = props => {
    const [login, setLogin] = useState({username:"", password:""});

    const updateLogin = e => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    };

    const logUser = e => {
        e.preventDefault();
        axios.post('https://potluck-planner-v2.herokuapp.com/accounts/login', login)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                props.history.push('/events')
            })
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            <h1>Login</h1>
            <Form onSubmit = {logUser}>
                <Form.Group>
                    <Form.Input
                        placeholder="Username"
                        name="username"
                        value={login.username}
                        onChange={updateLogin}
                    />
                    <Form.Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={login.password}
                        onChange = {updateLogin}
                    />
                    <Form.Button content = "Log in" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login;