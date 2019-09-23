import React from 'react';
import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken');

    return axios.create ({
        header: {
            'Content-type': 'application/json',
            'Authorization': `${token}`,
        },
    });
};