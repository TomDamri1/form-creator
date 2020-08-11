import React, { useState } from 'react';
import './App.css';
import FormBuilderPage from './Components/FormBuilderPage/FormBuilderPage';
import FormSubmissionsPage from './Components/FormSubmissionsPage/FormSubmissionsPage';
import FormSubmitPage from './Components/FormSubmitPage/FormSubmitPage';
import { Route, Switch, NavLink } from 'react-router-dom';
import FormsListPage from './Components/FormListPage/FormsListPage';
import { Button } from '@material-ui/core';
import AlertDialog from './Utilities/Dialog/AlertDialog'


const App = () => {

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({
    header: "",
    message: "",
  });
  const alertViaDialog = (header, message) => {
    setDialogMessage({
      header: header,
      message: message
    })
    setDialogOpen(true);
  }
  const WithDialog = OriginalComponent =>{
    const NewComponent = (props) =>
      <OriginalComponent
        {...props}
        alertViaDialog={alertViaDialog}
      />
    return NewComponent;
  }
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
          <Route exact path="/" render={WithDialog(FormsListPage)} />
          <Route exact path="/form-builder-page" render={WithDialog(FormBuilderPage)} />
          <Route exact path="/submit-form/:id" render={WithDialog(FormSubmitPage)} />
          <Route exact path="/view-form-submissions/:id" render={WithDialog(FormSubmissionsPage)} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
