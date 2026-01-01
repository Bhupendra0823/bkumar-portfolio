import React from 'react'
import ViewResume from '../components/ViewResume/ViewResume.jsx'
const Home = () => {
  return (
    <>
      <title>Bhupendra Kumar - Portfolio</title>


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

export default Home