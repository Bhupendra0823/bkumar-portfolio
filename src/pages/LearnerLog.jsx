import React, { useEffect, useState } from 'react'

const LearnerLog = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://learninglogmanager.onrender.com/logs")
      .then(res => res.json())
      .then(data => {
        setLogs(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch logs", err)
        setLoading(false)
      })
  }, [])

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Learning Log</h1>
        <p style={styles.subHeading}>
          What I learn, why I learn it, and how I apply it
        </p>

        <div style={styles.divider}></div>

        {loading ? (
          <p style={{ color: "#fff" }}>Loading logs...</p>
        ) : (
          <div style={styles.logList}>
            {logs.map(log => (
              <div style={styles.logCard} key={log.id}>
                <h3 style={styles.logTitle}>{log.title}</h3>

                <p style={styles.logItem}>
                  <strong>Why:</strong> {log.why}
                </p>

                <p style={styles.logItem}>
                  <strong>Applied:</strong> {log.applied}
                </p>

                <p style={styles.logItem}>
                  <strong>Capability Now:</strong> {log.capability}
                </p>

                <p style={styles.logNext}>
                  Next: {log.next_step}
                </p>
              </div>
            ))}
          </div>
        )}

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