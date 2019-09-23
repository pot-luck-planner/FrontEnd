import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form } from 'semantic-ui-react';


const Login = props => {
    const [login, setLogin] = useState({username:"", password:""});

    const updateLogin = e => {
        setLogin({ ...login, [e.target.name]: e.target.value});
    };

    const logUser = e => {
        e.preventDefault();
        axiosWithAuth().post('/accounts/login', login)
            .then(res => {
                localStorage.setItem('userToken', res.data.payload);
                props.history.push('/')
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