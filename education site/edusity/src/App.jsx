import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Ensure React Router is installed
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playState,setPlayState]=useState(false);


  return (
    <Router>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <section id="programs">
            <Title subTitle="OUR PROGRAM" title="What We Offer" />
            <Programs />
          </section>
          <section id="about">
            <About setPlayState={setPlayState}/>
          </section>
          <section id="campus">
            <Title subTitle="Gallery" title="Campus Photos" />
            <Campus />
          </section>
          <section id="testimonials">
            <Title subTitle="TESTIMONIALS" title="What Student Says" />
            <Testimonials />
          </section>
          <section id="contact">
            <Title subTitle="Contact Us" title="Get In Touch" />
            <Contact />
          </section>
          <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </Router>
  );
};

export default App;
