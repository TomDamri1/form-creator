import React from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { NavLink } from 'react-router-dom';



const createTableRows = (data) => {
    return data.map(row =>
        <TableRow key={row.id} style={generateRowStyle(row.id)} >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.numberOfSumbissions}</TableCell>
            <TableCell>
                <NavLink exact to={`/submit-form/${row.id}`}>View</NavLink>
            </TableCell>
            <TableCell>{row.numberOfSumbissions}</TableCell>
        </TableRow>
    )
}

const TableBodyWithDataProp = props => {
    return (
        <TableBody>
            {
                createTableRows(props.data)
            }
        </TableBody>
    )
}

TableBodyWithDataProp.propTypes = {
    data: PropTypes.array,
}

export default TableBodyWithDataProp

const generateRowStyle = (id) => id % 2 === 0 ? { backgroundColor: "#e3f2fd" } : {};