import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import AboutSection from './components/AboutSection';
import Navbar from './components/Navbar'
import Home from './components/Pages.js/Home';
import Projects from './components/ProjectsSection';

class App extends React.Component{
  
  render(){
    return (
      <div className="App">

        <Router>
        <Navbar/>
          <Switch>
            <Route path ='/' exact component = {Home}/>
            <Route path ='/projects' exact component = {Projects}/>
            <Route path ='/about' exact component = {AboutSection}/> 
            <Route path ='/contact' exact component = {Home}/> 

          </Switch>
        </Router>
        

       
        </div>
    );
  }
}


export default App;
