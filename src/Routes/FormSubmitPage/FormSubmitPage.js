import React, { useState } from 'react'
import { Button, TextField, createStyles } from '@material-ui/core';
import { validateInput, getInitialState, getFormFromServer } from './FormSubmitFunctions';


const FormSubmitPage = (props) => {
    const thisForm = getFormFromServer(props.match.params.id);
    const [formState, setFormState] = useState(getInitialState(thisForm));
    const hanldeChange = (evt) => {
        console.log(evt.target);
        setFormState({ ...formState, [evt.target.name]: evt.target.value })
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formState);
    }
    const generateFields = () => {
        return thisForm.fields.map((field, index) => {
            return (
                <div key={index}>
                    <TextField
                        required
                        error = {!validateInput(formState[field.inputName], field.inputType)}
                        InputLabelProps={field.inputType === 'date' ? { shrink: true } : '' }
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
    console.log(formState);
    console.log(thisForm);


    return (
        <div>
            <h1>Submit the form : {thisForm.name}</h1>
            <form onSubmit={handleSubmit}>
                {generateFields()}
                <Button type="submit" variant="contained" color="primary" style={styles.button}>
                    Submit Form
                </Button>
            </form>

        </div>
    )
}


export default FormSubmitPage

const styles = createStyles({
    button: {
        marginTop: 50,
        marginLeft: "60%",
    },
    input: {
        width: 300,
    },
    textField: {
        marginBottom: 20,
        minWidth: 400,
    },
})

