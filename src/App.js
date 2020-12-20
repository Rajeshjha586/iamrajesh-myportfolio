import React from "react"; 
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import BgImage from "./assets/img/parallex/background.webp"; 
import Slide from "react-reveal/Slide";

// components
import MyNavbar from "./components/my-navbar/mynavbar.component";

//carousal
import MyCarousal from "./components/my-carousal/mycarousal.component";

//Title Message
import MyTitleMessage from "./components/title-message/title-message.component";

//About
import About from "./pages/about/about.component";


//Skills
import Skills from "./pages/skills/skills.component";

// Project-Timeline
import TimeLine from "./components/projects-timeline/projects-timeline.component";

//contact-form
import ContactForm from "./pages/contact-form/contact-form.component";

//Education
import Education from "./pages/education/education.component";

//FooterPanel
import FooterPanel from "./components/footer/footer.component";


import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";



import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal /> 
      <MyTitleMessage />
      
       <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
      

      {/** About Me Section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={ BgImage }
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/**Skill Section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>


      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Education />
          </Fade>
        </Container>
      </div>

      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>


      <hr />
      <FooterPanel />
    </div>
  ); 
}

export default App;
