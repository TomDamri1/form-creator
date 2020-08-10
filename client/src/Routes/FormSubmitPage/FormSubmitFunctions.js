import { mailFormat, numberFormat, telFormat } from "../../constants/Formats";
import { getForm } from "../../functions/ServerConnectionFunctions";

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

export const getFormFromServer = async (id) => {
    const thisForm = await getForm(id);
    return thisForm;
}

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