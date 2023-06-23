import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    width: '100%',
    // padding: '10px 0',
    backgroundColor: '',
    color: 'white',
    position: 'absolute',
    top: '0',
    left: '0',
    fontFamily: 'Major Mono Display',
  };

  const navStyle = {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    
  };

  const navListItemStyle = {
    margin: '0 10px',
    // marginBottom:'150px',
    color:'white'
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navListItemStyle}><Link to="/">Home</Link></li>
          <li style={navListItemStyle}><Link to="/resume">Resume</Link></li>
          <li style={navListItemStyle}><Link to="/projects">Projects</Link></li>
          <li style={navListItemStyle}><Link to="/about">Contact & About</Link></li>
          <li style={navListItemStyle}><Link to="/articles">Published Articles</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
