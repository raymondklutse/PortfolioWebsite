import WelcomeSection from '../WelcomeSection';
import AboutSection from '../AboutSection';
import Contact from '../ContactSection';
import ProjectsSection from '../ProjectsSection';

import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <>
        <WelcomeSection />
        <ProjectsSection/>
        <AboutSection />
        <Contact />
      </>
    )
  }
}
  
export default Home;