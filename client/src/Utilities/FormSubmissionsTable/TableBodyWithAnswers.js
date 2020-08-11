import React, { useState, useEffect } from 'react'
import TableBody from '@material-ui/core/TableBody';
import { TableCell, TextField, TableRow } from '@material-ui/core';


const createTableRows = (answers, fields) => {
    return answers.map((answer, index) => {
        return (
            <TableRow key={index}>
                {
                    answer.map((input, index) => {
                        const field = fields[index]
                        return (
                            <TableCell key={index}>
                                <TextField
                                    style={{ minWidth: 47 }}
                                    type={field.inputType}
                                    name={field.inputName}
                                    value={input}
                                    disabled={true}
                                    variant = "outlined"
                                />
                            </TableCell>
                        )
                    })
                }
            </TableRow>
        )
    })
}


const TableBodyWithAnswers = props => {
    const [tableRows, setTableRows] = useState([]);
    const [tableFields, setTableFields] = useState([]);
    useEffect(() => {
        if(props.data.answers && props.data.fields){
            setTableRows(props.data.answers);
            setTableFields(props.data.fields)
        }
    }, [props.data])
    return (
        <TableBody>
            {createTableRows(tableRows, tableFields)}
        </TableBody>
    )
}


export default TableBodyWithAnswers
