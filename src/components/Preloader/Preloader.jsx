import React, { useRef, useEffect } from 'react'
import pre from '../../assets/pre3.gif'
import './Preloader.css'
import anime from 'animejs';

function Preloader() {
    return (
      <div id="preloader">
        <img src={pre}/>
      </div>
    );
  }

export default Preloader