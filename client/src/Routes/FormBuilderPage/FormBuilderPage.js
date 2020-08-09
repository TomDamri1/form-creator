import React, { useState } from 'react';
import FieldConfigurationRow from '../../Components/FieldConfigurationRow/FieldConfigurationRow';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { validateForm } from "./FormBuilderFunctions";
import styles from "./FormBuilderStyles";
import { publishFormToServer } from '../../functions/ServerConnectionFunctions';


const FormBuilderPage = (props) => {
    const [formFields, setFormFields] = useState([]);
    const [formName, setFormName] = useState('');
    const [lastID, setLastID] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true)
        const formValidationStatus = validateForm(formName, formFields)
        if (formValidationStatus.status === false) {
            setIsLoading(false);
            alert(formValidationStatus.message);
            return;
        }
        let newFields = [];
        formFields.map(field => {
            newFields.push({ ...field, id: field.id.toString() })
            return field;
        })
        const form = {
            name: formName,
            fields: newFields,
        }
        const response = await publishFormToServer(form);
        setIsLoading(false);
        alert(response);
        props.history.push('/');
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
        <>
            <h1>Form Builder Page</h1>
            {
                !isLoading &&
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
            }
            {
                isLoading &&
                <CircularProgress />
            }
        </>
    )
}



export default FormBuilderPage;