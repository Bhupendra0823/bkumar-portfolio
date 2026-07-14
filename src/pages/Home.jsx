import React, { useState, useEffect } from 'react'
import ViewResume from '../components/ViewResume/ViewResume.jsx'

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Software Engineer | GenAI & Full Stack Developer'

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    return () => clearInterval(typingInterval)
  }, [])

  return (
    <>
      <title>Bhupendra Kumar - Software Engineer | GenAI & Full Stack Developer</title>

      <div style={styles.page} id="home">
        {/* Background decorations */}
        <div style={styles.bgDecoration1}></div>
        <div style={styles.bgDecoration2}></div>
        <div style={styles.bgDecoration3}></div>

        <div style={styles.container}>
          {/* Profile Section */}
          <div style={{
            ...styles.profileSection,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}>
            {/* Avatar/Profile Image Placeholder */}
            <div style={styles.avatarContainer}>
              <div style={styles.avatar}>
                <span style={styles.avatarEmoji}>👨‍💻</span>
                <div style={styles.avatarRing}></div>
              </div>
            </div>

            {/* Name */}
            <h1 style={styles.heading}>
              <span style={styles.headingHighlight}>Bhupendra</span> Kumar
            </h1>

            {/* Typing Effect Subtitle */}
            <div style={styles.subHeadingContainer}>
              <span style={styles.cursor}>▸</span>
              <span style={styles.subHeading}>
                {typedText}
                <span style={styles.typingCursor}>|</span>
              </span>
            </div>

            {/* Divider */}
            <div style={styles.divider}></div>

            {/* Summary Section - Inspired by Resume */}
            <div style={styles.summaryContainer}>
              <p style={styles.summaryText}>
                Software Engineer with <strong style={styles.highlightText}>2.5+ years</strong> of experience in designing 
                and developing scalable backend systems, <strong style={styles.highlightText}>AI-powered applications</strong>, 
                and full-stack web solutions.
              </p>
              <p style={styles.summaryText}>
                Experienced in <strong style={styles.highlightText}>Python, FastAPI, React.js, REST APIs, MongoDB, 
                and Large Language Models (LLMs)</strong> with hands-on experience building 
                <strong style={styles.highlightText}> Retrieval-Augmented Generation (RAG)</strong> systems, 
                multi-tenant AI platforms, and enterprise web applications.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div style={styles.techTagsContainer}>
              <span style={styles.techTag}>Python</span>
              <span style={styles.techTag}>FastAPI</span>
              <span style={styles.techTag}>React.js</span>
              <span style={styles.techTag}>LLMs</span>
              <span style={styles.techTag}>RAG</span>
              <span style={styles.techTag}>LangGraph</span>
              <span style={styles.techTag}>PostgreSQL</span>
              <span style={styles.techTag}>MongoDB</span>
            </div>

            {/* Status Badge */}
            <div style={styles.statusContainer}>
              <span style={styles.statusDot}></span>
              <span style={styles.statusText}>Open to opportunities</span>
            </div>

            {/* Work in Progress Banner */}
            <div style={styles.workInProgress}>
              <span style={styles.wipIcon}>🚧</span>
              <span style={styles.wipText}>Portfolio under construction — more content coming soon!</span>
            </div>

            {/* Resume Button */}
            <ViewResume />

            {/* Quick Links */}
            <div style={styles.quickLinks}>
              <a href="/projects" style={styles.quickLink}>
                <span style={styles.quickLinkIcon}>💻</span>
                Projects
              </a>
              <span style={styles.quickLinkDivider}>•</span>
              <a href="/experience" style={styles.quickLink}>
                <span style={styles.quickLinkIcon}>💼</span>
                Experience
              </a>
              <span style={styles.quickLinkDivider}>•</span>
              <a href="/learninglog" style={styles.quickLink}>
                <span style={styles.quickLinkIcon}>📚</span>
                Learning
              </a>
            </div>

            {/* Social/Contact Icons */}
            <div style={styles.socialLinks}>
              <a href="https://github.com/Bhupendra0823" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <span style={styles.socialIcon}>🐙</span>
              </a>
              <a href="https://www.linkedin.com/in/bkumar0823/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <span style={styles.socialIcon}>🔗</span>
              </a>
              <a href="mailto:bkumar0823@gmail.com" style={styles.socialLink}>
                <span style={styles.socialIcon}>✉️</span>
              </a>
              <a href="/contact" style={styles.socialLink}>
                <span style={styles.socialIcon}>📱</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  )
}

