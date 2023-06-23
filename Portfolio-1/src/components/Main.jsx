import React, { useState, useEffect } from 'react';

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

  const mainStyle = {
    textAlign: 'left',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'aqua',
    fontFamily: 'Major Mono Display',
  };

  const headingStyle = {
    fontSize: '24px',
    marginTop: '0',
    fontFamily: 'Major Mono Display',
    marginRight: '600px',
  };

  const paragraphStyle = {};

  const projectLinkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    color: 'aqua',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  };

  const navListItemStyle = {
    margin: '0 10px',
    color: 'white',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <main style={mainStyle}>
      <header style={Object.assign({}, navStyle, { marginBottom: '20px' })}>
        <nav></nav>
      </header>
      <h1 style={headingStyle}>Hi, I'm Shay</h1>
      <h2>{currentDateTime.toLocaleString()}</h2>
      <p style={paragraphStyle}>I Develop Accessible and Attractive full stack and MERN stack web applications</p>
      <div className="project-links">
        
      </div>
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
        Check out my latest projects below or visit my GitHub repository for more details. Feel free to reach out to
        me via email or connect with me on LinkedIn. I look forward to hearing from you!
      </p>
      <div className="project-links">
        <a href="http://pokeapi152.surge.sh/" style={projectLinkStyle} target="_blank">
          Project 1
        </a>
        <a href="http://space-dude.surge.sh/" style={projectLinkStyle} target="_blank">
          Project 2
        </a>
        <a href="https://example.com/project3" style={projectLinkStyle} target="_blank">
          Project 3
        </a>
      </div>
    </main>
  );
};

export default Main;
