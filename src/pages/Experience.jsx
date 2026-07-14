import React, { useState, useEffect } from 'react'

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1])
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const experiences = [
    {
      id: 'tcs',
      company: 'Tata Consultancy Services',
      role: 'System Engineer',
      location: 'New Delhi',
      duration: 'December 2023 – Present',
      icon: '🏢',
      description: 'Working as a System Engineer with exposure to full-stack development, frontend technologies, and data-related concepts. Actively involved in learning enterprise-grade development practices.',
      longDescription: 'Designed and developed enterprise AI applications using Python, FastAPI, React.js, PostgreSQL, REST APIs, and Large Language Models (LLMs). Contributing to an AI-powered healthcare Claim Audit platform, developing backend services and AI workflows to automate evidence collection and streamline audit processes.',
      highlights: [
        'Developing Agentic AI workflows using LangGraph for intelligent task orchestration',
        'Building scalable FastAPI services integrating PostgreSQL and AI components',
        'Engineered configurable RAG pipelines supporting document ingestion and vector retrieval',
        'Developed multi-tenant AI platform with Super Admin, Tenant Admin, and End User roles',
        'Implemented secure authentication using JWT and Role-Based Access Control (RBAC)',
        'Collaborating with cross-functional teams following Agile methodologies'
      ],
      tech: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'LangGraph', 'LLMs', 'RAG', 'JWT'],
      achievements: [
        'Built AI-powered healthcare Claim Audit platform',
        'Developed Natural Language-to-Database Query Generator POC',
        'Created AI Resume Analyzer using prompt engineering'
      ]
    },
    {
      id: 'leasing-monk',
      company: 'Leasing Monk',
      role: 'Software Engineer',
      location: 'Noida',
      duration: 'November 2022 – February 2023',
      icon: '💻',
      description: 'Gained hands-on experience in full-stack web development, focusing primarily on React.js frontend development. Built responsive user interfaces and reusable components from Figma designs.',
      longDescription: 'Completed full-stack web development training focused on modern JavaScript technologies. Developed responsive UI components using React.js based on Figma designs. Collaborated with the development team to build reusable frontend components and improve application usability. Worked with REST APIs and frontend integration following component-based architecture.',
      highlights: [
        'Developed responsive UI components using React.js from Figma designs',
        'Built reusable frontend components for improved application usability',
        'Worked with REST APIs and frontend integration',
        'Followed component-based architecture for maintainability'
      ],
      tech: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Git'],
      achievements: [
        'Completed full-stack web development training',
        'Built reusable component library',
        'Improved application usability through responsive design'
      ]
    }
  ]

  return (
    <div style={styles.page}>
      {/* Background decoration */}
      <div style={styles.bgDecoration1}></div>
      <div style={styles.bgDecoration2}></div>
      
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.headerBadge}>CAREER</div>
          <h1 style={styles.heading}>
            <span style={styles.headingHighlight}>My</span> Experience
          </h1>
          <p style={styles.subHeading}>
            My professional journey so far
          </p>
          <div style={styles.divider}></div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>2.5+</span>
            <span style={styles.statLabel}>Years Experience</span>
            <span style={styles.statDesc}>Professional Work</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>2</span>
            <span style={styles.statLabel}>Companies</span>
            <span style={styles.statDesc}>Across Industries</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>10+</span>
            <span style={styles.statLabel}>Projects Delivered</span>
            <span style={styles.statDesc}>AI & Web Applications</span>
          </div>
        </div>

        {/* Timeline Line */}
        <div style={styles.timelineLine}></div>

        {/* Experience Cards */}
        <div style={styles.timeline}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              style={{
                ...styles.experienceCard,
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(0,0,0,0.4)' 
                  : '0 10px 30px rgba(0,0,0,0.2)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                animation: visibleCards.includes(index) ? 'fadeInUp 0.6s ease forwards' : 'none',
                animationDelay: `${index * 0.2}s`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card gradient overlay */}
              <div style={{
                ...styles.cardGlow,
                opacity: hoveredCard === index ? 0.6 : 0,
              }}></div>

              {/* Timeline Dot */}
              <div style={styles.timelineDot}>
                <span style={styles.timelineIcon}>{exp.icon}</span>
              </div>

              {/* Header */}
              <div style={styles.cardHeader}>
                <div style={styles.companyInfo}>
                  <h3 style={styles.companyName}>{exp.company}</h3>
                  <span style={styles.roleBadge}>{exp.role}</span>
                </div>
                <div style={styles.durationContainer}>
                  <span style={styles.locationIcon}>📍</span>
                  <span style={styles.location}>{exp.location}</span>
                  <span style={styles.durationDot}>•</span>
                  <span style={styles.duration}>{exp.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p style={styles.description}>
                {exp.description}
              </p>

              {/* Full Description */}
              <div style={styles.fullDescription}>
                <p style={styles.fullDescText}>{exp.longDescription}</p>
              </div>

              {/* Highlights */}
              <div style={styles.highlightsContainer}>
                <h4 style={styles.highlightsTitle}>Key Responsibilities</h4>
                {exp.highlights.map((highlight, i) => (
                  <div key={i} style={styles.highlightItem}>
                    <span style={styles.highlightDot}>▹</span>
                    <span style={styles.highlightText}>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div style={styles.achievementsContainer}>
                <h4 style={styles.achievementsTitle}>🏆 Key Achievements</h4>
                {exp.achievements.map((achievement, i) => (
                  <div key={i} style={styles.achievementItem}>
                    <span style={styles.achievementDot}>✦</span>
                    <span style={styles.achievementText}>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div style={styles.techContainer}>
                <span style={styles.techLabel}>Tech Stack:</span>
                {exp.tech.map((tech, i) => (
                  <span key={i} style={styles.techTag}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <p style={styles.ctaText}>
            Want to know more about my experience or discuss opportunities?
          </p>
          <div style={styles.ctaButtons}>
            <a href="/contact" style={styles.ctaBtn}>
              Let's Connect
            </a>
            <a href="/resume" style={styles.ctaBtnSecondary}>
              View Full Resume
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

  // TIMELINE
  timelineLine: {
    width: '2px',
    height: '40px',
    background: 'linear-gradient(180deg, #60a5fa, #a78bfa)',
    margin: '0 auto',
    opacity: 0.3,
  },

  timeline: {
    marginTop: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    position: 'relative',
  },

  // EXPERIENCE CARD
  experienceCard: {
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

  timelineDot: {
    position: 'absolute',
    top: '35px',
    left: '-56px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(96,165,250,0.3)',
    zIndex: 2,
  },

  timelineIcon: {
    fontSize: '18px',
  },

  cardHeader: {
    marginBottom: '16px',
  },

  companyInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px',
    flexWrap: 'wrap',
  },

  companyName: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#ffffff',
    margin: 0,
  },

  roleBadge: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#60a5fa',
    backgroundColor: 'rgba(96,165,250,0.15)',
    padding: '4px 14px',
    borderRadius: '20px',
    border: '1px solid rgba(96,165,250,0.2)',
    letterSpacing: '0.5px',
  },

  durationContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    fontSize: '14px',
    color: '#94a3b8',
  },

  locationIcon: {
    fontSize: '14px',
  },

  location: {
    color: '#94a3b8',
  },

  durationDot: {
    color: '#64748b',
  },

  duration: {
    color: '#60a5fa',
    fontWeight: '500',
  },

  description: {
    fontSize: '15px',
    color: '#cbd5e1',
    lineHeight: '1.7',
    marginBottom: '16px',
  },

  fullDescription: {
    marginBottom: '18px',
    padding: '16px 20px',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderRadius: '10px',
    borderLeft: '3px solid #60a5fa',
  },

  fullDescText: {
    fontSize: '14px',
    color: '#e2e8f0',
    lineHeight: '1.8',
    margin: 0,
  },

  highlightsContainer: {
    marginBottom: '20px',
  },

  highlightsTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#94a3b8',
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },

  highlightItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '6px',
    color: '#e2e8f0',
    fontSize: '14px',
  },

  highlightDot: {
    color: '#60a5fa',
    fontWeight: 'bold',
    lineHeight: '1.6',
  },

  highlightText: {
    lineHeight: '1.6',
  },

  achievementsContainer: {
    marginBottom: '20px',
    padding: '16px 20px',
    backgroundColor: 'rgba(167,139,250,0.05)',
    borderRadius: '10px',
    border: '1px solid rgba(167,139,250,0.1)',
  },

  achievementsTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#a78bfa',
    marginBottom: '10px',
  },

  achievementItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    marginBottom: '6px',
    color: '#e2e8f0',
    fontSize: '14px',
  },

  achievementDot: {
    color: '#a78bfa',
    fontWeight: 'bold',
    lineHeight: '1.6',
  },

  achievementText: {
    lineHeight: '1.6',
  },

  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '8px',
    paddingTop: '16px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },

  techLabel: {
    fontSize: '13px',
    color: '#94a3b8',
    fontWeight: '500',
    marginRight: '4px',
  },

  techTag: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#60a5fa',
    backgroundColor: 'rgba(96, 165, 250, 0.1)',
    padding: '4px 12px',
    borderRadius: '20px',
    border: '1px solid rgba(96, 165, 250, 0.15)',
    letterSpacing: '0.3px',
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

export default Experience