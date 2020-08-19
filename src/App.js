import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Explora from './Pages/Explora';
import Error404 from './Pages/Error404'
import { Link, Router, BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explora" component={Explora} />
          <Route exact path="*" component={Error404}/>
        </Switch> 
    </BrowserRouter>  
  );
}

export default App;
