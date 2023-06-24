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

      <h3 style={styles.heading}>Experience</h3>
      <h4 style={styles.subHeading}>IECH Research Labs - New York - Research Specialist III</h4>
      <p>February 2020 - Present</p>
      <ul style={styles.list}>
        <li>Prepare and monitor subjects for testing, including observations, intake, data entry, and analysis.</li>
        <li>Screen potential subjects for compatibility by reviewing applications, physicals, and conducting interviews.</li>
        <li>Liaise between three separate research teams to ensure smoother and more efficient communication throughout the research process.</li>
      </ul>

      <h4 style={styles.subHeading}>Square3 - New York - Corporate Trainer</h4>
      <p>January 2017 - November 2019</p>
      <ul style={styles.list}>
        <li>Managed a cohesive team within the organization and led internal seminars and courses on high-performing teams and sales performances.</li>
        <li>Generated revenue for the company by hosting seminars and courses.</li>
        <li>Managed and led a team of 45 employees, consistently exceeding the $80,000 monthly sales goal.</li>
      </ul>

      <h4 style={styles.subHeading}>Rutgers New Brunswick, New Jersey - Teaching Assistant, Psychology Dept.</h4>
      <p>May 2015 - January 2017</p>
      <ul style={styles.list}>
        <li>Facilitated interactive classroom discussions and assisted the professor in delivering engaging lectures to undergraduate psychology students.</li>
        <li>Provided one-on-one mentoring and academic support to students, addressing their individual needs and helping them grasp complex psychological concepts.</li>
        <li>Assisted in the development and implementation of research projects, conducting data analysis and preparing reports to contribute to the advancement of psychological research within the department.</li>
      </ul>

      <h3 style={styles.heading}>Skills/Languages</h3>
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

      <h3 style={styles.heading}>Education</h3>
      <p style={styles.paragraph}>Rutgers University, New Jersey - Bachelor of Psychology, September 2014 - May 2018</p>
      <p style={styles.paragraph}>Rutgers University, New Jersey - Bachelor of Sociology, September 2014 - May 2018</p>
      <p style={styles.paragraph}>General Assembly Software Engineering Immersive - August 2023</p>
    </div>
  );
};

export default Resume;


const styles = {
  container: {
    
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Major Mono Display',
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
