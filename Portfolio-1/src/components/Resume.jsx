import React from 'react';

const Resume = () => {
  return (
    <div style={styles.container}>
      <h1>Sheikh-Saad Wasil</h1>
      <h2>Software Engineer</h2>
      <h3>Jersey City, NJ</h3>
      <a
        href="mailto:fwasil83@gmail.com"
        style={{
          color: 'white',
          textDecoration: 'underline',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.color = 'aqua')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
      >
        Email: fwasil83@gmail.com
      </a>

      <h3 style={styles.heading}>Statement</h3>
      <p style={styles.paragraph}>
        As a highly skilled software engineer specializing in back end development, I possess a unique blend of technical expertise, creativity, and attention to detail that sets me apart. With a solid background in problem-solving, I thrive on overcoming challenges and finding innovative solutions. Drawing from my experience as a researcher, I have honed my leadership skills, seamlessly transferring my ability to analyze complex problems and communicate effectively to drive team success. I am eager to collaborate with your departments, streamlining workflows and enhancing efficiency, while maintaining a keen focus on aesthetics and quality. My greatest strength lies in fostering a cohesive team environment, leveraging the strengths of each individual to achieve departmental goals and uphold exceptional standards. By harnessing my diverse skill set, I am confident in my ability to make a valuable contribution to your organization.
      </p>

      {/* Rest of the code */}
    </div>
  );
};

export default Resume;

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    
    color: 'aqua',
    borderRadius: '5px',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '15px',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '15px',
    marginBottom: '10px',
    
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginTop: '5px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
};
