import React from 'react';
import './AboutSection.css'

class AboutSection extends React.Component{
  render(){
    return (
      <div id="about-container">
        <div id="about-content">
          <h1>About Me</h1>
          <p>
          My name is am Raymond Ewoenam Klutse and I am Ghanaian currently living in France. 
          I lived a greater portion of my life Ghana where I completed my Primary, Secondary and Undergraduate education. 
          I then moved to France to purse my Graduate studies where I read Data Science.
          </p>
          <div id='education-timeline'>

          </div>
          <p>
          I'm passionate about Machine Learning, Big Data and Deep Learning, and their application in the Finance, 
          Consulting, Marketing and Health Sectors. 
          I’ve having experience in developing machine learning models to predict consumer credit risk. 
          I have also worked on building deep learning models using transfer learning to detect emotions in a text.
          </p>
          <div id='career-timeline'>

          </div>
          <p>
          I am currently looking for a Data Science position to hone my skillss.  
          I’m also open to collaborate with other developers on freelance projects.
          </p>

          <p>
          Outside my working, I am a musician, writer and personal development coach. I enjoy gospel, jazz and classical music. 
          I also enjoy helping people maximise their potential through through learning, collaboration and networking.
          </p>
        </div>
      </div>
    );
  }
}


export default AboutSection;