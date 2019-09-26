import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Events from './Events';
import Invites from './Invites'
import {RegBase, RegBorder, RegBtn, RegLgd} from './RegForm';


const Dashboard = () => {
    const [account, setAccount] = useState({firstname:"", lastname:"", username:""});
    

    useEffect(() => {
        axiosWithAuth()
        .get('/accounts')
        .then(res => {
            setAccount(res.data.myAccount[0])
            
        })
        .catch(err => console.log(err))
    }, [])

    

    console.log("User Data", account)

    return (
        <RegBase className = "RegBase">
            <RegBorder>
                
                    <RegLgd>My Account</RegLgd>
                    <p>Name:{account.firstname} {account.lastname}</p>
                    <p>Username: {account.username} </p>
                    <Link to = "/addevent">
                <RegBtn color='red'> Add a Pot Luck</RegBtn>
                </Link>      
                <Events />
                <Invites />
                

                
                
            </RegBorder>
        </RegBase>
    )
}

export default Dashboard;