import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody';
import createTableRows from './CreateTableRows';

const TableBodyWithDataProp = props => {
    return (
        <TableBody>
            {createTableRows(props.data)}
        </TableBody>
    )
}

TableBodyWithDataProp.propTypes = {
    data: PropTypes.array,
}

export default TableBodyWithDataProp