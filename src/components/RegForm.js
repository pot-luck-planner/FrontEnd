import React from 'react';
import styled from 'styled-components';

const RegBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const Form = styled.form`
    background-color: #F0F2F2;
    align-items: center;
    text-align: left;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`;
const RegLgd = styled.legend`
    font-size: 1.5rem;
`;
const Label = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const Input = styled.input`
    display: inline;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const RegBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem 3rem;
`;
const RegBtn = styled.button`
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

function RegForm() {
    return (
        <RegBase className='RegBase'>
            <Form className='RegForm'>
            <RegBorder>
                <RegLgd>Registration</RegLgd>
                <Label htmlFor='fName'>First Name<br />
                    <Input type='text' name='fName' id='fName' 
                    placeholder='First Name'/><br />
                </Label>
                <Label htmlFor='lName'>Last Name<br />
                    <Input type='text' name='lName' id='lName' 
                    placeholder='Last Name'/><br />
                </Label>
                <Label htmlFor='user'>User<br />
                    <Input type='text' name='user' id='user' 
                    placeholder='User Name'/><br />
                </Label>
                <Label htmlFor='passwrd'>Password<br />
                    <Input type='password' name='passwrd' id='passwrd' 
                    placeholder='Account Password'/><br />
                </Label>
                <br/>
                <RegBtn>Submit</RegBtn>
            </RegBorder>
            </Form>
        </RegBase>
    );
}
export default RegForm