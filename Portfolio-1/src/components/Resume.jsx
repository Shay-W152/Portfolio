import React from 'react';
import Transitions from './Transition';

const Resume = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#181818',
      minHeight: '100vh',
      alignItems: 'center',
    },
    main: {
      textAlign: 'center',
      color: 'aqua',
      fontFamily: 'Major Mono Display',
      marginTop: '50px',
      marginBottom: '30px',
      maxWidth: '800px',
      padding: '30px',
      background: '#2F3137',
      borderRadius: '15px',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subHeading: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '15px',
      marginBottom: '10px',
    },
    sectionHeading: {
      fontSize: '22px',
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '15px',
    },
    date: {
      fontSize: '16px',
      marginBottom: '5px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'none',
      marginLeft: '20px',
      marginBottom: '10px',
    },
    link: {
      color: 'white',
      textDecoration: 'underline',
      transition: 'color 0.3s ease',
    },
    circleImageContainerStyle: {
      display: 'flex',
      justifyContent: 'center',
    },
    circleImageStyle: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      border: '2px solid aqua',
      objectFit: 'cover',
      transition: 'transform 0.3s',
    },
  };

  const handleImageHover = (e) => {
    e.target.style.opacity = '0.7';
  };

  const handleImageLeave = (e) => {
    e.target.style.opacity = '1';
  };

  return (
    <div style={styles.container}>
      <div style={styles.main}>
        <div style={styles.circleImageContainerStyle}>
          
            <img
              src="src/assets/profilePic.png"
              alt="Profile"
              style={styles.circleImageStyle}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            />
          
        </div>

        <Transitions>
          <h1 style={styles.heading}>Sheikh-Saad Wasil</h1>
          <h2 style={styles.subHeading}>Software Engineer</h2>
          <h3 style={styles.subHeading}>Jersey City, NJ</h3>
          <a
            href="mailto:fwasil83@gmail.com"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.color = 'aqua')}
            onMouseLeave={(e) => (e.target.style.color = 'white')}
          >
            Email: fwasil83@gmail.com
          </a>

          <h3 style={styles.sectionHeading}>Statement</h3>
          <p style={styles.paragraph}>

            As a highly skilled software engineer specializing in front-end development, I possess a unique blend of technical expertise, creativity, and attention to detail that sets me apart. With a solid background in problem-solving, I thrive on overcoming challenges and finding innovative solutions. Drawing from my experience as a researcher, I have honed my leadership skills, seamlessly transferring my ability to analyze complex problems and communicate effectively to drive team success. I am eager to collaborate with your departments, streamlining workflows and enhancing efficiency, while maintaining a keen focus on aesthetics and quality. My greatest strength lies in fostering a cohesive team environment, leveraging the strengths of each individual to achieve departmental goals and uphold exceptional standards. By harnessing my diverse skill set, I am confident in my ability to make a valuable contribution to your organization.
          </p>

          <h3 style={styles.sectionHeading}>Experience</h3>
          <h4 style={styles.subHeading}>IECH Research Labs - New York - Research Specialist III</h4>
          <p style={styles.date}>February 2020 - Present</p>
          <ul style={styles.list}>
            <li>Prepare and monitor subjects for testing, including observations, intake, data entry, and analysis.</li>
            <li>Screen potential subjects for compatibility by reviewing applications, physicals, and conducting interviews.</li>
            <li>Liaise between three separate research teams to ensure smoother and more efficient communication throughout the research process.</li>
          </ul>

          <h4 style={styles.subHeading}>Square3 - New York - Corporate Trainer</h4>
          <p style={styles.date}>January 2017 - November 2019</p>
          <ul style={styles.list}>
            <li>Managed a cohesive team within the organization and led internal seminars and courses on high-performing teams and sales performances.</li>
            <li>Generated revenue for the company by hosting seminars and courses.</li>
            <li>Managed and led a team of 45 employees, consistently exceeding the $80,000 monthly sales goal.</li>
          </ul>

          <h4 style={styles.subHeading}>Rutgers New Brunswick, New Jersey - Teaching Assistant, Psychology Dept.</h4>
          <p style={styles.date}>May 2015 - January 2017</p>
          <ul style={styles.list}>
            <li>Facilitated interactive classroom discussions and assisted the professor in delivering engaging lectures to undergraduate psychology students.</li>
            <li>Provided one-on-one mentoring and academic support to students, addressing their individual needs and helping them grasp complex psychological concepts.</li>
            <li>Assisted in the development and implementation of research projects, conducting data analysis and preparing reports to contribute to the advancement of psychological research within the department.</li>
          </ul>

          <h3 style={styles.sectionHeading}>Skills/Languages</h3>
          <ul style={styles.list}>
            <li>Computer Languages: [List of computer languages]</li>
            <li>Time Management</li>
            <li>Data Entry</li>
            <li>Microsoft Office Suite</li>
            <li>Communication Skills</li>
            <li>Research Experience</li>
            <li>Writing Skills</li>
            <li>Customer Service</li>
            <li>Organizational Skills</li>
            <li>Account Management</li>
            <li>Interviewing</li>
            <li>Recruiting</li>
            <li>English</li>
            <li>Urdu</li>
          </ul>

          <h3 style={styles.sectionHeading}>Education</h3>
          <p style={styles.paragraph}>Rutgers University, New Jersey - Bachelor of Psychology, September 2014 - May 2018</p>
          <p style={styles.paragraph}>Rutgers University, New Jersey - Bachelor of Sociology, September 2014 - May 2018</p>
          <p style={styles.paragraph}>General Assembly Software Engineering Immersive - August 2023</p>
        </Transitions>
      </div>
    </div>
  );
};

export default Resume;
