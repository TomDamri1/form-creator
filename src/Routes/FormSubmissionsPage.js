import React from 'react'
import data from '../dummy-form-data';
import FormSubmissionsTable from '../Components/FormSubmissionsTable/FormSubmissionsTable';

const getFormSubmissionsFromServer = (id) => {
    let myForm = false;
    data.map(form => (form.id === id) ? myForm = form : '')
    return myForm;
}


const FormSubmissionsPage = (props) => {
    const thisForm = getFormSubmissionsFromServer(props.match.params.id);
    console.log(thisForm)
    return (
        <div>
            <h1>Form Submissions Page</h1>
            <FormSubmissionsTable data={thisForm}/>
        </div>
    )
}

export default FormSubmissionsPage
