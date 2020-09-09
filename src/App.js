import React from 'react';
import './App.css';
import DronePilot from './Pages/DronePilot'; 
import Home from './Pages/Home';
import Header from './Components/Header';
import Solicitude from './Pages/Solicitude';
import Explora from './Pages/Explora';
import UserRegistry from './Pages/UserRegistry';
import Error404 from './Pages/Error404';
import Login from './Pages/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClientProfile from "./Pages/ClientProfile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explora" component={Explora} />
        <Route exact path="/client-profile" component={ClientProfile} />
        <Route exact path="/solicitud" component={Solicitude} />
        <Route exact path="/pilot-profile" component={DronePilot} />
        <Route exact path="/user-registry" component={UserRegistry} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
