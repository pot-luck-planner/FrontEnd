import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import axios from 'axios';

const LogBase = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const LogForm = styled.form`
    overflow: hidden;
    background-color: #F0F2F2;
    align-items: center;
    text-align: left;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
`;
const LogLgd = styled.legend`
    font-size: 1.5rem;
`;
const LogLabel = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const LogInput = styled.input`
    display: inline;
    border: 1px solid #999999;
    border-radius: 3px;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const LogBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem;
`;
const LogBtn = styled.button`
    margin: 0 20% 0 20%;
    width: 10rem;
    height: 3rem;
    background-color: #30BF45;
    border: 1px solid #999999;
    border-radius: 5px;
    color: white;

    :hover{
        background-color: #C4F2D0;
        color: black;
    }
`;

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
        <LogBase>{/*base */}
            <LogForm onSubmit = {logUser}>
                <LogBorder>
                    <LogLgd><h1>Login</h1></LogLgd>
                    <LogLabel htmlFor='username' />User Name
                    <LogInput
                        placeholder="Username"
                        id='username'
                        name="username"
                        value={login.username}
                        onChange={updateLogin}
                    />
                    <LogLabel htmlFor='password' />Password
                    <LogInput
                        type="password"
                        id='password'
                        placeholder="Password"
                        name="password"
                        value={login.password}
                        onChange = {updateLogin}
                    />
                    <LogBtn>Login</LogBtn>
                </LogBorder>
            </LogForm>
        </LogBase>
    )
}

export default Login;