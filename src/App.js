import React from 'react';

import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';

class App extends React.Component{
  state = {
    education : [
      {
        id : 1,
        school : 'IMT Atlantique',
        course : 'Msc Data Science',
        duration : '2018-2020'
      },
      {
        id : 2,
        school : 'University of Ghana',
        course : 'Bsc Information Technology',
        duration : '2013-2017'
      }
    ]
  }
  render(){
    console.log(this.state.education)
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Education education = {this.state.education}/>
        <Projects/>
        <Experience/>
        </div>
    );
  }
}


export default App;