const styles = {
  // PAGE
  page: {
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0e27, #1a1a3e, #2d1b4e)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    paddingTop: '80px',
    fontFamily: '"Segoe UI", "Helvetica Neue", Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },

  // Background Decorations
  bgDecoration1: {
    position: 'absolute',
    top: '-150px',
    right: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    animation: 'float 6s ease-in-out infinite',
  },

  bgDecoration2: {
    position: 'absolute',
    bottom: '-150px',
    left: '-150px',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
    animation: 'float 8s ease-in-out infinite reverse',
  },

  bgDecoration3: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(96,165,250,0.03) 0%, transparent 70%)',
    pointerEvents: 'none',
  },

  container: {
    maxWidth: '950px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },

  // PROFILE SECTION
  profileSection: {
    textAlign: 'center',
    padding: '50px 45px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    borderRadius: '30px',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
    position: 'relative',
    overflow: 'hidden',
  },

  // Avatar
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(96,165,250,0.2), rgba(167,139,250,0.2))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '2px solid rgba(255,255,255,0.1)',
  },

  avatarRing: {
    position: 'absolute',
    top: '-4px',
    left: '-4px',
    right: '-4px',
    bottom: '-4px',
    borderRadius: '50%',
    border: '3px solid transparent',
    borderTopColor: '#60a5fa',
    borderRightColor: '#a78bfa',
    animation: 'spin 3s linear infinite',
  },

  avatarEmoji: {
    fontSize: '50px',
    zIndex: 2,
  },

  // HEADING
  heading: {
    fontSize: '48px',
    fontWeight: '800',
    marginBottom: '8px',
    color: '#ffffff',
    letterSpacing: '-0.5px',
  },

  headingHighlight: {
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  // SUBHEADING with Typing Effect
  subHeadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '20px',
    minHeight: '28px',
  },

  cursor: {
    color: '#60a5fa',
    fontSize: '18px',
    fontWeight: 'bold',
    animation: 'pulse 1s ease-in-out infinite',
  },

  subHeading: {
    fontSize: '18px',
    color: '#94a3b8',
    letterSpacing: '1px',
    fontWeight: '300',
    minHeight: '28px',
  },

  typingCursor: {
    display: 'inline-block',
    color: '#60a5fa',
    fontSize: '20px',
    fontWeight: 'bold',
    animation: 'pulse 0.7s ease-in-out infinite',
    marginLeft: '2px',
  },

  // DIVIDER
  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
    margin: '0 auto 25px',
    borderRadius: '4px',
  },

  // SUMMARY - Updated from Resume
  summaryContainer: {
    maxWidth: '700px',
    margin: '0 auto 20px',
    textAlign: 'left',
    padding: '0 10px',
  },

  summaryText: {
    fontSize: '16px',
    color: '#cbd5e1',
    lineHeight: '1.9',
    marginBottom: '14px',
    textAlign: 'center',
  },

  highlightText: {
    color: '#60a5fa',
    fontWeight: '600',
  },

  // TECH TAGS
  techTagsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '22px',
    padding: '0 10px',
  },

  techTag: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#60a5fa',
    backgroundColor: 'rgba(96,165,250,0.1)',
    padding: '5px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(96,165,250,0.15)',
    letterSpacing: '0.3px',
    transition: 'all 0.3s',
    cursor: 'default',
    '&:hover': {
      backgroundColor: 'rgba(96,165,250,0.2)',
      transform: 'translateY(-2px)',
    },
  },

  // STATUS
  statusContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '20px',
  },

  statusDot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#10b981',
    display: 'inline-block',
    animation: 'pulse 1.5s ease-in-out infinite',
  },

  statusText: {
    fontSize: '14px',
    color: '#94a3b8',
    fontWeight: '500',
  },

  // WORK IN PROGRESS
  workInProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '12px 20px',
    backgroundColor: 'rgba(251, 191, 36, 0.08)',
    borderRadius: '12px',
    border: '1px solid rgba(251, 191, 36, 0.15)',
    marginBottom: '25px',
  },

  wipIcon: {
    fontSize: '18px',
  },

  wipText: {
    fontSize: '14px',
    color: '#fbbf24',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },

  // QUICK LINKS
  quickLinks: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '25px',
    flexWrap: 'wrap',
  },

  quickLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 14px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
      color: '#60a5fa',
      backgroundColor: 'rgba(96,165,250,0.1)',
    },
  },

  quickLinkIcon: {
    fontSize: '16px',
  },

  quickLinkDivider: {
    color: '#334155',
    fontSize: '14px',
  },

  // SOCIAL LINKS
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '10px',
  },

  socialLink: {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.06)',
    '&:hover': {
      backgroundColor: 'rgba(96,165,250,0.15)',
      transform: 'translateY(-3px)',
      borderColor: 'rgba(96,165,250,0.3)',
    },
  },

  socialIcon: {
    fontSize: '20px',
  },
}

export default Home