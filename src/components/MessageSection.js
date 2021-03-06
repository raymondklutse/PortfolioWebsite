import React from 'react'
import './WelcomeSection.css'

export default function WelcomeSection() {
    return (
        <div id="main-content" >
            <div id="image-section">
                    <img alt='Welcome image' src="images/profile_picture_two.jpeg" height={560} width={460}/>
            </div> 
            <div id="welcome-text">
                <h5>Hello!</h5>
                <h1>I'm Raymond </h1>
                <h2>Technology Enthusiast with interest in Machine Learning, 
                    Big Data and Deep Learning, and their application in Finance, 
                    Consulting, Marketing and Health Sectors. </h2>
            </div>
        </div>
    )
}
