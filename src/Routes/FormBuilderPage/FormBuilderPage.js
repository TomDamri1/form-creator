import React, { useState } from 'react';
import FieldConfigurationRow from '../../Components/FieldConfigurationRow/FieldConfigurationRow';
import { Button, TextField } from '@material-ui/core';
import { validateForm } from "./FormBuilderFunctions";
import styles from "./FormBuilderStyles";
import { publishFormToServer } from '../../functions/ServerConnectionFunctions';


const FormBuilderPage = (props) => {
    const [formFields, setFormFields] = useState([])
    const [formName, setFormName] = useState('')
    const [lastID, setLastID] = useState(0)

    const AddField = () => {
        setFormFields([...formFields, { id: lastID }])
        setLastID(lastID + 1);
    }
    const onChange = (id, newValue) => {
        let updatedFields = formFields;
        for (let index = 0; index < formFields.length; index++) {
            const element = formFields[index];
            if (element.id === id) {
                updatedFields[index] = newValue;
                break;
            }
        }
        setFormFields(updatedFields);
    };
    const deleteField = (id) => {
        alert(`id to delete : ${id}`)
        setFormFields(formFields.filter(field => field.id !== id))
    };
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const formValidationStatus = validateForm(formName, formFields)
        console.log(formValidationStatus)
        if (formValidationStatus.status === false) {
            alert(formValidationStatus.message);
            return;
        }
        //return the server the next object:
        const form = {
            name: formName,
            fields: formFields,
        }
        const response = await publishFormToServer(form);
        alert(response);
    }

    const visualFields = formFields.map(field =>
        <div key={field.id}>
            <FieldConfigurationRow
                id={field.id}
                onChange={onChange}
                deleteField={deleteField}
            />
        </div>
    );
    return (
        <div>
            <h1>Form Builder Page</h1>
            <form onSubmit={(evt) => handleSubmit(evt)}>
            <TextField
                required
                id="FormName"
                label="Form Name"
                color="primary"
                value={formName}
                style={styles.header}
                onChange={evt => setFormName(evt.target.value)}
                inputProps={{ style: { fontSize: 40 } }}
            />
            {visualFields}
            <Button
                variant="contained"
                color="primary"
                onClick={() => AddField()}
                style={styles.button}

            >
                Add Field
            </Button>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.button}

            >
                Submit
            </Button>
            </form>
        </div>
    )
}



export default FormBuilderPage;