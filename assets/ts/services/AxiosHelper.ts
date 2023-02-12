import axios from "axios";


export function getAxiosInstance() {
    return axios.create({
        baseURL: window.location.origin + '/api'
    });
}