
import React, {useState,useEffect} from 'react'
import './About.css'
import Work from '../../assets/work.svg'
import Aos from 'aos'
import "aos/dist/aos.css";

const About = () => {
  useEffect(()=>{
    Aos.init({duration:850})
  },[])
  const[activeTab,setActiveTab]=useState("achievements");

  function opentab(tabname){
    setActiveTab(tabname);
  }
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div data-aos="zoom-in" className='about-col1'>
            <img src={Work}/>
          </div>
          <div data-aos="zoom-in" className='about-col2'>
            <h1 className='subtitle-about'>About Me</h1>
            <p>I am puresuing my Btech in Information Technlogoy from National Institute of Technology. I am a Front-end developer and I have just finished learning react and currenlty exloring new technologies. I am eager to grap new opportunities and learn from them. My goal as of now is to get placed in one of my Dream companies.</p>
            <div data-aos="zoom-in"  className='tab-titles'>
              <p className={`tab-links ${activeTab === "achievements" ? "active-link" : ""}`}
          onClick={() => opentab("achievements")}>Achievements</p>
              <p className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
          onClick={() => opentab("experience")}>Experience</p>
              <p className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
          onClick={() => opentab("education")}>Education</p>
            </div>
            <div className={`tab-content ${activeTab === "achievements" ? "active-tab" : ""}`} id='skills'>
              <ul>
                <li><span>Winner of Codeutsava</span><br></br>Secured 1st position in hackathon</li>
                <li><span>Winner of 30 days of code</span><br></br>Won the 30 days contest organised by TCP</li>
                <li><span>Solved 200+ Problems</span><br></br>Solved 200+ problems across all platforms</li>
              </ul>
            </div>
            <div className={`tab-content ${activeTab === "education" ? "active-tab" : ""}`} id='experience'>
              <ul>
                <li><span>2022-present</span><br></br>Bachelor of Technology from NIT Raipur</li>
                <li><span>2006-2021</span><br></br>Intermediate from Aravali International School</li>
              </ul>
            </div>
            <div className={`tab-content ${activeTab === "experience" ? "active-tab" : ""}`} id='education'>
              <ul>
                <li><span>Codeutsava 6.0</span><br></br>Team Lead in the hackathon</li>
                <li><span>Eclectika</span><br></br>Contributed in the Eclectika'23 Website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;