import React, { useState, useEffect } from 'react'
import FormDataTable from '../../Utilities/FormDataTable/FormDataTable';
import { getAllForms } from './FormListFunctions';
import { CircularProgress } from '@material-ui/core';
import Errors from '../../constants/Errors';


const FormsListPage = props => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const alertViaDialog = props.alertViaDialog;
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            let forms = await getAllForms();
            if (forms === Errors.error) {
                setIsLoading(false);
                alertViaDialog(Errors.error, "something went wrong please refresh the page")
            }
            else {
                setData(forms);
                setIsLoading(false);

            }
        })();
    }, [props, alertViaDialog]);

    return (
        <>
            <h1>Forms List Page</h1>
            {
                !isLoading &&
                <FormDataTable data={data} />
            }
            {
                isLoading &&
                <CircularProgress />
            }
        </>
    )
}



export default FormsListPage;
