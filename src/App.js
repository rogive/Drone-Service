import React from 'react';
import './App.css';
import DronePilot from './Pages/DronePilot'; 
import Home from './Pages/Home';
import Header from './Components/Header';
import Explora from './Pages/Explora';
import UserRegistry from './Pages/UserRegistry';
import Error404 from './Pages/Error404';
import { Link, Router, BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explora" component={Explora} />
          <Route exact path="/pilot-profile" component={DronePilot} />
          <Route exact path="/user-registry" component={UserRegistry} />
          <Route exact path="*" component={Error404}/>
        </Switch> 
    </BrowserRouter>  
  );
}



export default App;
