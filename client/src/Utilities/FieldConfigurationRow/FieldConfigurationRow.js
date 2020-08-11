import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Button } from "@material-ui/core";
import styles from './FormConfigurationRowStyles';

const FieldConfigurationRow = (props) => {
    const [rowState, setRowState] = useState({
        id: props.id,
        fieldLabel: "",
        inputName: "",
        inputType: "text",
    })
    const handleChange = (evt) => {
        setRowState({ ...rowState, [evt.target.name]: evt.target.value })
    }
    useEffect(() => {
        props.onChange(rowState.id, rowState)
    }, [rowState, props])

    return (
        <div className="row" style={styles.row}>
            <TextField
                required
                id="fieldLabel"
                name="fieldLabel"
                label="Field Label"
                color="secondary"
                value={rowState.fieldLabel}
                onChange={evt => handleChange(evt)}
                style={styles.rowItem}
            />
            <TextField
                required
                id="inputName"
                name="inputName"
                label="Input Name"
                color="primary"
                value={rowState.inputName}
                onChange={evt => handleChange(evt)}
                style={styles.rowItem}
            />
            <TextField
                id="inputType"
                name="inputType"
                label="Type"
                value={rowState.inputType}
                style={styles.rowItem}
                onChange={evt => handleChange(evt)}
                select>
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="color">Color</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="tel">Tel</MenuItem>
                <MenuItem value="number">Number</MenuItem>
            </TextField>
            <Button
                variant="contained"
                color="secondary"
                style={styles.button}
                onClick={() => props.deleteField(props.id)}
            >
                Delete Field
            </Button>
        </div>
    )
}


export default FieldConfigurationRow;