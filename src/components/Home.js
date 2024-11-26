import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* First Line */}
      <h1 className="greeting">
        Hi There! <span className="wave">👋</span>
      </h1>

      {/* Second Line */}
      <h2 className="name">I'M STANLEY CHUEH</h2>

      {/* Third Line - Typewriter */}
      <h3 className="typewriter">
        <Typewriter
          words={['Software Developer', 'Robotics Enthusiast', 'Let\'s build something together']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h3>
    </div>
  );
};

export default Home;
