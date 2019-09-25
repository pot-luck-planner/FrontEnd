import React from 'react';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Events from './Events';
import {RegBase, RegBorder, RegBtn} from './RegForm';


const Dashboard = () => {

    return (
        <RegBase className = "RegBase">
            
                <Events />
                <Link to = "/addevent">
                <RegBtn color='red'> Add a Pot Luck</RegBtn>
                </Link>

            
            


        </RegBase>
    )
}

export default Dashboard;