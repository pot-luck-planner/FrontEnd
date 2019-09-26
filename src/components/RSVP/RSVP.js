import React from 'react';
import styled from 'styled-components';

const RsvpBase = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const RsvpForm = styled.form`
    overflow: hidden;
    background-color: #F0F2F2;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
`;

function RSVP() {

    return(
        <RsvpBase>
            <RsvpForm>
                <fieldset>
                    <legend><h1>RSVP</h1></legend>
                        <h1>Event Name</h1>

                </fieldset>
            </RsvpForm>
        </RsvpBase>
    );
}
export default RSVP