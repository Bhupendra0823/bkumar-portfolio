import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ViewResume from '../ViewResume/ViewResume'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu()
  }, [location])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/projects', label: 'Projects', icon: '💻' },
    { path: '/experience', label: 'Experience', icon: '💼' },
    { path: '/learninglog', label: 'Learning', icon: '📚' },
    { path: '/contact', label: 'Contact', icon: '📱' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      <nav style={{
        ...styles.navbar,
        backgroundColor: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.85)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
        boxShadow: scrolled 
          ? '0 4px 30px rgba(0,0,0,0.4)' 
          : '0 2px 20px rgba(0,0,0,0.2)',
        borderBottom: scrolled 
          ? '1px solid rgba(255,255,255,0.05)' 
          : '1px solid rgba(255,255,255,0.03)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          <span style={styles.logoHighlight}>B</span>hupendra
        </Link>

        {/* Desktop Links */}
        <div style={styles.navRight}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                ...styles.link,
                color: isActive(link.path) ? '#60a5fa' : '#94a3b8',
                fontWeight: isActive(link.path) ? '600' : '400',
                borderBottom: isActive(link.path) ? '2px solid #60a5fa' : '2px solid transparent',
              }}
            >
              <span style={styles.linkIcon}>{link.icon}</span>
              {link.label}
            </Link>
          ))}
          <ViewResume />
        </div>

        {/* Hamburger - visible on mobile */}
        <div
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <div style={{
            ...styles.hamburgerLine,
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            opacity: open ? 0 : 1,
            transform: open ? 'scaleX(0)' : 'none',
          }}></div>
          <div style={{
            ...styles.hamburgerLine,
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <div style={styles.overlay} onClick={closeMenu}></div>
      )}

      {/* Mobile Menu */}
      <div style={{
        ...styles.mobileMenu,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
      }}>
        <div style={styles.mobileMenuHeader}>
          <span style={styles.mobileLogo}>Bhupendra</span>
          <button style={styles.mobileCloseBtn} onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
        
        <div style={styles.mobileLinksContainer}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              style={{
                ...styles.mobileLink,
                color: isActive(link.path) ? '#60a5fa' : '#e2e8f0',
                backgroundColor: isActive(link.path) ? 'rgba(96,165,250,0.1)' : 'transparent',
                borderLeft: isActive(link.path) ? '3px solid #60a5fa' : '3px solid transparent',
              }}
            >
              <span style={styles.mobileLinkIcon}>{link.icon}</span>
              {link.label}
              {isActive(link.path) && <span style={styles.mobileActiveDot}>●</span>}
            </Link>
          ))}
        </div>

        <div style={styles.mobileDivider}></div>

        <div style={styles.mobileFooter}>
          <ViewResume />
          <div style={styles.mobileSocial}>
            <a href="https://github.com/Bhupendra0823" target="_blank" rel="noopener noreferrer" style={styles.mobileSocialLink} aria-label="GitHub">
              🐙
            </a>
            <a href="https://linkedin.com/in/bhupendra-kumar-327514206" target="_blank" rel="noopener noreferrer" style={styles.mobileSocialLink} aria-label="LinkedIn">
              🔗
            </a>
            <a href="mailto:bkumar0823@gmail.com" style={styles.mobileSocialLink} aria-label="Email">
              ✉️
            </a>
          </div>
          <p style={styles.mobileCopy}>© {new Date().getFullYear()} Bhupendra Kumar</p>
        </div>
      </div>

      {/* Add keyframes for animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </>
  )
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    zIndex: 1000,
    boxSizing: 'border-box',
  },

  logo: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '1px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },

  logoHighlight: {
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '22px',
  },

  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  link: {
    textDecoration: 'none',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',
  },

  linkIcon: {
    fontSize: '16px',
  },

  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'background 0.3s',
    background: 'none',
    border: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },

  hamburgerLine: {
    width: '25px',
    height: '2.5px',
    backgroundColor: '#94a3b8',
    borderRadius: '2px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transformOrigin: 'center',
  },

  // Mobile Menu
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: 999,
    backdropFilter: 'blur(4px)',
    animation: 'fadeIn 0.3s ease',
  },

  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '320px',
    height: '100vh',
    backgroundColor: '#0a0e27',
    zIndex: 1001,
    padding: '30px 25px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '-10px 0 40px rgba(0,0,0,0.5)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    borderLeft: '1px solid rgba(255,255,255,0.05)',
    overflowY: 'auto',
  },

  mobileMenuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },

  mobileLogo: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  mobileCloseBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    '&:hover': {
      color: '#ffffff',
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },

  mobileLinksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    flex: 1,
  },

  mobileLink: {
    textDecoration: 'none',
    fontSize: '16px',
    padding: '14px 18px',
    borderRadius: '10px',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontWeight: '500',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },

  mobileLinkIcon: {
    fontSize: '20px',
    width: '30px',
  },

  mobileActiveDot: {
    marginLeft: 'auto',
    color: '#60a5fa',
    fontSize: '12px',
  },

  mobileDivider: {
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.06)',
    margin: '20px 0',
  },

  mobileFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  mobileSocial: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
  },

  mobileSocialLink: {
    fontSize: '22px',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
  },

  mobileCopy: {
    fontSize: '12px',
    color: '#475569',
    textAlign: 'center',
    margin: 0,
  },
}

// Add media query styles
const mediaStyles = `
  @media (max-width: 768px) {
    .nav-desktop {
      display: none !important;
    }
  }
`

// Inject media query styles
const styleTag = document.createElement('style')
styleTag.textContent = mediaStyles
document.head.appendChild(styleTag)

export default Navbar