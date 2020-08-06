import { mailFormat, numberFormat } from "../../constants/Formats";
import dummyData from '../../dummy-form-data'

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

export const getFormFromServer = (id) => {
    let myForm = false;
    dummyData.map(form => (form.id === id) ? myForm = form : '')
    return myForm;
}


const validateText = (input) => {
    if (input.length > 0){
        return true;
    }
    return false;
}

const validateColor = () => {
    return true;
}

const validateDate = () => {
    return true;
}

const validateEmail = (input) => {
    if(input.match(mailFormat)){
        return true;
    }
    return false;
}

const validateTel = () => {
    return true;
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