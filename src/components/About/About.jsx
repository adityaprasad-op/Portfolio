import React, { useState, useEffect } from "react";
import "./About.css";
import Work from "../../assets/work.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("achievements");

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div data-aos="zoom-out" className="about-col1">
            <img src={Work} alt="work" />
          </div>
          <div data-aos="zoom-in" className="about-col2">
            <h1 className="subtitle-about">About Me</h1>
            <p>
              I'm an Associate Software Engineer at{" "}
              <strong>WiseTech Global</strong>, building AI-powered automation
              systems, RESTful APIs, and full-stack web solutions. I graduated
              from NIT Raipur with a B.Tech in Information Technology (CGPA:
              8.58). I'm passionate about solving real-world problems through
              technology — from AI agent workflows to multilingual mobile apps.
              A National Hackathon winner and SIH finalist, I'm always eager to
              build impactful products.
            </p>

            <div data-aos="zoom-in" className="tab-titles">
              <p
                className={`tab-links ${activeTab === "achievements" ? "active-link" : ""}`}
                onClick={() => setActiveTab("achievements")}
              >
                Achievements
              </p>
              <p
                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
            </div>

            <div
              className={`tab-content ${activeTab === "achievements" ? "active-tab" : ""}`}
              id="achievements"
            >
              <ul>
                <li>
                  <span>
                    Smart India Hackathon (SIH) 2023 — National Finalist
                  </span>
                  <br />
                  Selected among 44,000+ competing teams pan-India with the
                  RailBhasi multilingual railway app.
                </li>
                <li>
                  <span>
                    Overall Winner — Codeutsava 6.0 National Hackathon
                  </span>
                  <br />
                  Secured 1st place in NIT Raipur's flagship national hackathon.
                </li>
                <li>
                  <span>Lead Organiser — Codeutsava PAN India Hackathon</span>
                  <br />
                  Head of Turing Club of Programmers, managed 20+ volunteers and
                  500+ participants.
                </li>
              </ul>
            </div>

            <div
              className={`tab-content ${activeTab === "education" ? "active-tab" : ""}`}
              id="education"
            >
              <ul>
                <li>
                  <span>B.Tech — Information Technology, NIT Raipur</span>
                  <br />
                  Sep 2021 – Apr 2025 · CGPA: 8.58 / 10.0
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
