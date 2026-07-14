import React from 'react'

const Projects = () => {
  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Projects</h1>
        <p style={styles.subHeading}>
          A glimpse of the work I have built and am currently building
        </p>

        <div style={styles.divider}></div>

        {/* Project Cards */}
        <div style={styles.projectsGrid}>

          {/* Project 1: AI-Powered Claim Audit Platform */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>Current Work</span>
            <h3 style={styles.projectTitle}>AI-Powered Claim Audit Platform</h3>
            <p style={styles.projectDesc}>
              Healthcare claim auditing platform with Agentic AI workflows using LangGraph 
              for automated evidence collection, claim analysis, and intelligent audit assistance. 
              Built with FastAPI backend and React.js frontend.
            </p>
            <p style={styles.tech}>Python · FastAPI · React.js · PostgreSQL · LangGraph · Agentic AI · LLMs</p>
          </div>

          {/* Project 2: Multi-Tenant Enterprise RAG Platform */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>Completed</span>
            <h3 style={styles.projectTitle}>Multi-Tenant Enterprise RAG Platform</h3>
            <p style={styles.projectDesc}>
              Enterprise RAG platform with multi-tenant architecture supporting Super Admin, 
              Tenant Admin, and End User roles. Configurable RAG pipelines with document ingestion, 
              vector search, and AI-powered Q&A.
            </p>
            <p style={styles.tech}>FastAPI · React.js · Python · LLMs · RAG · Vector Database · JWT</p>
          </div>

          {/* Project 3: Natural Language to Database Query Generator */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>POC</span>
            <h3 style={styles.projectTitle}>NL to Database Query Generator</h3>
            <p style={styles.projectDesc}>
              AI-powered system that converts natural language questions into structured database 
              queries using LLM reasoning with secure validation and execution mechanisms.
            </p>
            <p style={styles.tech}>Python · FastAPI · MongoDB · LLMs · Prompt Engineering</p>
          </div>

          {/* Project 4: AI Resume Analyser */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>POC</span>
            <h3 style={styles.projectTitle}>AI Resume Analyser & Job Matching</h3>
            <p style={styles.projectDesc}>
              AI-powered resume analysis system for skill extraction, improvement suggestions, 
              and semantic matching with job descriptions using embedding-based approaches.
            </p>
            <p style={styles.tech}>Python · LLMs · Prompt Engineering · Embedding</p>
          </div>

          {/* Project 5: Food Ordering Web App */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>Full-Stack</span>
            <h3 style={styles.projectTitle}>Food Ordering Web Application</h3>
            <p style={styles.projectDesc}>
              Full-stack restaurant management and food ordering application with customer 
              ordering workflows, kitchen management, authentication, and REST APIs.
            </p>
            <p style={styles.tech}>Angular · Node.js · Express.js · MongoDB</p>
          </div>

          {/* Project 6: Coming Soon */}
          <div style={styles.projectCard}>
            <span style={styles.badge}>🚧 In Progress</span>
            <h3 style={styles.projectTitle}>More Projects Coming Soon</h3>
            <p style={styles.projectDesc}>
              I am actively working on new ideas and improving existing ones. 
              Detailed case studies will be added here soon.
            </p>
            <p style={styles.tech}>Work in progress</p>
          </div>

        </div>

      </div>
    </div>
  )
}

const styles = {
  /* PAGE */
  page: {
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '20px',
    paddingTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },

  container: {
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
  },

  heading: {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#ffffff',
    letterSpacing: '1px',
  },

  subHeading: {
    fontSize: '18px',
    color: '#94a3b8',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontWeight: '300',
  },

  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: '#3b82f6',
    margin: '0 auto 30px',
    borderRadius: '2px',
  },

  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '25px',
    marginTop: '40px',
  },

  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: '14px',
    padding: '28px',
    textAlign: 'left',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    border: '1px solid rgba(255,255,255,0.05)',
  },

  badge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#2563eb',
    padding: '4px 12px',
    borderRadius: '20px',
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  projectTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#1f2933',
  },

  projectDesc: {
    fontSize: '14px',
    color: '#4b5563',
    lineHeight: '1.7',
    marginBottom: '14px',
  },

  tech: {
    fontSize: '12px',
    color: '#2563eb',
    fontWeight: '600',
    letterSpacing: '0.3px',
    lineHeight: '1.5',
  },
}

export default Projects