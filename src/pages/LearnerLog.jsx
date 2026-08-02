import React, { useEffect, useState } from 'react'
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
  Skeleton,
  Alert,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'

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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}))

const LearnerLog = () => {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleLogs, setVisibleLogs] = useState([])
  const theme = useTheme()

  useEffect(() => {
    fetch('https://logmanager-rag.onrender.com/logs')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch logs')
        return res.json()
      })
      .then(data => {
        setTimeout(() => {
          setLogs(data)
          setLoading(false)
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

  const displayLogs = logs.length > 0 ? logs : (error ? fallbackLogs : [])

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
            label="LEARNING"
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
            Learning Log
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: 2, textTransform: 'uppercase' }}>
            What I learn, why I learn it, and how I apply it
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
            { number: displayLogs.length, label: 'Learning Entries', desc: 'Continuous Growth' },
            { number: 'AI/ML', label: 'Focus Area', desc: 'Generative AI & Backend' },
            { number: '🚀', label: 'Always Learning', desc: 'Daily Progress' },
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

        {/* Loading State */}
        {loading && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                border: '3px solid rgba(255,255,255,0.1)',
                borderTop: '3px solid #60a5fa',
                borderRadius: '50%',
                animation: `${spin} 1s linear infinite`,
                mx: 'auto',
                mb: 3,
              }}
            />
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 1 }}>
              Loading learning logs...
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              This section is powered by a live backend service.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 3, flexWrap: 'wrap', gap: 1 }}>
              <Chip label="📚 Why I learn" sx={{ color: 'text.secondary', bgcolor: alpha(theme.palette.common.white, 0.05) }} />
              <Chip label="🔧 How I apply it" sx={{ color: 'text.secondary', bgcolor: alpha(theme.palette.common.white, 0.05) }} />
              <Chip label="💡 What I can build" sx={{ color: 'text.secondary', bgcolor: alpha(theme.palette.common.white, 0.05) }} />
              <Chip label="🎯 What's next" sx={{ color: 'text.secondary', bgcolor: alpha(theme.palette.common.white, 0.05) }} />
            </Stack>
          </Box>
        )}

        {/* Error Banner */}
        {!loading && error && displayLogs.length > 0 && (
          <Alert
            severity="warning"
            icon="⚠️"
            sx={{
              mb: 3,
              bgcolor: alpha(theme.palette.warning.main, 0.1),
              color: 'warning.main',
              '& .MuiAlert-icon': { color: 'warning.main' },
            }}
          >
            API unavailable - Showing sample learning logs
          </Alert>
        )}

        {/* Logs */}
        {!loading && (
          <Stack spacing={4}>
            {displayLogs.map((log, index) => (
              <Card
                key={log.id || index}
                sx={{
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index
                    ? '0 20px 40px rgba(0,0,0,0.4)'
                    : '0 10px 30px rgba(0,0,0,0.2)',
                  opacity: visibleLogs.includes(index) || logs.length === 0 ? 1 : 0,
                  animation: (visibleLogs.includes(index) || logs.length === 0) ? `${fadeInUp} 0.6s ease forwards` : 'none',
                  animationDelay: `${index * 0.15}s`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  {/* Header */}
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.15),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 22,
                      }}
                    >
                      📘
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {log.title}
                      </Typography>
                      <Chip
                        label={`#${index + 1}`}
                        size="small"
                        sx={{
                          color: 'text.disabled',
                          bgcolor: alpha(theme.palette.common.white, 0.05),
                          fontSize: '0.65rem',
                          height: 20,
                        }}
                      />
                    </Box>
                  </Stack>

                  {/* Why Section */}
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.common.white, 0.02),
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                      <Typography sx={{ fontSize: 16 }}>🤔</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        Why I Learn This
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7, pl: 3 }}>
                      {log.why}
                    </Typography>
                  </Box>

                  {/* Applied Section */}
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.common.white, 0.02),
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                      <Typography sx={{ fontSize: 16 }}>⚡</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        How I Applied It
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7, pl: 3 }}>
                      {log.applied}
                    </Typography>
                  </Box>

                  {/* Capability Section */}
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.common.white, 0.02),
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                      <Typography sx={{ fontSize: 16 }}>💪</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        What I Can Build Now
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.7, pl: 3 }}>
                      {log.capability}
                    </Typography>
                  </Box>

                  {/* Next Step */}
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: alpha(theme.palette.secondary.main, 0.05),
                      borderRadius: 2,
                      border: '1px solid rgba(167,139,250,0.1)',
                    }}
                  >
                    <Stack direction="row" alignItems="flex-start" spacing={1}>
                      <Typography sx={{ fontSize: 16 }}>🎯</Typography>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                          Next Step:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                          {log.next_step}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}

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
            Curious about my learning journey or want to discuss tech?
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
              href="/projects"
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
              View My Work
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default LearnerLog