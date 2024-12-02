import React, { useContext } from 'react'; // Import useContext from React
import { Typewriter } from 'react-simple-typewriter';
import '../styles/Home.css';
import { ThemeContext } from '../components/ThemeContext'; // Import ThemeContext

const Home = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <div className="hero-section" style={{ backgroundColor: theme.background }}>
      {/* Overlay for background to make text stand out */}
      <div className="background-overlay"></div>
      {/* Content Card to Highlight Main Introduction */}
      <div className="content-card">
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

        {/* Optional Call to Action Button */}
        <button className="primary-button">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
