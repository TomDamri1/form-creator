import axios from 'axios';
import Errors from '../../constants/Errors';

const api = axios.create({
    baseURL : ''
})

export const getAllForms = async () => {
    try {
        const response = await api.get('/allForms');
        return response.data;
    } 
    catch (error) {
        console.log(error)
        return Errors.error;
    }
}