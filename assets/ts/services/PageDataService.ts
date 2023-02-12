import axios from "axios";
import { getAxiosInstance } from "./AxiosHelper";


export async function getUserCount(): Promise<number> {
    return (await getAxiosInstance().get('/user-count')).data.count;
}

export async function incrementUserCount(): Promise<void> {
    return getAxiosInstance().put('/user-count');
}