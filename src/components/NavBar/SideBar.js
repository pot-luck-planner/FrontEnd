import React from 'react';
import styled from 'styled-components';
import {HomeOutline} from 'styled-icons/typicons';
import {LogInCircle} from 'styled-icons/boxicons-regular';
import {Event} from 'styled-icons/material';
import {Fastfood} from 'styled-icons/material';
import {PersonAdd} from 'styled-icons/material';



function SideBar() {
    return(
        <div>
            <nav>
                <ul>
                    <li> 
                        <a href='/login'>
                            <HomeOutline size="25" title="home" />
                            <span className='NavText'>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            <LogInCircle size='25' title='login' />
                            <span class="nav-text">Login</span>
                        </a>
                    </li>
                    <li class="darkerli">
                        <a href="/events">
                            <Event size='25' title='event' />
                            <span class="nav-text">Event</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <Fastfood size='25' title='item' />
                            <span class="nav-text">Items</span>
                        </a>
                    </li>
                    <li class="darkerlishadow">
                        <a href="/">
                            <PersonAdd size='25' title='member'/>
                            <span class="nav-text">Attendees</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default SideBar