import React from 'react';
import WelcomeSection from '../WelcomeSection';
import Cards from '../Cards';


function Home() {
    return (
      <>
        <WelcomeSection />
        <Cards />
        <WelcomeSection />
        <Cards />
      </>
    );
  }
  
  export default Home;