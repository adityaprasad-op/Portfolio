import React from 'react'
import './Projects.css'

const projects = [
  {
    emoji: "🌐",
    title: "Personal Portfolio Website",
    year: "2023",
    tech: "ReactJS · HTML5 · CSS3 · Typed.js · AOS",
    description: "Fully responsive single-page portfolio with light/dark mode toggle, dynamic text animations, scroll-triggered transitions, and optimised asset loading for excellent UX across all devices.",
    github: "https://github.com/adityaprasad-op",
    live: null
  },
  {
    emoji: "🚂",
    title: "RailBhasi — Multilingual Railway Announcements",
    year: "2023",
    tech: "React Native · Dialogflow · AI4Bharat (Bhashini) · NLP",
    description: "Smart India Hackathon National Finalist. Real-time railway announcements in 20+ Indian languages using Bhashini NLP. Dialogflow chatbot for regional-language train queries. Published on Google Play Store.",
    github: "https://github.com/adityaprasad-op",
    live: null,
    badge: "🏆 SIH Finalist"
  },
  {
    emoji: "🤖",
    title: "AI Build Pre-Validation Workflow",
    year: "2025",
    tech: "Python · LiteLLM · Gemini · Jenkins · FastAPI",
    description: "Automated CI/CD pre-validation system that compiles builds locally, uses Gemini AI to detect and fix failures before CI execution. Reduced repetitive debugging effort by ~90% and cut manual release prep by ~50–60%.",
    github: null,
    live: null,
    badge: "💼 WiseTech Global"
  },
  {
    emoji: "💬",
    title: "AI-Powered Digital Assistant Platform",
    year: "2025",
    tech: "Python · FastAPI · LangGraph · JWT · Redis · PostgreSQL",
    description: "Built 12+ RESTful APIs with LangGraph agent workflows for real-time conversational handling. Implemented JWT auth, Redis session memory, and Liquibase DB migrations for stateful, scalable interactions.",
    github: null,
    live: null,
    badge: "💼 WiseTech Global"
  }
];

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
  </svg>
);

const Projects = () => {
  return (
    <div id='projects'>
      <div className='container'>
        <h1 data-aos="fade-up" className='subtitle-projects'>My Projects</h1>
        <div className='work-list'>
          {projects.map((p, i) => (
            <div data-aos="zoom-in" className='work work-card' key={i}>
              <div className='work-emoji'>{p.emoji}</div>
              <div className='work-content'>
                <div className='work-header'>
                  <h2>{p.title}</h2>
                  {p.badge && <span className='work-badge'>{p.badge}</span>}
                </div>
                <p className='work-tech'>{p.tech}</p>
                <p className='work-desc'>{p.description}</p>
                <div className='work-links'>
                  {p.github && (
                    <a href={p.github} target='_blank' rel="noreferrer" title="GitHub">
                      <ExternalLinkIcon/> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target='_blank' rel="noreferrer" title="Live Demo">
                      <ExternalLinkIcon/> Live
                    </a>
                  )}
                  {!p.github && !p.live && (
                    <span className='work-private'>🔒 Private / Internal</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <a href='https://github.com/adityaprasad-op' className='btn' target='_blank' rel="noreferrer">See More on GitHub</a>
      </div>
    </div>
  )
}

export default Projects
