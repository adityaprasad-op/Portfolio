import React, { useState } from 'react'
import './Contacts.css'
import Cv from '../../assets/cv.pdf'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


const Contacts = () => {
  const [formData, setFormData] = useState({ Name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setStatus('success');
        setFormData({ Name: '', email: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div id='contact'>
      <div className='container'>
        <div className='row'>
          <div data-aos="zoom-in" className='contact-left'>
            <h1 className='subtitle-contacts'>Contact Me</h1>
            <p onClick={() => window.location.href = 'mailto:aditya.prasad2002@gmail.com'} style={{cursor:'pointer'}}>
              ✉ aditya.prasad2002@gmail.com
            </p>
            <p>📱 +91-9318386024</p>
            <div className='social-icons'>
              <a href= 'https://github.com/adityaprasad-op' target='_blank' rel="noreferrer"><FaGithub/></a>
              <a href='https://www.linkedin.com/in/aditya-prasad-x007/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
            </div>
            <a href={Cv} download className='btn btn2'>Download CV</a>
          </div>

          <div data-aos="zoom-in" className='contact-right'>
            {status === 'success' ? (
              <div className='form-success'>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out, I'll get back to you soon.</p>
                <button className='btn btn2' onClick={() => setStatus('idle')}>Send another</button>
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text" name="Name" placeholder="Your Name"
                  value={formData.Name} onChange={handleChange} required
                />
                <input
                  type="email" name="email" placeholder="Your Email"
                  value={formData.email} onChange={handleChange} required
                />
                <textarea
                  name="message" rows="6" placeholder="Your Message"
                  value={formData.message} onChange={handleChange} required
                />
                {status === 'error' && (
                  <p style={{color:'red', fontSize:'0.85rem', marginBottom:'8px'}}>
                    Something went wrong. Please try emailing directly.
                  </p>
                )}
                <button type="submit" className='btn btn2' disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <div className='copyright'>
        Copyright © {new Date().getFullYear()} Aditya Prasad · Built with React
      </div>
    </div>
  )
}

export default Contacts