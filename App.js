import Home from "./Home.js";
import './App.css';
import React from "react";
import Contact from "./Contact.js";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">

    <Router>
    
    
    <Switch>
     <Route exact path='/' component={Home}/>
    <Route path='/Contact' component={Contact}/>
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;
