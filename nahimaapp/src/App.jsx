import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./App.css";

export default function NahimaInfo() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <h1 className="title">Nahima Machingal</h1>
        <p className="subtitle">
        Passionate Full-Stack Developer 
        </p>

        <div className="connect-section">
          <h2>Connect with Me</h2>
          <hr />
          <div className="social-links">
            
            <a
              href="https://github.com/NahimaMachingal"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <FaGithub />  GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nahima-machingal-036b6b276/"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="about-section">
          <h2>About Me</h2>
          <hr />
          <p>
            I am Nahima Machingal, a passionate Python Developer dedicated to 
            building scalable applications and solving complex digital challenges. 
            With expertise in backend development, REST APIs, and frontend technologies, 
            I enjoy creating efficient and high-impact web solutions.
          </p>
          <p>
            I hold a B.Tech in Computer Science from MES College of Engineering, Kuttippuram. 
            My journey in tech continued with intensive self-learning through Brototype, where I honed 
            my skills in Python Django full-stack web development, receiving professional feedback that 
            shaped my approach to coding best practices.
          </p>
          <p>
            My technical stack includes Python, Django, Django REST Framework, React, Redux, PostgreSQL, 
            and AWS. I have worked on diverse projects, including an advanced SkillHunt Job Portal 
            that integrates Django Channels, WebSocket, and a chatbot powered by Gemini API. Additionally, I built 
            a fully functional e-commerce platform, implementing secure transaction processing and real-time 
            payment integration.
          </p>
          <p>
            Beyond my technical expertise, I possess strong problem-solving skills, adaptability, and a drive for 
            continuous learning. During my eight-year career gap, I focused on refining my skills through online courses 
            and hands-on projects, ensuring I stay up to date with industry trends.
          </p>
          <p>
            I am excited about opportunities where I can apply my technical knowledge to develop innovative solutions, 
            collaborate with like-minded professionals, and contribute to impactful projects.
          </p>
        </div>

        <footer className="footer">
          © 2025 Nahima Machingal. All rights reserved.
        </footer>
      </div>
    </div>
  );
}