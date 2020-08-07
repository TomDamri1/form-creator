import React from 'react'
import FormDataTable from '../Components/FormDataTable/FormDataTable'
import data from '../dummy-form-data';


const FormsListPage = props => {
    return (
        <div>
            <h1>Forms List Page</h1>
            <FormDataTable data={data}/>
        </div>
    )
}



export default FormsListPage
