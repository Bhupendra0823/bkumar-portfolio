import ViewResume from "../ViewResume/ViewResume"
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} Bhupendra Kumar. All rights reserved.
      </p>

      <div style={styles.links}>
        <a
          href="https://github.com/Bhupendra0823"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/bkumar0823/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          LinkedIn
        </a>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Resume
        </a>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    width: '100vw',
    backgroundColor: '#0f2027',
    color: '#d1d5db',
    textAlign: 'center',
    padding: '20px',
    // marginTop: '40px',
  },
  text: {
    fontSize: '13px',
    marginBottom: '8px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    flexWrap: 'wrap',
  },
  link: {
    color: '#3b82f6',
    textDecoration: 'none',
    fontSize: '13px',
  },
}

export default Footer
