import React from 'react';
import styled from 'styled-components';
import {HomeOutline} from 'styled-icons/typicons';
import {LogInCircle} from 'styled-icons/boxicons-regular';
import {Event} from 'styled-icons/material';
import {Fastfood} from 'styled-icons/material';
import {PersonAdd} from 'styled-icons/material';

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
const Anchor = styled.a`
    position:relative;
    width:210px;
    display:table;
    border-collapse:collapse;
    border-spacing:0;
    color:#30BF45;;
    text-decoration:none;
    -webkit-transform:translateZ(0) scale(1,1);
    -webkit-transition:all .14s linear;
    transition:all .14s linear;
    font-family: 'HeeBo', sans-serif;
    text-shadow: 1px 1px 1px  #fff; 
`;
const NavText = styled.span`
    position:relative;
    display:table-cell;
    vertical-align:middle;
    width:160px;
    font-family: 'HeeBo', sans-serif;
`;
export const HomeIcon = styled(HomeOutline)`
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
export const AddEvent = styled(Event)`
    position:relative;
    display:table-cell;
    width:25px;
    text-align:center;
    vertical-align:middle;
`;
export const AddFood = styled(Fastfood)`
    position:relative;
    display:table-cell;
    width:25px;
    text-align:center;
    vertical-align:middle;
`;
export const AddPerson = styled(PersonAdd)`
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
                        <Anchor href='https://google.com'>
                            <HomeIcon title="home" />
                            <NavText className='NavText'>Home</NavText>
                        </Anchor>
                    </List>
                    <List>
                        <Anchor href="/">
                            <LogIn title='login' />
                            <NavText class="nav-text">Login</NavText>
                        </Anchor>
                    </List>
                    <List class="darkerli">
                        <Anchor href="/">
                            <AddEvent title='event' />
                            <NavText class="nav-text">Event</NavText>
                        </Anchor>
                    </List>
                    <List>
                        <Anchor href="/">
                            <AddFood title='item' />
                            <NavText class="nav-text">Items</NavText>
                        </Anchor>
                    </List>
                    <List class="darkerlishadow">
                        <Anchor href="/">
                            <AddPerson title='member'/>
                            <NavText class="nav-text">Attendees</NavText>
                        </Anchor>
                    </List>
                </UnOrder>
            </NavMain>
        </div>
    );
}
export default SideBar