import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

export const RegBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
export const Form = styled.form`
    background-color: #F0F2F2;
    align-items: center;
    text-align: left;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`;
export const RegLgd = styled.legend`
    font-size: 1.5rem;
`;
export const Label = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
export const Input = styled.input`
    display: inline;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
export const RegBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem 3rem;
`;
export const RegBtn = styled.button`
    width: 10rem;
    height: 3rem;
    background-color: #30BF45;
    border: 1px solid #333333;
    border-radius: 5px;
    color: white;

    :hover{
        background-color: #C4F2D0;
        color: black;
    }
`;

function RegForm(props) {
    const [regUser, setRegUser] = useState({firstname:"", lastname:"", username:"", password:""});

    const updateRegister = e =>{
        setRegUser({ ...regUser, [e.target.name]: e.target.value});
    }

    const addUser = e => {
        e.preventDefault();
        axios.post('https://potluck-planner-v2.herokuapp.com/accounts/register', regUser)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.token);
                props.history.push('/accounts/events')
            })
            .catch(err => console.log(err.response));
    }
    


    return (
        <div>
        <RegBase className='RegBase'>
            <Form 
                className='RegForm'
                onSubmit={addUser}>
            <RegBorder>
                <RegLgd>Registration</RegLgd>
                <Label htmlFor='firstname'>First Name<br />
                    <Input type='text' name='firstname' id='firstname' value={regUser.firstname} onChange={updateRegister}
                    placeholder='First Name'/><br />
                </Label>
                <Label htmlFor='lastname'>Last Name<br />
                    <Input type='text' name='lastname' id='lastname' 
                    placeholder='Last Name' value={regUser.lastname} onChange={updateRegister}/><br />
                </Label>
                <Label htmlFor='username'>User<br />
                    <Input type='text' name='username' id='username' 
                    placeholder='User Name' value={regUser.username} onChange={updateRegister}/><br />
                </Label>
                <Label htmlFor='password'>Password<br />
                    <Input type='password' name='password' id='password' 
                    placeholder='Account Password' value={regUser.password} onChange={updateRegister}/><br />
                </Label>
                <br/>
                <RegBtn>Submit</RegBtn>
            </RegBorder>
            </Form>
        </RegBase>
        </div>

    );
}
export default RegForm