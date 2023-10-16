import './index.css'; 
import React, { useEffect }  from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import Scroll from '../../assets/img/scroll-gif.gif'
import Contact from '../../components/contact';

function Parallax() {
  useEffect(() => {
    Aos.init({ duration:2000});
  }, [])
  return (
      <div className="wrapper"> 
        <header>
            <div data-aos="fade-up" className="scroll">
              <div className="long">
                <h3>SCROLL!</h3>
                <div className="div"></div>
                <h3>SCROLL!</h3>
              </div>
              <div className="circ">
                <img src={Scroll} alt='scrl' className='gif' />
              </div>
            </div>
          <img src={require('../../assets/img/bg.jpg')} class="background" alt='back'  />
          <img src={require('../../assets/img/sun.png')} class="detail" alt='details'/>
          <img src={require('../../assets/img/mars.png')} class="detail1" alt='details1'/>
          <img src={require('../../assets/img/mercury.png')} class="detail2" alt='details2'/>
          <img src={require('../../assets/img/venus.png')} class="detail3" alt='details3'/>
          <img src={require('../../assets/img/station.png')} class="detail4" alt='details4' />
          <img src={require('../../assets/img/satelit.png')} class="detail5" alt='details5' />
          <img src={require('../../assets/img/earth1.png')} class="foreground" alt='planet' />
        </header>
        <div className="cv">
          <div className="left">
            <div className="image">
              <img src={require('../../assets/img/jaz.jpg')} alt="Me" />
            </div>
            <div className="name">
              <h1>BENJAMIN SALKIĆ</h1>              
              <h3>JUNIOR DEVELOPER</h3>            
            </div>
            <div className="bio-wrap">
              <div className="bio">
                <h4>I am passionate about everything that I do, and programming is one of those things. I am a hardworking, communicative, and intelligent individual who enjoys learning new skills and seeking knowledge. My main focus is developing my programming mastery. I am very proficient in Java Script, CSS, React.js. Did i mention i speak English</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>SKILLS</h2>
            <div className="skills">
              <div className="btn-skills">
                C++
              </div>
              <div className="btn-skills">
                JavaScript
              </div>
              <div className="btn-skills">
                CSS/HTML
              </div>
              <div className="btn-skills">
                PHP
              </div>
              <div className="btn-skills">
                React
              </div>
              <div className="btn-skills">
                Node./Express.js
              </div>
              <div className="btn-skills">
                SQL/MongoDB
              </div>
              <div className="btn-skills">
                Django/Python
              </div>
              <div className="btn-skills">
                .NET/C#
              </div>
              <div className="btn-skills">
                TypeScript
              </div>
            </div>
            <h2>TOOLS</h2>
            <div className="skills">
              <div className="btn-skills">
                Figma
              </div>
              <div className="btn-skills">
                Git
              </div>
              <div className="btn-skills">
                Photoshop
              </div>
              <div className="btn-skills">
                Patience
              </div>
              <div className="btn-skills">
                Google
              </div>
            </div>
            <h2>EDUCATION</h2>
            <div className="edu">
              <ul> 
                <li>
                  <h3>JU Srednjoskolski centar „Nedžad Ibrišimović"</h3>
                  <h5>2018 - 2022</h5>
                  <h3>IT Gymnasium</h3>
                </li>
                <li>
                  <h3>Univerza v Ljubljani</h3>
                  <h5>2022 - </h5 >
                  <h3>Faculty of Computer and Information Science</h3>
                  <h3>BVS Computer and Information Science</h3>
                </li>              
              </ul>
            </div>
          </div>
        </div>
      //Contact
      <Contact />
      </div>
  );
}
/*
window.scroll(function() {
  if (this.scrollTop()< 1) {
      document.getElementByClassName("long").fadeOut();
   }
  else {
    document.getElementByClassName("scroll").fadeIn();
   }
});*/
export default Parallax;
