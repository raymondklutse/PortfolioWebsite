import React from 'react';
import EducationItem from './EducationItem'

class Education extends React.Component{
  render(){
    console.log(this.props.education)

    return this.props.education.map((edu) => (
      
      <EducationItem education = {edu}/>
    ));
  }
}


export default Education;