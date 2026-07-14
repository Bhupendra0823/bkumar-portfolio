import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Top Section - Brand + Social in one row */}
        <div style={styles.topSection}>
          <div style={styles.brandSection}>
            <h3 style={styles.brandName}>
              <span style={styles.brandHighlight}>B</span>hupendra
            </h3>
            <p style={styles.brandDesc}>
              Software Engineer | GenAI & Full Stack Developer
            </p>
          </div>

          <div style={styles.contactRow}>
            <a href="https://github.com/Bhupendra0823" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>🐙</span>
              GitHub
            </a>
            <span style={styles.contactDivider}>•</span>
            <a href="https://linkedin.com/in/bhupendra-kumar-327514206" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>🔗</span>
              LinkedIn
            </a>
            <span style={styles.contactDivider}>•</span>
            <a href="mailto:bkumar0823@gmail.com" style={styles.contactLink}>
              <span style={styles.contactIcon}>✉️</span>
              Email
            </a>
            <span style={styles.contactDivider}>•</span>
            <a href="/resume" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>📄</span>
              Resume
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} Bhupendra Kumar. All rights reserved.
          </p>
          <div style={styles.builtWith}>
            <span style={styles.builtIcon}>❤️</span>
            <span style={styles.builtText}>Built with React & Passion</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    width: '100%',
    backgroundColor: 'rgba(10, 14, 39, 0.95)',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    padding: '30px 20px 20px',
    marginTop: 'auto',
  },

  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
  },

  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },

  brandSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },

  brandName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  brandHighlight: {
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  brandDesc: {
    fontSize: '13px',
    color: '#94a3b8',
    margin: 0,
    lineHeight: '1.5',
  },

  contactRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },

  contactLink: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '13px',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '4px 8px',
    borderRadius: '6px',
    '&:hover': {
      color: '#60a5fa',
      backgroundColor: 'rgba(96,165,250,0.08)',
    },
  },

  contactIcon: {
    fontSize: '15px',
  },

  contactDivider: {
    color: '#334155',
    fontSize: '12px',
  },

  divider: {
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginBottom: '16px',
  },

  bottomSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
  },

  copyright: {
    fontSize: '12px',
    color: '#475569',
    margin: 0,
  },

  builtWith: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },

  builtIcon: {
    fontSize: '13px',
    animation: 'pulse 1.5s ease-in-out infinite',
  },

  builtText: {
    fontSize: '12px',
    color: '#475569',
    letterSpacing: '0.3px',
  },
}

export default Footer