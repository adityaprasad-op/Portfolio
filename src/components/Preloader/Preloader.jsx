import React from 'react'
import pre from '../../assets/pre3.gif'
import './Preloader.css'

function Preloader() {
    return (
      <div id="preloader">
        <img src={pre}/>
      </div>
    );
  }

export default Preloader