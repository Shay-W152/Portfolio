import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transitions from './Transition'

const Main = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const emailLinkStyle = {
    color: 'white',
    textDecoration: 'underline',
    textDecorationColor: 'white',
  };

  const mainStyle = {
    textAlign: 'center',
    color: 'aqua',
    fontFamily: 'Major Mono Display',
    marginTop: '100px',
  };

  const headingStyle = {
    fontFamily: 'Major Mono Display',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const projectLinkStyle = {
    display: 'inline-block',
    padding: '90px',
    margin: '10px',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    color: 'black',
    borderColor: 'aqua',
  };

  const projectLinkStyle2 = {
    ...projectLinkStyle,
    backgroundImage: 'url(https://i.imgur.com/zMWWb5Km.png)',
    color: 'white',
  };

  const projectLinkStyle3 = {
    ...projectLinkStyle,
    backgroundImage: 'url(https://i.imgur.com/hot03JIm.png)',
    color: 'white',
  };

  const navStyle = {
    marginBottom: '20px',
    textDecoration: 'underline',
    textDecorationColor: 'white',
    color: 'white',
  };

  const navListStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  };

  const navListItemStyle = {
    marginRight: '10px',
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s ease',
  };

  return (
    
    <main style={mainStyle}>
      <h1 style={headingStyle}>Hi, I'm Shay</h1>
      <h2>{currentDateTime.toLocaleString()}</h2>
      <p style={paragraphStyle}>I Develop Accessible and Attractive Full Stack Web Applications</p>
      <Transitions>
      <header style={navStyle}>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navListItemStyle}>
              {/* <Link
                to="/"
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Home
              </Link> */}
            </li>
            <li style={navListItemStyle}>
              <Link
                to="/resume"
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Resume
              </Link>
            </li>
            <li style={navListItemStyle}>
              <Link
                to="/projects"
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Projects
              </Link>
            </li>
            <li style={navListItemStyle}>
              <Link
                to="/about"
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Contact & About
              </Link>
            </li>
            {/* <li style={navListItemStyle}>
              <Link
                to="/articles"
                style={navLinkStyle}
                onMouseEnter={(e) => (e.target.style.color = 'aqua')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                Published Articles
              </Link>
            </li> */}
          </ul>
        </nav>
        
      </header>
      
      <h1 style={headingStyle}>OVERVIEW</h1>
      <p style={paragraphStyle}>
        Welcome to my portfolio! I'm a skilled Full Stack software developer with expertise in React, Node.js,
        MongoDB, and Express.js. I have experience building scalable and user-friendly web applications. With a strong
        passion for problem-solving and a keen eye for design, I strive to deliver high-quality solutions tailored to
        meet client needs. Explore my projects and feel free to contact me to discuss how we can work together.
      </p>
      <p style={paragraphStyle}>
        In addition to my technical skills, I possess excellent communication and collaboration abilities. I enjoy
        working in a team environment and thrive on challenges that allow me to expand my knowledge and expertise.
        Let's connect and bring your ideas to life!
      </p>
      <p style={paragraphStyle}>
        Visit my Projects tab above to explore them all! For more details, feel free to reach out to me via{' '}
        <a
          href="mailto:fwasil83@gmail.com"
          style={emailLinkStyle}
          onMouseEnter={(e) => (e.target.style.color = 'aqua')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Email
        </a>
        , or connect with me on LinkedIn. I look forward to hearing from you!
      </p>
      </Transitions>
      <div className="project-links">
        {/* <a href="https://example.com/project3" style={projectLinkStyle3} target="_blank">
          TatdoodAPI
        </a>
        <a href="http://space-dude.surge.sh/" style={projectLinkStyle2} target="_blank">
          Space Game
        </a> */}
        {/* <a href="http://pokeapi152.surge.sh/" style={projectLinkStyle} target="_blank">
          PokemonAPI
        </a> */}
      </div>
    </main>
  );
};

export default Main;
