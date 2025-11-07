import axios from "axios";

export const api = axios.create({
    baseURL: 'https://my.api.mockaroo.com/movies.json?key=2c92a6b0',
    headers: {
        'Content-Type': 'application/json'
    }
});