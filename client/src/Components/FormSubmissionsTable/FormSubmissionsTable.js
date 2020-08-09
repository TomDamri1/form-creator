import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import StaticTableHead from '../StaticTableHead/StaticTableHead';
import TableBodyWithAnswers from './TableBodyWithAnswers';


const FormSubmissionsTable = (props) => {
    const [tableHeaderArray, setTableHeaderArray] = useState([])
    useEffect(() => {
        const fieldsData = props.data.fields;
        if (fieldsData){
            setTableHeaderArray(fieldsData.map(field => field.fieldLabel))
        }
    }, [props.data])
    return (
        <>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <StaticTableHead headerCellsArray={tableHeaderArray} />
                    <TableBodyWithAnswers data={props.data}/>
                </Table>
            </TableContainer>
        </>
    )
}


export default FormSubmissionsTable;



