import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {PermDeviceInformation} from 'styled-icons/material';
import {LogInCircle} from 'styled-icons/boxicons-regular';
import {Dashboard} from 'styled-icons/material';


const Spacer = styled.div`
    height: 4.5rem;
`;
const NavMain = styled.nav`
    background:#F7F7F7;
    position:absolute;
    top:0;
    bottom:0;
    height:100%;
    left:0;
    width:55px;
    overflow:hidden;
    -webkit-transition:width .2s linear;
    transition:width .2s linear;
    -webkit-transform:translateZ(0) scale(1,1);
    box-shadow: 1px 0 15px rgba(0, 0, 0, 0.07);
    opacity:.2;
        :hover {
            width:250px;
            overflow:hidden;
            opacity:1;
        }
`;
const UnOrder = styled.ul`
    margin:7px 0;
    padding-left: 15px;
`;
const List = styled.li`
    border-bottom: 1.5px solid #C4F2D0;
    position:relative;
    padding-bottom: 10px;
    padding-top: 10px;
    display:block;
    width:200px;
`;

const NavText = styled.span`
    position:relative;
    display:table-cell;
    vertical-align:middle;
    width:160px;
    font-family: 'HeeBo', sans-serif;
`;
export const Register = styled(PermDeviceInformation)`
    position:relative;
    display:table-cell;
    width:25px;
    text-align:center;
    vertical-align:middle;
`;
export const LogIn = styled(LogInCircle)`
    position:relative;
    display:table-cell;
    width:25px;
    text-align:center;
    vertical-align:middle;
`;
export const DDashboard = styled(Dashboard)`
    position:relative;
    display:table-cell;
    width:25px;
    text-align:center;
    vertical-align:middle;
`;



//Anchor is an a tag. Needs to be Link

function SideBar() {
    return(
        <div>

            <NavMain>
            <Spacer />
                <UnOrder>
                    <List> 
                        <NavLink to='/RegForm' >
                            <Register title="register" />
                            <NavText className='NavText'>Register</NavText>
                        </NavLink>
                    </List>
                    <List>
                        <NavLink to='/Login'>
                            <LogIn title='login' />
                            <NavText class="nav-text">Login</NavText>
                        </NavLink>
                    </List>
                    <List class="darkerli">
                        <NavLink to="/Dashboard">
                            <DDashboard title='dashboard' />
                            <NavText class="nav-text">Dashboard</NavText>
                        </NavLink>
                    </List>
                </UnOrder>
            </NavMain>

        </div>
    );
}
export default SideBar