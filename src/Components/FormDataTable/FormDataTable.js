import React from 'react'
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import StaticTableHead from './StaticTableHead';
import TableBodyWithDataProp from './TableBodyWithDataProp';


const FormDataTable = (props) => {
    const tableHeaderArray = ["Form Id", "Form Name", "# Submissions", "Submit Page", "Submissions Page"];
    const data = props.data;
    return (
        <div>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <StaticTableHead headerCellsArray={tableHeaderArray}/>
                    <TableBodyWithDataProp data={data} />
                </Table>
            </TableContainer>
        </div>
    )
}


export default FormDataTable


