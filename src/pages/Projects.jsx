import React from 'react'

const Projects = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Projects</h1>
        <p style={styles.subHeading}>
          A glimpse of the work I have built and am currently building
        </p>

        <div style={styles.divider}></div>

        {/* Project Cards */}
        <div style={styles.projectsGrid}>

          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>AUTH Mate</h3>
            <p style={styles.projectDesc}>
              A secure authentication system with registration and login,
              designed for mobile and API-based applications.
            </p>
            <p style={styles.tech}>React Native · Node.js · MongoDB</p>
          </div>

          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>Food Ordering Web App</h3>
            <p style={styles.projectDesc}>
              A full-stack MEAN application for restaurant order management
              and customer interaction.
            </p>
            <p style={styles.tech}>Angular · Node.js · Express · MongoDB</p>
          </div>

          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>More Projects Coming Soon</h3>
            <p style={styles.projectDesc}>
              I am actively working on new ideas and improving existing ones.
              Detailed case studies will be added here soon.
            </p>
            <p style={styles.tech}>🚧 Work in progress</p>
          </div>

        </div>

      </div>
    </div>
  )
}

const styles = {


  /* PAGE */
  page: {
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    paddingTop: '90px', // IMPORTANT: space for navbar
    fontFamily: 'Arial, sans-serif',
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px 30px',
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },

  heading: {
    fontSize: '32px',
    marginBottom: '8px',
    color: '#218cf8ff',
  },
  subHeading: {
    fontSize: '16px',
    color: '#6b7280',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: '#3b82f6',
    margin: '0 auto 20px',
    borderRadius: '2px',
  },
  description: {
    fontSize: '15px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  loading: {
    marginTop: '25px',
    fontSize: '14px',
    color: '#2563eb',
    fontWeight: 'bold',
  },
  container: {
    maxWidth: '1100px',
    width: '100%',
    textAlign: 'center',
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '40px',
  },

  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },

  projectTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#1f2933',
  },

  projectDesc: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '12px',
  },

  tech: {
    fontSize: '13px',
    color: '#2563eb',
    fontWeight: 'bold',
  },


}

export default Projects