import React from 'react';
import './App.css';
import FormBuilderPage from './Routes/FormBuilderPage/FormBuilderPage';
import FormSubmissionsPage from './Routes/FormSubmissionsPage';
import FormSubmitPage from './Routes/FormSubmitPage/FormSubmitPage';
import { Route, Switch, NavLink } from 'react-router-dom';
import FormsListPage from './Routes/FormsListPage';
import { Button } from '@material-ui/core';

const App = () => {
  return (
    <div className="App">
      <nav className='App-nav'>
        <Button>
          <NavLink exact className="link" activeClassName="active-link" to="/">View All Forms</NavLink>
        </Button>
        <Button>
          <NavLink exact className="link" activeClassName="active-link" to="/form-builder-page">
            Build a Form
          </NavLink>
        </Button>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={FormsListPage} />
          <Route exact path="/form-builder-page" component={FormBuilderPage} />
          <Route exact path="/submit-form/:id" component={FormSubmitPage} />
          <Route exact path="/view-form-submissions/:id" component={FormSubmissionsPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
