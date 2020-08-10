import React, { useState } from 'react';
import './App.css';
import FormBuilderPage from './Routes/FormBuilderPage/FormBuilderPage';
import FormSubmissionsPage from './Routes/FormSubmissionsPage';
import FormSubmitPage from './Routes/FormSubmitPage/FormSubmitPage';
import { Route, Switch, NavLink } from 'react-router-dom';
import FormsListPage from './Routes/FormsListPage';
import { Button } from '@material-ui/core';
import AlertDialog from './Components/Dialog/AlertDialog'


const App = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    header: "",
    message: "",
  });
  const AlertViaDialog = (header, message) => {
    setDialogMessage({
      header: header,
      message: message
    })
    setDialogOpen(true);
  }
  const getFormsListPage = (props) =>
    <FormsListPage
      {...props}
      alertViaDialog={AlertViaDialog}
    />

  const getFormBuilderPage = (props) =>
    <FormBuilderPage
      {...props}
      alertViaDialog={AlertViaDialog}
    />

  const getFormSubmitPage = (props) =>
    <FormSubmitPage
      {...props}
      alertViaDialog={AlertViaDialog}
    />

  const getFormSubmissionsPage = (props) =>
    <FormSubmissionsPage
      {...props}
      alertViaDialog={AlertViaDialog}
    />

  return (
    <div className="App">
      <AlertDialog dialogState={[dialogOpen, setDialogOpen]} message={dialogMessage} />
      <nav className='App-nav'>
        <NavLink to="/">
          <Button>View All Forms</Button>
        </NavLink>
        <NavLink to="/form-builder-page">
          <Button>Build a Form</Button>
        </NavLink>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" render={getFormsListPage} />
          <Route exact path="/form-builder-page" render={getFormBuilderPage} />
          <Route exact path="/submit-form/:id" render={getFormSubmitPage} />
          <Route exact path="/view-form-submissions/:id" render={getFormSubmissionsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
