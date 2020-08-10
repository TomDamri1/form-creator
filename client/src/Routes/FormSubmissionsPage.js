import React, { useState, useEffect } from 'react'
import FormSubmissionsTable from '../Components/FormSubmissionsTable/FormSubmissionsTable';
import { getForm } from '../functions/ServerConnectionFunctions';
import { CircularProgress } from '@material-ui/core';
import Errors from '../constants/Errors';

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
            const alertViaDialog = props.alertViaDialog;
            const form = await getFormSubmissionsFromServer(props.match.params.id);
            if (form === Errors.internalServerError) {
                setIsLoading(false);
                alertViaDialog(Errors.internalServerError,"Error, please refresh the page");
            }
            else {
                setThisForm(form);
                setIsLoading(false);
            }
        })()
    }, [props.match.params.id, props.alertViaDialog])
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
