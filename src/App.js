import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/create" exact component={CreateProject} />
        <Route path="/project/:id" exact component={ProjectDetails} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
