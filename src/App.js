import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilderPage from './Routes/FormBuilderPage/FormBuilderPage';
import FormSubmissionsPage from './Routes/FormSubmissionsPage';
import FormSubmitPage from './Routes/FormSubmitPage';
import { Route, Switch, NavLink } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <nav className='App-nav'>
        <NavLink exact activeClassName="active-link" to="/form-builder-page">Build a Form</NavLink>
        <NavLink exact activeClassName="active-link" to="/form-submissions-page">View All Forms</NavLink>
        <NavLink exact activeClassName="active-link" to="/form-submit-page">Submit a Form</NavLink>
      </nav>
      <div>
      <Switch>
        <Route exact path="/form-builder-page" component={FormBuilderPage} />
        <Route exact path="/form-submissions-page" component={FormSubmissionsPage} />
        <Route exact path="/form-submit-page" component={FormSubmitPage} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
