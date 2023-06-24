import React, { useState } from 'react';
import Transitions from './Transition'

const Projects = () => {
  const projects = [
    {
      title: ' ',
      imageUrl: 'https://i.imgur.com/zMWWb5Km.png',
      link: 'http://space-dude.surge.sh/',
      description: 'A space-themed game built with HTML, CSS, and JavaScript.',
    },
    {
      title: ' ',
      imageUrl: 'https://i.imgur.com/hot03JIm.png',
      link: '',
      description: 'Database consisting of different styles and artists by state then  embedding the google map api .',
    },
    {
      title: ' ',
      imageUrl: 'https://i.imgur.com/mcmsuPKm.png',
      link: 'http://pokeapi152.surge.sh/',
      description: 'A Pokemon information web application using a public API.',
    },
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
  };

  const projectLinkStyle = {
    display: 'inline-block',
    fontFamily:'Georgia',
    height:'100px',
    padding: '90px',
    margin: '10px',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    color: 'aqua',
    borderColor: 'aqua',
    width: '140px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    filter: 'blur(0)',
    transition: 'filter 0.3s',
  };

  const projectInfoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    opacity: hoveredProject !== null ? '1' : '0',
    transition: 'opacity 0.3s',
    color: 'aqua',
  };

  const handleProjectHover = (index) => {
    setHoveredProject(index);
  };

  return (
    <div>
      <Transitions>
      <h1>Check These Out!:</h1>
      <div style={carouselStyle}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            style={{
              ...projectLinkStyle,
              backgroundImage: `url(${project.imageUrl})`,
              filter: hoveredProject !== null && hoveredProject !== index ? 'blur(5px)' : 'blur(0)',
            }}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => handleProjectHover(index)}
            onMouseLeave={() => handleProjectHover(null)}
          >
            <span>{project.title}</span>
            {hoveredProject === index && (
              <div style={projectInfoStyle}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            )}
          </a>
          
        ))}
        
      </div>
      </Transitions>
    </div>
    
  );
};

export default Projects;
