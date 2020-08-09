import React, { useState, useEffect } from 'react'
import FormSubmissionsTable from '../Components/FormSubmissionsTable/FormSubmissionsTable';
import { getForm } from '../functions/ServerConnectionFunctions';
import { CircularProgress } from '@material-ui/core';

const getFormSubmissionsFromServer = async (id) => {
    const form = await getForm(id);
    return form;
}


const FormSubmissionsPage = (props) => {
    const [thisForm, setThisForm] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const form = await getFormSubmissionsFromServer(props.match.params.id);
            if (form === "Error") {
                setIsLoading(false);
                console.log("Error");
                alert("Error, please refresh the page");
            }
            else {
                setThisForm(form);
                setIsLoading(false);
            }
        })()
    }, [props.match.params.id])
    return (
        <>
            <h1>Form Submissions Page</h1>
            {
                !isLoading &&
                <FormSubmissionsTable data={thisForm} />
            }
            {
                isLoading &&
                <CircularProgress/>
            }
        </>
    )
}

export default FormSubmissionsPage