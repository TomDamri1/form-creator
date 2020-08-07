import React from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import StaticTableHead from '../StaticTableHead';
import TableBodyWithAnswers from './TableBodyWithAnswers';


const FormSubmissionsTable = (props) => {
    const data = props.data;
    const fields = data.fields;
    const tableHeaderArray = fields.map(feild => feild.fieldLabel)
    return (
        <div>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <StaticTableHead headerCellsArray={tableHeaderArray}/>
                    <TableBodyWithAnswers data={data}/>
                </Table>
            </TableContainer>
        </div>
    )
}


export default FormSubmissionsTable;



