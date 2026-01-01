
import React from 'react'
import ViewResume from './components/ViewResume/ViewResume'

function App() {
  return (
    <>
      <title>Bhupendra Kumar - Portfolio</title>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <span style={styles.logo}>Bhupendra</span>
        </div>

        <div style={styles.navRight}>
          <a style={styles.navLink} href="#home">Home</a>
          <a style={styles.navLink} href="#projects">Projects</a>
          <a style={styles.navLink} href="#experience">Experience</a>
          <a style={styles.navLink} href="#contact">Contact</a>

         <ViewResume />
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div style={styles.page} id="home">
        <div style={styles.card}>
          <h1 style={styles.heading}>
            Bhupendra Kumar
          </h1>

          <p style={styles.subHeading}>
            Full Stack Developer | GenAI Enthusiast
          </p>

          <div style={styles.divider}></div>

          <p style={styles.description}>
            Welcome to my portfolio website.
          </p>

          <p style={styles.description}>
            I am currently building this space step by step.
            New projects, skills, and experiences will be added soon.
          </p>

          <p style={styles.loading}>
            🚧 Work in progress — please check back later.
          </p>

          <ViewResume />
           
        </div>
      </div>
    </>
  )
}

const styles = {
  /* NAVBAR */
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '64px',
    backgroundColor: '#0f2027',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
    letterSpacing: '1px',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  navLink: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
  },
  navResumeBtn: {
    marginLeft: '10px',
    padding: '8px 16px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 'bold',
  },

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
    color: '#1f2933',
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

}

export default App
