import React, { useState } from 'react'

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 'claim-audit',
      title: 'AI-Powered Claim Audit Platform',
      category: 'Current Work',
      categoryColor: '#3b82f6',
      description: 'Healthcare claim auditing platform with Agentic AI workflows using LangGraph for automated evidence collection, claim analysis, and intelligent audit assistance.',
      longDescription: 'This enterprise-grade platform revolutionizes healthcare claim auditing by leveraging Agentic AI to automate evidence collection, analyze claim patterns, and provide intelligent audit assistance. The system uses LangGraph to orchestrate complex AI workflows, enabling auditors to investigate claims more efficiently.',
      tech: ['Python', 'FastAPI', 'React.js', 'PostgreSQL', 'LangGraph', 'Agentic AI', 'LLMs'],
      icon: '🏥',
      highlights: [
        'Agentic AI workflows with LangGraph orchestration',
        'Automated evidence collection and claim analysis',
        'Real-time audit assistance and recommendations'
      ],
      link: '#'
    },
    {
      id: 'rag-platform',
      title: 'Multi-Tenant Enterprise RAG Platform',
      category: 'Current Work',
      categoryColor: '#3b82f6',
      description: 'Enterprise RAG platform with multi-tenant architecture supporting Super Admin, Tenant Admin, and End User roles with configurable AI workflows.',
      longDescription: 'A sophisticated Retrieval-Augmented Generation platform designed for enterprise-scale deployment. Features include tenant isolation, configurable RAG pipelines, document ingestion, vector search integration, and AI-powered question answering across multiple organizations.',
      tech: ['FastAPI', 'React.js', 'Python', 'LLMs', 'RAG', 'Vector Database', 'JWT'],
      icon: '🏢',
      highlights: [
        'Multi-tenant architecture with role-based access',
        'Configurable RAG pipelines and prompt customization',
        'Secure tenant isolation and data privacy'
      ],
      link: '#'
    },
    {
      id: 'nl-query',
      title: 'NL to Database Query Generator',
      category: 'POC',
      categoryColor: '#8b5cf6',
      description: 'AI-powered system that converts natural language questions into structured database queries using LLM reasoning with secure validation and execution.',
      longDescription: 'This proof-of-concept demonstrates the power of LLMs in bridging natural language and database querying. Users can ask questions in plain English, and the system intelligently generates and validates MongoDB queries before execution, making data access accessible to non-technical users.',
      tech: ['Python', 'FastAPI', 'MongoDB', 'LLMs', 'Prompt Engineering'],
      icon: '🗄️',
      highlights: [
        'Natural language to database query conversion',
        'Secure validation before query execution',
        'Prompt engineering for accurate query generation'
      ],
      link: '#'
    },
    {
      id: 'resume-analyser',
      title: 'AI Resume Analyser & Job Matching',
      category: 'POC',
      categoryColor: '#8b5cf6',
      description: 'AI-powered resume analysis system for skill extraction, improvement suggestions, and semantic matching with job descriptions.',
      longDescription: 'An intelligent system that leverages LLMs and embedding techniques to analyze resumes, extract key skills, provide improvement suggestions, and semantically match candidates with job descriptions. This tool streamlines the hiring process by automating candidate screening.',
      tech: ['Python', 'LLMs', 'Prompt Engineering', 'Embedding'],
      icon: '📄',
      highlights: [
        'Automated skill extraction and analysis',
        'Semantic matching with job descriptions',
        'Personalized improvement recommendations'
      ],
      link: '#'
    },
    {
      id: 'food-ordering',
      title: 'Food Ordering Web Application',
      category: 'Full-Stack',
      categoryColor: '#10b981',
      description: 'Full-stack restaurant management and food ordering application with customer ordering workflows, kitchen management, and REST APIs.',
      longDescription: 'A complete restaurant management solution built with the MEAN stack. Features include customer ordering workflows, real-time kitchen management, authentication, order tracking, and a modular architecture designed for scalability and maintainability.',
      tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB'],
      icon: '🍽️',
      highlights: [
        'Complete order management lifecycle',
        'Real-time kitchen management system',
        'Scalable modular architecture'
      ],
      link: '#'
    },
    {
      id: 'coming-soon',
      title: 'More Projects Coming Soon',
      category: 'In Progress',
      categoryColor: '#f59e0b',
      description: 'I am actively working on new ideas and improving existing ones. Detailed case studies will be added here soon.',
      longDescription: 'Currently exploring innovative solutions in AI, cloud computing, and full-stack development. I\'m working on exciting new projects that push the boundaries of what\'s possible with modern technology stacks.',
      tech: ['🚧', 'Work in progress'],
      icon: '🚀',
      highlights: [
        'Exploring new AI applications',
        'Building innovative solutions',
        'Continuous learning and improvement'
      ],
      link: '#'
    }
  ]

  const getCategoryBadge = (category, color) => (
    <span style={{
      ...styles.badge,
      backgroundColor: color,
    }}>
      {category}
    </span>
  )

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <h1 style={styles.heading}>
            <span style={styles.headingHighlight}>My</span> Projects
          </h1>
          <p style={styles.subHeading}>
            A glimpse of the work I have built and am currently building
          </p>
          <div style={styles.divider}></div>
        </div>

        {/* Stats Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>5+</span>
            <span style={styles.statLabel}>Projects Built</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>3</span>
            <span style={styles.statLabel}>Active Projects</span>
          </div>
          <div style={styles.statItem}>
            <span style={styles.statNumber}>6</span>
            <span style={styles.statLabel}>Technologies</span>
          </div>
        </div>

        {/* Project Cards */}
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                ...styles.projectCard,
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index 
                  ? '0 20px 40px rgba(0,0,0,0.4)' 
                  : '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Icon */}
              <div style={styles.iconContainer}>
                <span style={styles.projectIcon}>{project.icon}</span>
              </div>

              {/* Category Badge */}
              {getCategoryBadge(project.category, project.categoryColor)}

              {/* Title */}
              <h3 style={styles.projectTitle}>{project.title}</h3>

              {/* Description */}
              <p style={styles.projectDesc}>
                {expandedProject === index ? project.longDescription : project.description}
              </p>

              {/* Read More Toggle */}
              {project.longDescription && (
                <button 
                  style={styles.readMoreBtn}
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                >
                  {expandedProject === index ? 'Show Less' : 'Read More'}
                </button>
              )}

              {/* Highlights */}
              <div style={styles.highlightsContainer}>
                {project.highlights.map((highlight, i) => (
                  <div key={i} style={styles.highlightItem}>
                    <span style={styles.highlightDot}>▹</span>
                    <span style={styles.highlightText}>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div style={styles.techContainer}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={styles.techTag}>{tech}</span>
                ))}
              </div>

              {/* View Project Button */}
              {project.link !== '#' && (
                <a href={project.link} style={styles.viewBtn}>
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={styles.ctaSection}>
          <p style={styles.ctaText}>
            Want to collaborate or learn more about my projects?
          </p>
          <a href="/contact" style={styles.ctaBtn}>
            Get in Touch
          </a>
        </div>
      </div>
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

  container: {
    maxWidth: '1300px',
    width: '100%',
  },

  // HEADER
  headerSection: {
    textAlign: 'center',
    marginBottom: '40px',
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
    gap: '50px',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },

  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },

  statNumber: {
    fontSize: '32px',
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
  },

  // GRID
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  },

  // PROJECT CARD
  projectCard: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'left',
    border: '1px solid rgba(255,255,255,0.08)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'default',
  },

  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: 'rgba(96, 165, 250, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    fontSize: '24px',
  },

  projectIcon: {
    fontSize: '28px',
  },

  badge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '600',
    color: '#ffffff',
    padding: '4px 14px',
    borderRadius: '20px',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  projectTitle: {
    fontSize: '22px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#ffffff',
    lineHeight: '1.3',
  },

  projectDesc: {
    fontSize: '15px',
    color: '#cbd5e1',
    lineHeight: '1.8',
    marginBottom: '12px',
  },

  readMoreBtn: {
    background: 'none',
    border: 'none',
    color: '#60a5fa',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '4px 0',
    marginBottom: '14px',
    transition: 'color 0.2s',
    fontFamily: 'inherit',
    '&:hover': {
      color: '#a78bfa',
    },
  },

  highlightsContainer: {
    marginBottom: '18px',
    paddingLeft: '4px',
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

  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
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

  viewBtn: {
    display: 'inline-block',
    color: '#ffffff',
    backgroundColor: '#3b82f6',
    padding: '10px 24px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#2563eb',
      transform: 'translateX(4px)',
    },
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

  ctaBtn: {
    display: 'inline-block',
    padding: '14px 40px',
    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(96, 165, 250, 0.4)',
    },
  },
}

export default Projects