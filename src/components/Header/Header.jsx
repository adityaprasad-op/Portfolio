import React, {useState, useRef, useEffect} from 'react'
import Typed from 'typed.js'
import './Header.css'
import newimg from '../../assets/newimg1.png'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'

function goToHomePage() {
  window.location.href = "/#header";
}

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => { setIsDark(!isDark); };

  useEffect(() => {
    if(isDark) {
      document.body.classList.remove("dark-theme")
      document.body.classList.add("light-theme")
    } else {
      document.body.classList.remove("light-theme")
      document.body.classList.add("dark-theme")
    }
  },[isDark])

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Engineer',
        'Full-Stack Developer',
      ],
      typeSpeed: 80,
      backSpeed: 30,
      backDelay: 1200,
      loop: true
    });
    return () => { typed.destroy(); };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id='header'>
      <nav>
        <div className='logo'>
          <h1 onClick={goToHomePage}><span>A</span>ditya.</h1>
        </div>
        <ul id='sidemenu' style={{ right: menuOpen ? "0" : "-200px" }}>
          <li><a href="#header" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='image' onClick={() => setMenuOpen(false)}>
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
          </svg>
        </ul>
        <div>
          <img src={!isDark ? sun : moon} id='icon' alt='icon' onClick={toggleTheme}/>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='image' onClick={() => setMenuOpen(true)}>
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
        </svg>
      </nav>

      <div className="cont">
        <div className='header-text'>
          <p className='header-greeting'>Hello, It's me</p>
          <h1>Aditya Prasad</h1>
          <h3>I'm a <span ref={el}></span></h3>
          <p className='header-bio'>
            Associate Software Engineer at <strong>WiseTech Global</strong> — building AI-powered platforms,
            automation workflows, and scalable backend systems with Python, FastAPI, and LangGraph.
          </p>
          <div className='header-cta'>
            <a href="#contact" className='btn btn-outline'>Hire Me</a>
            <a href="#projects" className='btn btn-outline'>View Work</a>
          </div>
        </div>
        <div className='imgbox'>
          <img src={newimg} alt="Aditya Prasad"/>
        </div>
      </div>
    </div>
  )
}

export default Header
