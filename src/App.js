import React from 'react';
import './App.css';
import DronePilot from './Pages/DronePilot'; 
import Home from './Pages/Home';
<<<<<<< HEAD
import Header from './Components/Header';
import Explora from './Pages/Explora';
import DronePilot from './Pages/DronePilot';
import ClientProfile from './Pages/ClientProfile';
import Error404 from './Pages/Error404'
import { Link, Router, BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explora" component={Explora} />
          <Route exact path="/pilot-profile" component={DronePilot} />
          <Route exact path="/client-profile" component={ClientProfile} />
          <Route exact path="*" component={Error404}/>
        </Switch> 
    </BrowserRouter>  
  );
=======
import ClientProfile from './Pages/ClientProfile'

function App() {
  return (
    <div>
      {/* <Home/> */}
      <ClientProfile/>
    </div>
  )
>>>>>>> 32be49cd163bce367e0b3892be4a3341b00e4aa6
}

export default App;
