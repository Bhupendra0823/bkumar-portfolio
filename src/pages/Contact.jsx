import ViewResume from '../components/ViewResume/ViewResume.jsx'
import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [visible, setVisible] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        form.reset()
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus('')
        }, 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 3000)
      }
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 3000)
    }
  }

  return (
    <div style={styles.page}>
      {/* Background decorations */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>
      <div style={styles.bgDecoration3}></div>

      <div style={styles.container}>
        {/* Header Section */}
        <div style={{
          ...styles.headerSection,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <div style={styles.headerBadge}>CONTACT</div>
          <h1 style={styles.heading}>
            <span style={styles.headingHighlight}>Let's</span> Connect
          </h1>
          <p style={styles.subHeading}>
            I'm open to opportunities and collaboration
          </p>
          <div style={styles.divider}></div>
        </div>

        {/* Contact Info Grid */}
        <div style={{
          ...styles.contactGrid,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.2s',
        }}>
          <div style={styles.contactCard}>
            <div style={styles.contactIconContainer}>
              <span style={styles.contactIcon}>✉️</span>
            </div>
            <h3 style={styles.contactTitle}>Email</h3>
            <a href="mailto:bkumar0823@gmail.com" style={styles.contactValue}>
              bkumar0823@gmail.com
            </a>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.contactIconContainer}>
              <span style={styles.contactIcon}>📱</span>
            </div>
            <h3 style={styles.contactTitle}>Phone</h3>
            <a href="tel:+918864866262" style={styles.contactValue}>
              +91 8864866262
            </a>
          </div>

          <div style={styles.contactCard}>
            <div style={styles.contactIconContainer}>
              <span style={styles.contactIcon}>💼</span>
            </div>
            <h3 style={styles.contactTitle}>Availability</h3>
            <p style={styles.contactValueText}>
              Open to full-time roles, freelance work, and collaborations
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div style={{
          ...styles.formWrapper,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.4s',
        }}>
          <form 
            action="https://forminit.com/f/akkepdwa" 
            method="POST" 
            style={styles.form}
            onSubmit={handleSubmit}
          >
            <div style={styles.formHeader}>
              <span style={styles.formIcon}>💬</span>
              <h3 style={styles.formTitle}>Send me a message</h3>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                style={styles.input}
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                style={styles.input}
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Your Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project, opportunity, or idea..."
                rows="4"
                style={styles.textarea}
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="hidden" name="_subject" value="New Portfolio Contact" />

            <button 
              type="submit" 
              style={{
                ...styles.submitBtn,
                opacity: formStatus === 'sending' ? 0.7 : 1,
                background: formStatus === 'sent' 
                  ? 'linear-gradient(135deg, #4ade80, #22d3ee)' 
                  : formStatus === 'error'
                  ? 'linear-gradient(135deg, #f87171, #ef4444)'
                  : 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              }}
              disabled={formStatus === 'sending' || formStatus === 'sent'}
            >
              {formStatus === 'sending' ? (
                <>
                  <span style={styles.spinner}></span>
                  Sending...
                </>
              ) : formStatus === 'sent' ? (
                '✅ Message Sent!'
              ) : formStatus === 'error' ? (
                '❌ Error! Try again'
              ) : (
                'Send Message →'
              )}
            </button>

            {formStatus === 'sent' && (
              <p style={styles.successMessage}>
                Thank you! Your message has been sent successfully. I'll get back to you soon! 🎉
              </p>
            )}
            {formStatus === 'error' && (
              <p style={styles.errorMessage}>
                Oops! Something went wrong. Please try again or contact me directly via email.
              </p>
            )}
          </form>
        </div>

        {/* Footer Note */}
        <div style={{
          ...styles.noteContainer,
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.6s',
        }}>
          <p style={styles.note}>
            ❤️ Thanks for visiting my portfolio. I'm always open to feedback, 
            ideas, and collaboration opportunities. ❤️
          </p>
        </div>

        {/* Quick Social Links */}
        <div style={{
          ...styles.socialSection,
          opacity: visible ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.7s',
        }}>
          <p style={styles.socialLabel}>Connect with me</p>
          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/Bhupendra0823" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(96,165,250,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={styles.socialIcon}>🐙</span>
            </a>
            <a 
              href="https://linkedin.com/in/bhupendra-kumar-327514206" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(96,165,250,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={styles.socialIcon}>🔗</span>
            </a>
            <a 
              href="mailto:bkumar0823@gmail.com" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(96,165,250,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={styles.socialIcon}>✉️</span>
            </a>
            <a 
              href="https://bkumar0823.space" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(96,165,250,0.2)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span style={styles.socialIcon}>🌐</span>
            </a>
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

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
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
    padding: '20px',
    paddingTop: '100px',
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
    maxWidth: '1000px',
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },

  // HEADER
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
  },

  headerBadge: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#60a5fa',
    backgroundColor: 'rgba(96,165,250,0.1)',
    padding: '6px 18px',
    borderRadius: '20px',
    letterSpacing: '2px',
    marginBottom: '15px',
    border: '1px solid rgba(96,165,250,0.2)',
  },

  heading: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '10px',
    letterSpacing: '-0.5px',
  },

  headingHighlight: {
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  subHeading: {
    fontSize: '18px',
    color: '#94a3b8',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontWeight: '300',
  },

  divider: {
    width: '80px',
    height: '4px',
    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
    margin: '20px auto 0',
    borderRadius: '4px',
  },

  // CONTACT GRID
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginBottom: '50px',
  },

  contactCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,0.08)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
    ':hover': {
      transform: 'translateY(-5px)',
      backgroundColor: 'rgba(255,255,255,0.08)',
    },
  },

  contactIconContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    background: 'rgba(96,165,250,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px',
    fontSize: '28px',
  },

  contactIcon: {
    fontSize: '28px',
  },

  contactTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#94a3b8',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  contactValue: {
    fontSize: '16px',
    color: '#60a5fa',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
    ':hover': {
      color: '#93c5fd',
    },
  },

  contactValueText: {
    fontSize: '15px',
    color: '#cbd5e1',
    lineHeight: '1.6',
    margin: 0,
  },

  // FORM
  formWrapper: {
    marginBottom: '40px',
  },

  form: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  formHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '25px',
  },

  formIcon: {
    fontSize: '24px',
  },

  formTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  formGroup: {
    marginBottom: '18px',
    textAlign: 'left',
  },

  formLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#94a3b8',
    marginBottom: '6px',
    letterSpacing: '0.3px',
  },

  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#ffffff',
    fontSize: '15px',
    transition: 'all 0.3s',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    ':focus': {
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(255,255,255,0.08)',
      boxShadow: '0 0 0 3px rgba(96,165,250,0.1)',
    },
    '::placeholder': {
      color: '#64748b',
    },
  },

  textarea: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '1px solid rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    color: '#ffffff',
    fontSize: '15px',
    transition: 'all 0.3s',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    ':focus': {
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(255,255,255,0.08)',
      boxShadow: '0 0 0 3px rgba(96,165,250,0.1)',
    },
    '::placeholder': {
      color: '#64748b',
    },
  },

  submitBtn: {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(96,165,250,0.3)',
    },
    ':disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
      transform: 'none',
    },
  },

  spinner: {
    display: 'inline-block',
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTopColor: '#ffffff',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },

  successMessage: {
    color: '#4ade80',
    marginTop: '12px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
  },

  errorMessage: {
    color: '#f87171',
    marginTop: '12px',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '500',
  },

  // NOTE
  noteContainer: {
    textAlign: 'center',
    marginBottom: '30px',
  },

  note: {
    fontSize: '15px',
    color: '#94a3b8',
    lineHeight: '1.8',
    maxWidth: '600px',
    margin: '0 auto',
  },

  // SOCIAL
  socialSection: {
    textAlign: 'center',
  },

  socialLabel: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '15px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },

  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },

  socialLink: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '1px solid rgba(255,255,255,0.06)',
  },

  socialIcon: {
    fontSize: '22px',
  },
}

export default Contact