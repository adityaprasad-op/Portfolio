import React, { useEffect } from 'react'
import Aos from 'aos'
import './Experience.css'

const Experience = () => {
  useEffect(() => { Aos.init({duration: 1000}) }, [])

  return (
    <div id='experience'>
      <div className='container'>
        <h1 data-aos="fade-up" className='subtitle-experience'>Work Experience</h1>
        <div data-aos="zoom-in" className='exp-timeline'>
          <div className='exp-item'>
            <div className='exp-dot'></div>
            <div className='exp-content'>
              <div className='exp-header'>
                <h2>Associate Software Engineer</h2>
                <span className='exp-company'>WiseTech Global</span>
                <span className='exp-date'>Aug 2025 – Present</span>
              </div>
              <ul>
                <li>Engineered an <strong>AI-assisted build pre-validation workflow</strong> using Python, LiteLLM (Gemini), and Jenkins — reducing repetitive debugging by ~90% and improving first-pass build success rates.</li>
                <li>Automated end-to-end <strong>CI/CD lifecycle tasks</strong> including dependency updates, branch creation, Jenkins builds, and PR generation — cutting manual release prep by ~50–60%.</li>
                <li>Built <strong>12+ RESTful APIs</strong> with Python + FastAPI, integrating LangGraph agent workflows for real-time conversational handling across concurrent sessions.</li>
                <li>Implemented <strong>JWT authentication & Redis-based session memory</strong> for stateful API interactions.</li>
                <li>Managed <strong>database schema evolution</strong> with Liquibase — 15+ migration scripts + PostgreSQL triggers for referential integrity.</li>
                <li>Implemented <strong>configuration versioning</strong> (v1, v2, v3…) using Spring Boot for immutable AI prompt history and safe rollback.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
