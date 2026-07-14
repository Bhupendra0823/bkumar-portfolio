import React, { useEffect, useState } from 'react'

const LearnerLog = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleLogs, setVisibleLogs] = useState([])

  useEffect(() => {
    fetch('https://learninglogmanager.onrender.com/logs')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch logs')
        return res.json()
      })
      .then(data => {
        setTimeout(() => {
          setLogs(data)
          setLoading(false)
          // Trigger animation for cards
          setTimeout(() => {
            setVisibleLogs(data.map((_, index) => index))
          }, 100)
        }, 3000)
      })
      .catch(() => {
        setTimeout(() => {
          setError(true)
          setLoading(false)
        }, 3000)
      })
  }, [])

  // Sample data in case API fails (optional fallback)
  const fallbackLogs = [
    {
      id: 1,
      title: 'Building Agentic AI Workflows with LangGraph',
      why: 'To automate complex claim auditing processes and reduce manual effort in healthcare operations.',
      applied: 'Developed LangGraph workflows for evidence collection, claim analysis, and intelligent task orchestration in an AI-powered healthcare platform.',
      capability: 'Can design and implement agentic AI systems that automate multi-step business processes with intelligent decision-making.',
      next_step: 'Exploring advanced LangGraph features for multi-agent collaboration and human-in-the-loop workflows.'
    },
    {
      id: 2,
      title: 'Retrieval-Augmented Generation (RAG) Systems',
      why: 'To build enterprise-grade AI applications that can answer questions based on proprietary documents and knowledge bases.',
      applied: 'Engineered configurable RAG pipelines supporting document ingestion, chunking strategies, vector retrieval, and AI response generation.',
      capability: 'Can build production-ready RAG systems with multi-tenant support, vector databases, and customizable AI workflows.',
      next_step: 'Optimizing RAG pipelines for lower latency and higher accuracy using advanced retrieval techniques.'
    },
    {
      id: 3,
      title: 'FastAPI for Scalable Backend Services',
      why: 'To build high-performance, asynchronous APIs for AI applications with automatic documentation and validation.',
      applied: 'Developed FastAPI services integrating PostgreSQL databases, AI components, and enterprise REST APIs with JWT authentication.',
      capability: 'Can build scalable, production-ready backend services with FastAPI, PostgreSQL, and AI integrations.',
      next_step: 'Exploring FastAPI WebSocket support for real-time AI applications.'
    }
  ]

  // Use fallback data if API fails and we have no logs
  const displayLogs = logs.length > 0 ? logs : (error ? fallbackLogs : [])

  return (
    <div style={styles.page}>
      {/* Background decoration */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>
      
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.headerBadge}>LEARNING</div>
          <h1 style={styles.heading}>
            <span style={styles.headingHighlight}>Learning</span> Log
          </h1>
          <p style={styles.subHeading}>
            What I learn, why I learn it, and how I apply it
          </p>
          <div style={styles.divider}></div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>{displayLogs.length}</span>
            <span style={styles.statLabel}>Learning Entries</span>
            <span style={styles.statDesc}>Continuous Growth</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>AI/ML</span>
            <span style={styles.statLabel}>Focus Area</span>
            <span style={styles.statDesc}>Generative AI & Backend</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>🚀</span>
            <span style={styles.statLabel}>Always Learning</span>
            <span style={styles.statDesc}>Daily Progress</span>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div style={styles.loadingContainer}>
            <div style={styles.loadingSpinner}></div>
            <p style={styles.loadingText}>Loading learning logs...</p>
            <p style={styles.loadingSubText}>
              This section is powered by a live backend service.
              {error && ' Using fallback data.'}
            </p>
            <div style={styles.loadingFeatures}>
              <span style={styles.loadingFeature}>📚 Why I learn</span>
              <span style={styles.loadingFeature}>🔧 How I apply it</span>
              <span style={styles.loadingFeature}>💡 What I can build</span>
              <span style={styles.loadingFeature}>🎯 What's next</span>
            </div>
          </div>
        )}

        {/* Error State with Fallback */}
        {!loading && error && displayLogs.length > 0 && (
          <div style={styles.errorBanner}>
            <span style={styles.errorIcon}>⚠️</span>
            <span style={styles.errorText}>
              API unavailable - Showing sample learning logs
            </span>
          </div>
        )}

        {/* Logs */}
        {!loading && (
          <div style={styles.logList}>
            {displayLogs.map((log, index) => (
              <div
                key={log.id || index}
                style={{
                  ...styles.logCard,
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index 
                    ? '0 20px 40px rgba(0,0,0,0.4)' 
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  opacity: visibleLogs.includes(index) || logs.length === 0 ? 1 : 0,
                  animation: (visibleLogs.includes(index) || logs.length === 0) ? 'fadeInUp 0.6s ease forwards' : 'none',
                  animationDelay: `${index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card glow overlay */}
                <div style={{
                  ...styles.cardGlow,
                  opacity: hoveredCard === index ? 0.6 : 0,
                }}></div>

                {/* Card Header with Icon */}
                <div style={styles.cardHeader}>
                  <div style={styles.iconContainer}>
                    <span style={styles.logIcon}>📘</span>
                  </div>
                  <div style={styles.titleContainer}>
                    <h3 style={styles.logTitle}>{log.title}</h3>
                    <span style={styles.logNumber}>#{index + 1}</span>
                  </div>
                </div>

                {/* Why Section */}
                <div style={styles.sectionContainer}>
                  <div style={styles.sectionHeader}>
                    <span style={styles.sectionIcon}>🤔</span>
                    <span style={styles.sectionLabel}>Why I Learn This</span>
                  </div>
                  <p style={styles.sectionContent}>{log.why}</p>
                </div>

                {/* Applied Section */}
                <div style={styles.sectionContainer}>
                  <div style={styles.sectionHeader}>
                    <span style={styles.sectionIcon}>⚡</span>
                    <span style={styles.sectionLabel}>How I Applied It</span>
                  </div>
                  <p style={styles.sectionContent}>{log.applied}</p>
                </div>

                {/* Capability Section */}
                <div style={styles.sectionContainer}>
                  <div style={styles.sectionHeader}>
                    <span style={styles.sectionIcon}>💪</span>
                    <span style={styles.sectionLabel}>What I Can Build Now</span>
                  </div>
                  <p style={styles.sectionContent}>{log.capability}</p>
                </div>

                {/* Next Step */}
                <div style={styles.nextContainer}>
                  <span style={styles.nextIcon}>🎯</span>
                  <span style={styles.nextLabel}>Next Step:</span>
                  <span style={styles.nextContent}>{log.next_step}</span>
                </div>

                {/* Progress Indicator
                <div style={styles.progressContainer}>
                  <div style={styles.progressBar}>
                    <div style={styles.progressFill}></div>
                  </div>
                  <span style={styles.progressLabel}>Learning in progress</span>
                </div> */}
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <p style={styles.ctaText}>
            Curious about my learning journey or want to discuss tech?
          </p>
          <div style={styles.ctaButtons}>
            <a href="/contact" style={styles.ctaBtn}>
              Let's Connect
            </a>
            <a href="/projects" style={styles.ctaBtnSecondary}>
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Add keyframes for animation */}
      <style>
        {`
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

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },

  bgDecoration2: {
    position: 'absolute',
    bottom: '-100px',
    left: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
    pointerEvents: 'none',
  },

  container: {
    maxWidth: '1100px',
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

  // STATS
  statsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    marginBottom: '50px',
    flexWrap: 'wrap',
    padding: '30px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },

  statNumber: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ffffff',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  statLabel: {
    fontSize: '14px',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },

  statDesc: {
    fontSize: '12px',
    color: '#64748b',
    letterSpacing: '0.5px',
  },

  // LOADING
  loadingContainer: {
    textAlign: 'center',
    padding: '60px 40px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.05)',
    marginBottom: '30px',
  },

  loadingSpinner: {
    width: '50px',
    height: '50px',
    border: '3px solid rgba(255,255,255,0.1)',
    borderTop: '3px solid #60a5fa',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px',
  },

  loadingText: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '8px',
  },

  loadingSubText: {
    fontSize: '14px',
    color: '#94a3b8',
    marginBottom: '20px',
  },

  loadingFeatures: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  loadingFeature: {
    fontSize: '13px',
    color: '#cbd5e1',
    padding: '8px 16px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  // ERROR BANNER
  errorBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '12px 20px',
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    borderRadius: '10px',
    border: '1px solid rgba(251, 191, 36, 0.2)',
    marginBottom: '25px',
  },

  errorIcon: {
    fontSize: '18px',
  },

  errorText: {
    fontSize: '14px',
    color: '#fbbf24',
    fontWeight: '500',
  },

  // LOG LIST
  logList: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },

  // LOG CARD
  logCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '35px',
    textAlign: 'left',
    border: '1px solid rgba(255,255,255,0.08)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
  },

  cardGlow: {
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
  },

  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
  },

  iconContainer: {
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    background: 'rgba(96, 165, 250, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    flexShrink: 0,
  },

  logIcon: {
    fontSize: '22px',
  },

  titleContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
  },

  logTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  logNumber: {
    fontSize: '12px',
    color: '#64748b',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: '2px 10px',
    borderRadius: '12px',
  },

  sectionContainer: {
    marginBottom: '16px',
    padding: '14px 18px',
    backgroundColor: 'rgba(255,255,255,0.02)',
    borderRadius: '10px',
  },

  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
  },

  sectionIcon: {
    fontSize: '16px',
  },

  sectionLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  sectionContent: {
    fontSize: '15px',
    color: '#e2e8f0',
    lineHeight: '1.7',
    margin: 0,
    paddingLeft: '28px',
  },

  nextContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    padding: '14px 18px',
    backgroundColor: 'rgba(167,139,250,0.05)',
    borderRadius: '10px',
    border: '1px solid rgba(167,139,250,0.1)',
    marginBottom: '16px',
  },

  nextIcon: {
    fontSize: '16px',
    flexShrink: 0,
    marginTop: '1px',
  },

  nextLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#a78bfa',
    flexShrink: 0,
  },

  nextContent: {
    fontSize: '14px',
    color: '#e2e8f0',
    lineHeight: '1.6',
  },

  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },

  progressBar: {
    flex: 1,
    height: '4px',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: '2px',
    overflow: 'hidden',
  },

  progressFill: {
    width: '70%',
    height: '100%',
    background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
    borderRadius: '2px',
    animation: 'progressPulse 2s ease-in-out infinite',
  },

  progressLabel: {
    fontSize: '12px',
    color: '#64748b',
    flexShrink: 0,
  },

  // CTA
  ctaSection: {
    marginTop: '60px',
    textAlign: 'center',
    padding: '40px',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.08)',
  },

  ctaText: {
    fontSize: '18px',
    color: '#cbd5e1',
    marginBottom: '20px',
  },

  ctaButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },

  ctaBtn: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s',
    boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(96, 165, 250, 0.4)',
    },
  },

  ctaBtnSecondary: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'transparent',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all 0.3s',
    border: '2px solid rgba(255,255,255,0.2)',
    '&:hover': {
      borderColor: '#60a5fa',
      transform: 'translateY(-2px)',
    },
  },
}

export default LearnerLog