import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const get = async (path, options = {}) => {
    const result = await request.get(path, options);
    return result.data;
};

export default request;
