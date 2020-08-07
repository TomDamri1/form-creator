import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import { TableCell, TextField, TableRow } from '@material-ui/core';


const createTableRows = (data) => {
    const { fields, answers } = data;
    console.log(fields)
    console.log(answers)
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
    return (
        <TableBody>
            {createTableRows(props.data)}
        </TableBody>
    )
}


export default TableBodyWithAnswers
