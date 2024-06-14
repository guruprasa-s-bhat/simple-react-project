import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="cantainer">
        <Title subTitle="Our Program" title="What We Offer"></Title>
        <Programs></Programs>
        <About setPlayState={setPlayState}></About>
        <Title subTitle="Gallery" title="Campus Photos"></Title>
        <Campus></Campus>
        <Title subTitle="TESTIMONIALS" title="What Student Says"></Title>
        <Testimonials></Testimonials>
        <Title subTitle="Contact Us" title="Get in Touch"></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer
        playState={playState}
        setPlayState={setPlayState}
      ></VideoPlayer>
    </div>
  );
};

export default App;
