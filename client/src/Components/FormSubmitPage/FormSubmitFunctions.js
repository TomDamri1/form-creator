import { mailFormat, numberFormat, telFormat } from "../../constants/Formats";
import axios from 'axios';
import Errors from '../../constants/Errors';


const api = axios.create({
    baseURL : ''
})



const validateText = (input) => {
    if (input.length > 0){
        return true;
    }
    return false;
}

const validateColor = (input) => {
    console.log(`validate color, input : ${input}`)
    if(input !== "")
    return true;
    return false;
}

const validateDate = (input) => {
    return true;
}

const validateEmail = (input) => {
    if(input.match(mailFormat)){
        return true;
    }
    return false;
}

const validateTel = (input) => {
    if(input.match(telFormat)){
        return true;
    }
    return false;
}
const validateNumber = (input) => {
    if(input.match(numberFormat)){
        return true;
    }
    return false;
}

const inputValidationDict = {
    text :validateText,
    color :validateColor,
    date :validateDate,
    email :validateEmail,
    tel :validateTel,
    number :validateNumber,
}

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

export const postForm = async (id, data) => {
    try {
        const response = await api.post(`/form/${id}`, data);
        return response.data.data;
    } 
    catch (error) {
        console.log(error)
        return Errors.internalServerError;
    }
}

export const validateInput = (input, type) => { 
    if (input === ''){
        return true;
    }
    else {
        return inputValidationDict[type](input);
    }
};

export const getInitialState = (form) => {
    let initialState = {};
    form.fields.map(field => 
        initialState[field.inputName] = ''
    )

    return initialState;
}