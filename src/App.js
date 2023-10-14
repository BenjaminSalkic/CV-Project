import './App.css'; 
import React, { useEffect }  from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Insta from './img/insta.svg';
import Mail from './img/mail.svg';
import Linked from './img/linked.svg';
import Face from './img/face.svg';
import Scroll from './img/scroll-gif.gif'

function App() {
  useEffect(() => {
    Aos.init({ duration:2000});
  }, [])
  return (
      <div className="wrapper"> 
        <header>
            <div className="scroll">
              <div className="long">
                <h3>SCROLL!</h3>
                <div className="div"></div>
                <h3>SCROLL!</h3>
              </div>
              <div className="circ">
                <img src={Scroll} alt='scrl' className='gif' />
              </div>
            </div>
          <img src={require('.//img/bg.jpg')} class="background" alt='back'  />
          <img src={require('.//img/sun.png')} class="detail" alt='details'/>
          <img src={require('.//img/mars.png')} class="detail1" alt='details1'/>
          <img src={require('.//img/mercury.png')} class="detail2" alt='details2'/>
          <img src={require('.//img/venus.png')} class="detail3" alt='details3'/>
          <img src={require('.//img/station.png')} class="detail4" alt='details4' />
          <img src={require('.//img/satelit.png')} class="detail5" alt='details5' />
          <img src={require('.//img/earth1.png')} class="foreground" alt='planet' />
        </header>
        <div className="cv">
          <div className="left">
            <div className="image">
              <img src={require('.//img/jaz.jpg')} alt="Me" />
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
            <div className="edu">
              
            </div>
          </div>
        </div>
        <section>
          <div className="contact-text">
            <h1>Would love to work on your projects</h1>
            <h3>Let's get started</h3>
            <div className="contact-btn">CONTACT ME!</div>
          </div>
          <div className="logos">
            <div className="logo">
              <img src={Linked} alt="" />
            </div>
            <div className="logo">
              <img src={Mail} alt="" />
            </div>
            <div className="logo">
              <img src={Insta} alt="insta" />
            </div>
            <div className="logo">
              <img src={Face} alt="" />
            </div>
          </div>
        </section>
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
export default App;
