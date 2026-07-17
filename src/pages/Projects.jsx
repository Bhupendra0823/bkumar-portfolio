import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Grid,
  useTheme,
  alpha,
  Divider,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}))

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const theme = useTheme()

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

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0e27, #1a1a3e, #2d1b4e)',
        pt: { xs: 10, md: 12 },
        pb: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* Header - Centered */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip
            label="Hands-on Projects"
            size="small"
            sx={{
              color: 'primary.main',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
              border: '1px solid rgba(96,165,250,0.2)',
              letterSpacing: 2,
              fontWeight: 600,
              mb: 2,
            }}
          />
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
            Projects
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: 2, textTransform: 'uppercase' }}>
            A glimpse of the work I have built and am currently building
          </Typography>
          <Divider
            sx={{
              width: 80,
              mx: 'auto',
              mt: 2,
              background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
              height: 4,
              borderRadius: 4,
            }}
          />
        </Box>

        {/* Stats - Centered */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 6 }}
          sx={{
            justifyContent: 'center',
            mb: 5,
            p: 3,
            bgcolor: alpha(theme.palette.common.white, 0.03),
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {[
            { number: '5+', label: 'Projects Built' },
            { number: '3', label: 'Active Projects' },
            { number: '6', label: 'Technologies' },
          ].map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.number}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Projects Grid - All cards same width and height */}
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'center',
          }}
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              key={project.id}
              sx={{
                display: 'flex',
                width: '100%',
                maxWidth: { xs: '100%', sm: '50%', md: '33.333%' },
                flexBasis: { xs: '100%', sm: '50%', md: '33.333%' },
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index
                    ? '0 20px 40px rgba(0,0,0,0.4)'
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  cursor: 'default',
                  animation: `${fadeInUp} 0.6s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  height: '100%',
                  minHeight: 420, // Minimum height for consistency
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                    height: '100%',
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.main, 0.15),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      fontSize: 28,
                      flexShrink: 0,
                    }}
                  >
                    {project.icon}
                  </Box>

                  {/* Category Badge */}
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      bgcolor: project.categoryColor,
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                      mb: 1.5,
                      alignSelf: 'flex-start',
                      flexShrink: 0,
                    }}
                  />

                  {/* Title */}
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, flexShrink: 0 }}>
                    {project.title}
                  </Typography>

                  {/* Description - Flexible to grow */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.8,
                      flex: '1 1 auto',
                      mb: 1,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: expandedProject === index ? 'none' : 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {expandedProject === index ? project.longDescription : project.description}
                  </Typography>

                  {/* Read More Toggle */}
                  {project.longDescription && (
                    <Button
                      size="small"
                      onClick={() => toggleExpand(index)}
                      endIcon={expandedProject === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      sx={{
                        color: 'primary.main',
                        textTransform: 'none',
                        fontWeight: 600,
                        '&:hover': { color: 'secondary.main' },
                        flexShrink: 0,
                        alignSelf: 'flex-start',
                        p: 0,
                        minWidth: 'auto',
                        mb: 1,
                      }}
                    >
                      {expandedProject === index ? 'Show Less' : 'Read More'}
                    </Button>
                  )}

                  {/* Highlights */}
                  <Box sx={{ mt: 1, mb: 2, flexShrink: 0 }}>
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.5 }}>
                        <Typography sx={{ color: 'primary.main', fontWeight: 'bold', flexShrink: 0 }}>▹</Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6, fontSize: '0.875rem' }}>
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Spacer to push content to bottom */}
                  <Box sx={{ flex: 1 }} />

                  {/* Tech Stack - At the bottom */}
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      flexWrap: 'wrap',
                      gap: 0.5,
                      mb: 2,
                      flexShrink: 0,
                    }}
                  >
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        sx={{
                          color: 'primary.main',
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                          border: '1px solid rgba(96,165,250,0.15)',
                          fontSize: '0.65rem',
                          height: 24,
                        }}
                      />
                    ))}
                    {project.tech.length > 4 && (
                      <Chip
                        label={`+${project.tech.length - 4}`}
                        size="small"
                        sx={{
                          color: 'text.secondary',
                          bgcolor: alpha(theme.palette.common.white, 0.05),
                          fontSize: '0.65rem',
                          height: 24,
                        }}
                      />
                    )}
                  </Stack>

                  {/* View Button - At the bottom */}
                  {project.link !== '#' && (
                    <Button
                      variant="contained"
                      size="small"
                      component="a"
                      href={project.link}
                      sx={{
                        bgcolor: '#3b82f6',
                        textTransform: 'none',
                        fontWeight: 600,
                        alignSelf: 'flex-start',
                        flexShrink: 0,
                        '&:hover': {
                          bgcolor: '#2563eb',
                          transform: 'translateX(4px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      View Project →
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section - Centered */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, sm: 4, md: 5 },
            textAlign: 'center',
            bgcolor: alpha(theme.palette.common.white, 0.03),
            borderRadius: 3,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 2 }}>
            Want to collaborate or learn more about my projects?
          </Typography>
          <Button
            variant="contained"
            component="a"
            href="/contact"
            sx={{
              background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
              px: 4,
              py: 1.5,
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 2,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(96,165,250,0.4)',
              },
              transition: 'all 0.3s',
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Projects