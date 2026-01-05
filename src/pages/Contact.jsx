import React from 'react'
import ViewResume from '../components/ViewResume/ViewResume.jsx'
const Contact = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Contact</h1>
        <p style={styles.subHeading}>
          Let’s connect — I’m open to opportunities and collaboration
        </p>

        <div style={styles.divider}></div>

        <div style={styles.contactGrid}>

          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>Email</h3>
            <p style={styles.contactValue}>
              bkumar0823@gmail.com
            </p>
          </div>

          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>Phone</h3>
            <p style={styles.contactValue}>
              +91 8864866262
            </p>
          </div>

          <div style={styles.contactCard}>
            <h3 style={styles.contactTitle}>Availability</h3>
            <p style={styles.contactValue}>
              Open to full-time roles, freelance work, and collaborations
            </p>
          </div>

        </div>

        <form action="https://getform.io/f/akkepdwa" method='POST' style={styles.form}>
          <h3 style={styles.formTitle}>Send me a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            style={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            style={styles.textarea}
            required
          ></textarea>
          {/* OPTIONAL but valid */}
          <input type="hidden" name="_subject" value="New Portfolio Contact" />

          <button type="submit" style={styles.submitBtn}>
            Send Message
          </button>
        </form>
        <p style={styles.note}>
          ❤️ Thanks for visiting my portfolio. I’m always open to feedback, ideas, and collaboration opportunities.❤️
        </p>

      </div>
    </div>
  )
}

const styles = {


  /* PAGE */
  page: {
    width: '100%',
    minHeight: '100vh',
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
    backgroundColor: '#3b82f6',
    margin: '0 auto 20px',
    borderRadius: '2px',
  },

  container: {
    maxWidth: '900px',
    width: '100%',
    textAlign: 'center',
  },

  contactGrid: {
    marginTop: '40px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },

  contactCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
  },

  contactTitle: {
    fontSize: '16px',
    marginBottom: '8px',
    color: '#1f2933',
  },

  contactValue: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.6',
  },

  note: {
    marginTop: '40px',
    fontSize: '14px',
    color: '#ffffffff',
    fontWeight: 'bold',
  },
  form: {
    marginTop: '50px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  formTitle: {
    marginBottom: '20px',
    color: '#1f2933',
  },

  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
  },

  textarea: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
    resize: 'none',
  },

  submitBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

}

export default Contact