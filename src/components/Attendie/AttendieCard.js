import React from 'react';
import styled from 'styled-components';

// Add members who would attend the event
//This is the card / form to fill out

const MemBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const MemForm = styled.form`
    display: flex;
    width: 40%;
    background-color: #F0F2F2;
    justify-content: center;
    align-content: center;
    text-align: left;
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 5px;
`;
const MemLgd = styled.legend`
    font-size: 1.5rem;
`;
const MemLabel = styled.label`
    display: inline;
    font-size: 1rem;
    padding: 0 .5rem;
`;
const MemInput = styled.input`
    display: inline;
    border: 1px solid #999999;
    border-radius: 3px;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const MemTxtArea = styled.textarea`
    display: inline;
    border: 1px solid #999999;
    border-radius: 7px;
    margin-bottom: 1rem;
    font-size: 1rem;
`;
const MemBorder = styled.fieldset`
    border-radius: 5px;
    padding: 1rem 3rem;
`;
const MemBtn = styled.button`
    display: flex;
    justify-content: center;
    margin: 0 20% 0 20%;
    order: 1;
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

function AttendieCard() {

    return(
        <MemBase>
            <MemForm>
                <MemBorder>
                    <MemLgd>Add Attendies</MemLgd>
                        <MemLabel htmlFor="firstname">First Name<br />
                            <MemInput type='text' id='firstname' name='firstname'
                            placeholder='Enter First Name' size='30' /><br />
                        </MemLabel>
                        <MemLabel htmlFor='lastname'>Last Name<br />
                            <MemInput type='text' id='lastname' name='lastname' size='30'
                            placeholder='Enter Last Name' /><br />
                        </MemLabel>
                        <MemLabel htmlFor='email'>E-Mail<br />
                            <MemInput type='email' id='email' name='email'
                            placeholder='Enter E-Mail' size="30" /><br />
                        </MemLabel>
                        <MemLabel htmlFor='phone'>Mobile Phone<br />
                            <MemInput type='tel' id='phone' name='phone'
                            placeholder='Enter Phone' size="30" /><br />
                        </MemLabel>
                        <MemLabel htmlFor='notes'>Notes<br />
                            <MemTxtArea id='notes' rows='15' cols='32' 
                            placeholder='Notes' /><br />
                        </MemLabel>
                        <MemBtn>Add Item</MemBtn>
                </MemBorder>
            </MemForm>
        </MemBase>
    );
}
export default AttendieCard