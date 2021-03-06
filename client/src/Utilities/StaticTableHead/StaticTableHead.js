import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import styles from './StaticTableHeadStyles';

const StaticTableHead = props => {
    const headerCellsArray = props.headerCellsArray
    const createHeaders = () => {
        return headerCellsArray.map(cell =>
            <TableCell
                style={styles.cell}
                key = {cell}
            >
                {cell}
            </TableCell>
        )
    }

    return (
        <TableHead style={styles.header}>
            <TableRow>
                {createHeaders()}
            </TableRow>
        </TableHead>
    )
}


export default StaticTableHead
