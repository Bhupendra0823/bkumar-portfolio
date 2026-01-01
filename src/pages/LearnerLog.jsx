const LearnerLog = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Learning Log</h1>
        <p style={styles.subHeading}>
          What I learn, why I learn it, and how I apply it
        </p>

        <div style={styles.divider}></div>

        <div style={styles.logList}>

          <div style={styles.logCard}>
            <h3 style={styles.logTitle}>React Architecture & Page Structure</h3>
            <p style={styles.logItem}><strong>Why:</strong> To keep the application scalable and easy to maintain.</p>
            <p style={styles.logItem}><strong>Applied:</strong> Separated pages and reusable components, centralized routing in App.jsx.</p>
            <p style={styles.logItem}><strong>Capability Now:</strong> Can design clean React app structures with proper separation of concerns.</p>
            <p style={styles.logNext}>Next: Improve layout reuse using layout components.</p>
          </div>

          <div style={styles.logCard}>
            <h3 style={styles.logTitle}>SPA Navigation with React Router</h3>
            <p style={styles.logItem}><strong>Why:</strong> Needed smooth navigation without full page reloads.</p>
            <p style={styles.logItem}><strong>Applied:</strong> Implemented client-side routing using React Router and Link components.</p>
            <p style={styles.logItem}><strong>Capability Now:</strong> Can build single-page applications with multiple routes and shared layouts.</p>
            <p style={styles.logNext}>Next: Add 404 handling and protected routes.</p>
          </div>

          <div style={styles.logCard}>
            <h3 style={styles.logTitle}>Git Branching & Production Workflow</h3>
            <p style={styles.logItem}><strong>Why:</strong> To avoid breaking the live application while adding new features.</p>
            <p style={styles.logItem}><strong>Applied:</strong> Used feature branches and merged only stable code into the main branch.</p>
            <p style={styles.logItem}><strong>Capability Now:</strong> Can manage clean Git workflows similar to real-world teams.</p>
            <p style={styles.logNext}>Next: Practice resolving merge conflicts and using pull requests.</p>
          </div>

          <div style={styles.logCard}>
            <h3 style={styles.logTitle}>Deployment & Hosting (Render)</h3>
            <p style={styles.logItem}><strong>Why:</strong> Needed a real production environment for my portfolio.</p>
            <p style={styles.logItem}><strong>Applied:</strong> Deployed the React application and linked it to a custom domain.</p>
            <p style={styles.logItem}><strong>Capability Now:</strong> Can deploy frontend apps and manage live updates safely.</p>
            <p style={styles.logNext}>Next: Explore CI/CD and environment variables.</p>
          </div>

        </div>

      </div>
    </div>
  )
}


const styles = {


  /* PAGE */
  page: {
    width: '100%',
    minHeight: '100%',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    paddingTop: '90px', // IMPORTANT: space for navbar
    fontFamily: 'Arial, sans-serif',
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
    backgroundColor: '#224886ff',
    margin: '0 auto 20px',
    borderRadius: '2px',
  },

  container: {
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
  },

  logList: {
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
  },

  logCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '25px',
    textAlign: 'left',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },

  logTitle: {
    fontSize: '18px',
    marginBottom: '12px',
    color: '#1f2933',
  },

  logItem: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '6px',
  },

  logNext: {
    marginTop: '10px',
    fontSize: '13px',
    color: '#2563eb',
    fontWeight: 'bold',
  },


}
export default LearnerLog