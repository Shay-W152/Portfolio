import React, { useState } from 'react';
import Transitions from './Transition';

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
      description: 'Database consisting of different styles and artists by state then embedding the Google Map API.',
    },
    {
      title: ' ',
      imageUrl: 'https://i.imgur.com/KjQvpOl.png',
      link: 'https://nebula-nav.netlify.app/',
      description: 'Nebula-Nav is an interactive starmap site that allows users to explore the wonders of the universe.',
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
    fontFamily: 'Georgia',
    height: '200px',
    padding: '20px',
    margin: '10px',
    backgroundColor: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    color: 'aqua',
    width: '220px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
    transition: 'filter 0.3s, transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
        <h1>Check These Out!</h1>
        <div style={carouselStyle}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              style={{
                ...projectLinkStyle,
                backgroundImage: `url(${project.imageUrl})`,
                filter: hoveredProject !== null && hoveredProject !== index ? 'blur(5px)' : 'blur(0)',
                transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: hoveredProject === index ? '4px 4px 4px aqua' : projectLinkStyle.boxShadow,
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleProjectHover(index)}
              onMouseLeave={() => handleProjectHover(null)}
            >
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
