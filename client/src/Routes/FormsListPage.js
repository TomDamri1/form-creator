import React, { useState, useEffect } from 'react'
import FormDataTable from '../Components/FormDataTable/FormDataTable'
//import data from '../dummy-form-data';
import { getAllForms } from '../functions/ServerConnectionFunctions';
import { CircularProgress } from '@material-ui/core';


const FormsListPage = props => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getFormsFromSever() {
            setIsLoading(true)
            let forms = await getAllForms();
            if (forms==="Error"){
                setIsLoading(false);
                alert("something went wrong please refresh the page");
            }
            else {
                setData(forms);
                setIsLoading(false);
            }
        })();
    },[props]);

    return (
        <>
            <h1>Forms List Page</h1>
            {
                !isLoading &&
                <FormDataTable data={data} />
            }
            {
                isLoading &&
                <CircularProgress/>
            }
        </>
    )
}



export default FormsListPage
