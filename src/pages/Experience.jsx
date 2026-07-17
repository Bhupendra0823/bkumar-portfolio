import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  useTheme,
  alpha,
  Divider,

} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import WorkIcon from '@mui/icons-material/Work'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'

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

const Experience = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleCards, setVisibleCards] = useState([])
  const theme = useTheme()

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

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip
            label="CAREER"
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
            Experience
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: 2, textTransform: 'uppercase' }}>
            My professional journey so far
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

        {/* Stats */}
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
            { number: '2.5+', label: 'Years Experience', desc: 'Professional Work' },
            { number: '2', label: 'Companies', desc: 'Across Industries' },
            { number: '10+', label: 'Projects Delivered', desc: 'AI & Web Applications' },
          ].map((stat, index) => (
            <Box key={index} sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {stat.number}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>
                {stat.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                {stat.desc}
              </Typography>
            </Box>
          ))}
        </Stack>

        {/* Experience Cards */}
        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              sx={{
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === index
                  ? '0 20px 40px rgba(0,0,0,0.4)'
                  : '0 10px 30px rgba(0,0,0,0.2)',
                opacity: visibleCards.includes(index) ? 1 : 0,
                animation: visibleCards.includes(index) ? `${fadeInUp} 0.6s ease forwards` : 'none',
                animationDelay: `${index * 0.2}s`,
                overflow: 'visible',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 30,
                  left: { xs: -20, md: -56 },
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(96,165,250,0.3)',
                  zIndex: 2,
                  fontSize: 18,
                }}
              >
                {exp.icon}
              </Box>

              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                {/* Company & Role */}
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={{ xs: 1, sm: 2 }}
                  sx={{ mb: 2, flexWrap: 'wrap' }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {exp.company}
                  </Typography>
                  <Chip
                    label={exp.role}
                    size="small"
                    sx={{
                      color: 'primary.main',
                      bgcolor: alpha(theme.palette.primary.main, 0.15),
                      border: '1px solid rgba(96,165,250,0.2)',
                      fontWeight: 600,
                    }}
                  />
                </Stack>

                {/* Location & Duration */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 2 }} sx={{ mb: 2, color: 'text.secondary' }}>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <LocationOnIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2">{exp.location}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <CalendarTodayIcon sx={{ fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 500 }}>
                      {exp.duration}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Description */}
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
                  {exp.description}
                </Typography>

                {/* Full Description */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: alpha(theme.palette.common.white, 0.02),
                    borderRadius: 2,
                    borderLeft: '3px solid',
                    borderColor: 'primary.main',
                    mb: 3,
                  }}
                >
                  <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.8 }}>
                    {exp.longDescription}
                  </Typography>
                </Box>

                {/* Highlights */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
                    Key Responsibilities
                  </Typography>
                  {exp.highlights.map((highlight, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.5 }}>
                      <Typography sx={{ color: 'primary.main', fontWeight: 'bold' }}>▹</Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                        {highlight}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Achievements */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: alpha(theme.palette.secondary.main, 0.05),
                    borderRadius: 2,
                    border: '1px solid rgba(167,139,250,0.1)',
                    mb: 3,
                  }}
                >
                  <Typography variant="subtitle2" sx={{ color: 'secondary.main', mb: 1 }}>
                    🏆 Key Achievements
                  </Typography>
                  {exp.achievements.map((achievement, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.5 }}>
                      <Typography sx={{ color: 'secondary.main' }}>✦</Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                        {achievement}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Tech Stack */}
                <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 0.5 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, mr: 1 }}>
                    Tech Stack:
                  </Typography>
                  {exp.tech.map((tech, i) => (
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
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* CTA Section */}
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
            Want to know more about my experience or discuss opportunities?
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
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
              Let's Connect
            </Button>
            <Button
              variant="outlined"
              component="a"
              href="/resume"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
                borderColor: 'rgba(255,255,255,0.2)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s',
              }}
            >
              View Full Resume
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Experience