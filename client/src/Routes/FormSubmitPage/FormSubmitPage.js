import React, { useState, useEffect } from 'react'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { validateInput, getInitialState, getFormFromServer } from './FormSubmitFunctions';
import { postForm } from '../../functions/ServerConnectionFunctions';
import styles from './FormSubmitStyles';
import Errors from '../../constants/Errors';


const FormSubmitPage = (props) => {
    const [formState, setFormState] = useState({});
    const [thisForm, setThisForm] = useState({});
    const [formFields, setFormFields] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const form = await getFormFromServer(props.match.params.id);
            if (form === Errors.internalServerError) {
                alert(Errors.error, form);
            }
            else {
                setFormFields(form.fields);
                setThisForm(form);
                setFormState(getInitialState(form));
                setIsLoading(false);
            }
        }
        )()
    }, [props.match.params.id]);

    const handleChange = (evt) => {
        setFormState({ ...formState, [evt.target.name]: evt.target.value })
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        for (let index = 0; index < formFields.length; index++) {
            const field = formFields[index];
            if (!validateInput(formState[field.inputName], field.inputType))
            {
                props.alertViaDialog("Validation Error", `please fill the field "${field.fieldLabel}" properly`);        
                return;
            }
        }
        setIsLoading(true);
        const response = await postForm(props.match.params.id, Object.values(formState))
        props.alertViaDialog("Message from server", response);
        setIsLoading(false);
        if (response !== Errors.internalServerError) {
            props.history.push('/')
        }
    }
    const generateFields = (feilds) => {
        return feilds.map((field, index) => {
            return (
                <div key={index}>
                    <TextField
                        required
                        error={!validateInput(formState[field.inputName], field.inputType)}
                        InputLabelProps={field.inputType === 'date' ? { shrink: true } : {}}
                        label={field.fieldLabel}
                        name={field.inputName}
                        type={field.inputType}
                        style={styles.textField}
                        value={formState[field.inputName]}
                        onChange={evt => handleChange(evt)}
                        variant="outlined"
                    />
                </div>
            )
        })
    }


    return (
        <>
            <h1>Submit the form : {thisForm.name}</h1>
            <form onSubmit={handleSubmit}>
                {
                    !isLoading &&
                    <>
                        {generateFields(formFields)}
                        < Button type="submit" variant="contained" color="primary" style={styles.button}>
                            Submit Form
                        </Button>
                    </>
                }
                {
                    isLoading &&
                    <>
                        <CircularProgress />
                    </>
                }
            </form>

        </>
    )
}


export default FormSubmitPage



