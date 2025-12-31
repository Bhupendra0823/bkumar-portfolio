import { useState } from 'react'

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <title>Bhupendra Kumar - Portfolio</title>
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
        <a
          href="https://bkumar0823.space/resume"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.resumeBtn}
        >
          View Resume
        </a>
      </div>

    </div>
  )
}

const styles = {
  page: {
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  }
  ,
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '40px 30px',
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  }
  ,
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
  resumeBtn: {
  display: 'inline-block',
  marginTop: '30px',
  padding: '12px 28px',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  textDecoration: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 'bold',
  letterSpacing: '0.5px',
  transition: 'background-color 0.3s ease',
},

}

export default App
