import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const DashBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #D9580D;
`;
const Spacer = styled.div`
    display: flex;
    background-color: #F0F2F2;
    align-items: center;
    height: 4.5rem;
    border: 1px solid #999999;
    border-radius: 5px;
    margin-bottom: 1rem;
`;
const SpacerTop = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    height: 4.5rem;
    width: 142px;
    border: 1px solid #999999;
    background-color: #F0F2F2;
    border-radius: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
const Title = styled.h1`
    width: 142px;
    align-items: center;
`;
const DashBtn = styled.button`
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

const Dashboard = () => {

    return (
        <DashBase>
            <Spacer>
                <img src='.\Images\pot1_200x200.png' alt='Potluck Logo'/>
            </Spacer>
            <SpacerTop>
                <Title>My Page</Title>
            </SpacerTop>
            <Spacer>
                <DashBtn>Event</DashBtn>
            </Spacer>
            <Spacer>
                <DashBtn>Item</DashBtn>
            </Spacer>
            <Spacer>
                <DashBtn>Attendee</DashBtn>
            </Spacer>
        </DashBase>
    );
}

export default Dashboard;