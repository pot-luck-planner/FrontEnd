import React, { useState } from 'react';
import { RegBase, Form, RegLgd, Label, Input, RegBorder, RegBtn} from './RegForm';
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
                props.history.push('/account')
            })
            .catch(err => console.log(err.response));
    }

    return (
        <div>
            
            <RegBase className='RegBase'>
                <Form 
                    classname="RegForm"
                    onSubmit = {logUser}>
                <RegBorder>
                    <RegLgd>Login</RegLgd>
                    <Label htmlFor='username'>Username<br />
                        <Input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={login.username}
                            onChange={updateLogin}
                        />
                    </Label>
                    <Label htmlFor="password">Password<br />
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={login.password}
                            onChange = {updateLogin}
                        />
                    </Label>
                    <RegBtn>Log In</RegBtn>
                </RegBorder>
                </Form>
            </RegBase>
        </div>
    )
}

export default Login;