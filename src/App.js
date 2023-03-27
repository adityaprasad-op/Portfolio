import React, {useState,useEffect} from 'react'
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Skills from './components/Skills/Skills'
import Preloader from './components/Preloader/Preloader';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div>
      {loading ? <Preloader /> :
      <div>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      </div>
      }
    </div>
  );
}

export default App;
