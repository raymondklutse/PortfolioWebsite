import React from 'react'
import './WelcomeSection.css'


function WelcomeSection() {
    return (
        <div id="main-content" >
            <div id="image-section">
                    <img alt='Welcome' src="images/profile_picture_two.jpeg" height={560} width={560}/>
            </div> 
            <div id="welcome-text">
                <h5>Hello!</h5>
                <h1>I'm Raymond </h1>
                <p>Data Scientist | Technology Enthusiast 
                </p>
            </div>
        </div>
    )
}

export default WelcomeSection;