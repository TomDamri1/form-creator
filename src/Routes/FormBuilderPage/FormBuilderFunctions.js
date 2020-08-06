
export const validateFormFields = (formFields) => {
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

export const validateFormName = (formName) => {
    if (formName === '') {
        return "* Please Enter a Valid form name\n";
    }
    else {
        return true;
    }
}

export const validateForm = (formName, formFields) => {
    const formNameValidation = validateFormName(formName)
    const formFieldsValidation = validateFormFields(formFields)
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
    return validationStatus;
}