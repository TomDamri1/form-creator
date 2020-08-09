import React, { useState, useEffect } from 'react'
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { validateInput, getInitialState, getFormFromServer } from './FormSubmitFunctions';
import { postForm } from '../../functions/ServerConnectionFunctions';
import styles from './FormSubmitStyles';


const FormSubmitPage = (props) => {
    const [formState, setFormState] = useState({});
    const [thisForm, setThisForm] = useState({});
    const [formFields, setFormFields] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const form = await getFormFromServer(props.match.params.id);
            if (form === "Error") {

            }
            else {
                setFormFields(form.fields)
                setThisForm(form);
                setFormState(getInitialState(form))
                setIsLoading(false);
            }
        })()
    }, [props.match.params.id])

    const hanldeChange = (evt) => {
        setFormState({ ...formState, [evt.target.name]: evt.target.value })
    }
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        const response = await postForm(props.match.params.id, Object.values(formState))
        alert(response);
        setIsLoading(false);
        props.history.push('/')
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
                        onChange={evt => hanldeChange(evt)}
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



