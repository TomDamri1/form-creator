import React from 'react'
import data from '../dummy-form-data';
import FormDataTable from '../Components/FormDataTable/FormDataTable';

const FormSubmissionsPage = () => {
    
    return (
        <div>
            <h1>Form Submissions Page</h1>
            <FormDataTable data={data}/>
        </div>
    )
}

export default FormSubmissionsPage
