import axios from 'axios';

const BASE_URL = "/rest/api/v1";

export const performLogin = (data) => {
    const options = {
        method: "POST",
        url: BASE_URL + "/authentication",
        data: data
    }
    return axios(options);
}


export const registerUser = (data) => {
    const options = {
        method: "POST",
        url: BASE_URL + "/users",
        data: data       
    }
    return axios(options);
}


export const checkUserNameAvailability = name => {
    const options = {
        method: "GET",
        url: BASE_URL + "/users/check-avaibilty/"+name,
    }
    return axios(options);
}