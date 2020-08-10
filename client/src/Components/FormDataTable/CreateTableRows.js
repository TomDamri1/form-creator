import React from 'react'
import { NavLink } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import { generateRowStyle, styles } from './FormDataTableStyles';
import Create from "@material-ui/icons/Create";
import Pageview from '@material-ui/icons/Pageview';

export default (data) => {
    return data.map((row, index) => {
        const rowId = index + 1;
        return (
            <TableRow key={rowId} style={generateRowStyle(rowId)}>
                <TableCell>{rowId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.answers.length}</TableCell>
                <TableCell>
                    <NavLink exact to={`/submit-form/${row._id}`} style={styles.rowButton}>
                        <Button>
                            <Create color="primary" />
                        </Button>
                    </NavLink>
                </TableCell>
                <TableCell>
                    <NavLink exact to={`/view-form-submissions/${row._id}`} style={styles.rowButton}>
                        <Button>
                            <Pageview color="primary" />
                        </Button>
                    </NavLink>
                </TableCell>
            </TableRow>
        )
    }
    )
}


