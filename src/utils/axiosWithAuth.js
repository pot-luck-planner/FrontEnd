import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log(token)

    return axios.create ({
        baseURL: 'https://potluck-planner-v2.herokuapp.com',
        headers: {
            'Content-type': 'application/json',
           "Authorization": token,
            
        },
    });
};