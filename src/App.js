import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages.js/Home';

class App extends React.Component{
  
  render(){
    return (
      <div className="App">

        <Router>
        <Navbar/>
          <Switch>
            <Route path ='/' exact component = {Home}/> 

          </Switch>
        </Router>
        

       
        </div>
    );
  }
}


export default App;
