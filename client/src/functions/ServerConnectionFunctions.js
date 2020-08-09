import axios from 'axios';

const api = axios.create({
    baseURL :`http://localhost:8000/`,
})



export const publishFormToServer = async (data) => {
    try {
        const response = await api.post('/publish-form-to-server', data);
        return response.data.data;
    } catch (error) {
        return error;
    }
}

export const getAllForms = async () => {
    try {
        const response = await api.get('/get-all-forms');
        return response.data;
    } catch (error) {
        console.log(error)
        return "Error";
    }
}

export const getForm = async (id) => {
    try {
        const response = await api.get(`/get-form/${id}`);
        return response.data;
    } catch (error) {
        console.log(error)
        return "Error";
    }
}

export const postForm = async (id, data) => {
    try {
        const response = await api.post(`/post-form/${id}`, data);
        return response.data.data;
    } catch (error) {
        return "Error";
    }
}