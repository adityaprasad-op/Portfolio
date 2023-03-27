import React from 'react'
import Weather from '../../assets/weather.jpg'
import Keep from '../../assets/keep.jpg'
import Ai from '../../assets/ai.jpg'
import './Projects.css'
import Arrow from '../../assets/arrow.svg'


const Projects = () => {
  return (
    <div id='projects'>
    <div className='container'>
        <h1 data-aos="zoom-in"  className='subtitle-projects'>My Projects</h1>
        <div className='work-list'>
            <div data-aos="zoom-in"  className='work'>
                <img src={Ai}/>
                <div className='layer'>
                    <h2>Driver Drowsiness Detection</h2>
                    <br></br>
                    <p>The app produces a beep sound whenever it detects the drowsiness state. It sends notifications and locations to family members about the driver. It works on the principle of blinking of eyes, rate of yawning and downward head movement</p>
                    <a href='https://github.com/adityaprasad-op/Driver-Drowsiness-Detection.git' target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>
                </div>
            </div>
            <div data-aos="zoom-in" className='work'>
                <img src={Weather}/>
                <div className='layer'>
                    <h2>Weather App</h2>
                    <br></br>
                    <p>Made a weather app that lets you search any city name across the world and displays temperature, humidity, clouds and wind speed.It also uses the background image of the city we entered. It uses openWeather API to fetch the data.</p>
                    <a href='https://adityaprasad-op.github.io/Weather_app/' target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>
                </div>
            </div>
            <div data-aos="zoom-in"  className='work'>
                <img src={Keep}/>
                <div className='layer'>
                    <h2>Keeper Clone</h2>
                    <br></br>
                    <p>Made a basic Google Keep clone as a learning project. We can create notes along with the title and also delete the notes. Used React.js as the framework and Material UI for icons. Used HTML, CSS, Javascript as the Technical Stack</p>
                    <a href='https://keeper-clone121103.netlify.app/' target={'_blank'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg></a>
                </div>
            </div>
        </div>
        <a href='https://github.com/adityaprasad-op' className='btn' target={'_blank'}>See More</a>
    </div>
    </div>
  )
}

export default Projects