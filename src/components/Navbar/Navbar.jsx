import { useState } from 'react'
import { Link } from 'react-router-dom'
import ViewResume from '../ViewResume/ViewResume'
const Navbar = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Bhupendra</div>

        {/* Desktop Links */}
        <div className="nav-desktop" style={styles.navRight}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/experience" style={styles.link}>Experience</Link>
          <Link to="/learninglog" style={styles.link}>Learning</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>

          <ViewResume />
        </div>

        {/* Hamburger */}
        <div
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div style={styles.mobileMenu}>
          <Link to="/" onClick={closeMenu} style={styles.mobileLink}>Home</Link>
          <Link to="/projects" onClick={closeMenu} style={styles.mobileLink}>Projects</Link>
          <Link to="/experience" onClick={closeMenu} style={styles.mobileLink}>Experience</Link>
          <Link to="/learninglog" onClick={closeMenu} style={styles.mobileLink}>Learning</Link>
          <Link to="/contact" onClick={closeMenu} style={styles.mobileLink}>Contact</Link>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.mobileResumeBtn}
          >
            Resume
          </a>
        </div>
      )}
    </>
  )
}

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '64px',
    backgroundColor: '#0f2027',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    zIndex: 1000,
  },

  logo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '1px',
  },
 navRight: {
    alignItems: 'center',
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '14px',
    alignItems: 'center',
  },

  resumeBtn: {
    marginLeft: '10px',
    padding: '8px 14px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 'bold',
  },

  mobileMenu: {
    position: 'fixed',
    top: '64px',
    left: 0,
    width: '100%',
    backgroundColor: '#0f2027',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    zIndex: 999,
  },

  mobileLink: {
    color: '#e5e7eb',
    textDecoration: 'none',
    fontSize: '16px',
  },

  mobileResumeBtn: {
    marginTop: '10px',
    padding: '10px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
  },
}


export default Navbar