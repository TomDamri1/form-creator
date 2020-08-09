import React from 'react'
import { NavLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';

export default (data) => {
    return data.map((row, index) => {
        const rowId = index + 1;
        return (
            <TableRow key={rowId} style={generateRowStyle(rowId)}>
                <TableCell>{rowId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.answers.length}</TableCell>
                <TableCell>
                    <NavLink exact to={`/submit-form/${row._id}`}>View</NavLink>
                </TableCell>
                <TableCell>
                    <NavLink exact to={`/view-form-submissions/${row._id}`}>View</NavLink>
                </TableCell>
            </TableRow>
        )
    }
    )
}

const generateRowStyle = (id) => id % 2 === 0 ? { backgroundColor: "#e3f2fd" } : {};
