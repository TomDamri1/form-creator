import axios from 'axios';

const api = axios.create({
    baseURL :`http://localhost:8000/`
})


export const getHome = async () => {
    const response = await api.get('/');
    console.log(response);
}

export const publishFormToServer = async (data) => {
    const response = await api.post('/publishFormToServer', data);
    console.log(response);
    return response.data.data;
}