import axios from 'axios';
import Errors from '../../constants/Errors';


const api = axios.create({
    baseURL : ''
})

const validateFormFields = (formFields) => {
    if (formFields.length === 0) {
        return "* Please add at least one field\n"
    }
    for (let index = 0; index < formFields.length; index++) {
        if (!formFields[index].inputName || !formFields[index].fieldLabel) {
            return "* Please fill ALL the form fields\n";
        }
    }
    return true;
}

const validateFormName = (formName) => {
    if (formName === '') {
        return "* Please Enter a Valid form name\n";
    }
    else {
        return true;
    }
}

const validateFieldsNames = (formFields) => {
    let validation = true;
    formFields.map(field => {
        const sameNameFields = formFields.filter(f => f.inputName === field.inputName);
        if (sameNameFields.length > 1){
            validation = '* input names cannot be the same in two or more fields';
        }
        return field;
    })
    return validation;
}

export const validateForm = (formName, formFields) => {
    const formNameValidation = validateFormName(formName)
    const formFieldsValidation = validateFormFields(formFields)
    const fieldsWithTheSameNameValidation = validateFieldsNames(formFields);
    let validationStatus = {
        status: true,
        message: ''
    }
    if (formNameValidation !== true) {
        validationStatus.status = false;
        validationStatus.message += formNameValidation;
    }
    if (formFieldsValidation !== true) {
        validationStatus.status = false;
        validationStatus.message += formFieldsValidation;
    }
    if (fieldsWithTheSameNameValidation !== true){
        validationStatus.status = false;
        validationStatus.message += fieldsWithTheSameNameValidation;
    }
    return validationStatus;
}

export const publishFormToServer = async (data) => {
    try {
        const response = await api.post('/newForm', data);
        return response.data.data;
    } 
    catch (error) {
        console.log(error)
        return Errors.internalServerError;
    }
}