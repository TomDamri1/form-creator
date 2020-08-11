import axios from 'axios';
import Errors from '../../constants/Errors';


const api = axios.create({
    baseURL : ''
})

export const getForm = async (id) => {
    try {
        const response = await api.get(`/form/${id}`);
        return response.data;
    } 
    catch (error) {
        console.log(error)
        return Errors.internalServerError;
    }
}