import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Stack,
  Button,
  Card,
  CardContent,
  useTheme,
  alpha,
  Divider,
  Link as MuiLink,
  IconButton,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import ViewResume from '../components/ViewResume/ViewResume.jsx'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
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

const Home = () => {
  const [visible, setVisible] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = 'Software Engineer | GenAI & Full Stack Developer'
  const theme = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)
    return () => clearInterval(typingInterval)
  }, [])

  const techStack = ['Python', 'FastAPI', 'React.js', 'LLMs', 'RAG', 'LangGraph', 'PostgreSQL', 'MongoDB']

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0e27, #1a1a3e, #2d1b4e)',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Background Decorations */}
      <Box
        sx={{
          position: 'absolute',
          top: -150,
          right: -150,
          width: { xs: 300, sm: 400, md: 500 },
          height: { xs: 300, sm: 400, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: { xs: 300, sm: 400, md: 500 },
          height: { xs: 300, sm: 400, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          animation: `${float} 8s ease-in-out infinite reverse`,
        }}
      />

      <Container maxWidth="md">
        <Card
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: { xs: 0, sm: 0 } }}>
            {/* Avatar */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  sx={{
                    width: { xs: 100, sm: 120, md: 140 },
                    height: { xs: 100, sm: 120, md: 140 },
                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                    fontSize: { xs: 40, sm: 50, md: 60 },
                    border: '2px solid rgba(255,255,255,0.1)',
                  }}
                >
                  👨‍💻
                </Avatar>
                <Box
                  sx={{
                    position: 'absolute',
                    top: -4,
                    left: -4,
                    right: -4,
                    bottom: -4,
                    borderRadius: '50%',
                    border: '3px solid transparent',
                    borderTopColor: '#60a5fa',
                    borderRightColor: '#a78bfa',
                    animation: `${spin} 3s linear infinite`,
                  }}
                />
              </Box>
            </Box>

            {/* Name */}
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 1 }}>
              Bhupendra Kumar
            </Typography>

            {/* Typing Effect */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3, minHeight: 36 }}>
              <Typography sx={{ color: 'primary.main', fontSize: 20, fontWeight: 'bold', animation: `${pulse} 1s ease-in-out infinite` }}>
                ▸
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: { xs: 14, sm: 16, md: 18 }, letterSpacing: 1 }}>
                {typedText}
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    color: 'primary.main',
                    fontSize: 20,
                    fontWeight: 'bold',
                    animation: `${pulse} 0.7s ease-in-out infinite`,
                    ml: 0.5,
                  }}
                >
                  |
                </Typography>
              </Typography>
            </Box>

            <Divider
              sx={{
                width: 80,
                mx: 'auto',
                my: 3,
                background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                height: 4,
                borderRadius: 4,
              }}
            />

            {/* Summary */}
            <Box sx={{ maxWidth: 700, mx: 'auto', mb: 3 }}>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2 }}>
                Software Engineer with <strong style={{ color: theme.palette.primary.main }}>2.5+ years</strong> of experience in designing
                and developing scalable backend systems, <strong style={{ color: theme.palette.primary.main }}>AI-powered applications</strong>,
                and full-stack web solutions.
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
                Experienced in <strong style={{ color: theme.palette.primary.main }}>Python, FastAPI, React.js, REST APIs, MongoDB,
                and Large Language Models (LLMs)</strong> with hands-on experience building
                <strong style={{ color: theme.palette.primary.main }}> Retrieval-Augmented Generation (RAG)</strong> systems,
                multi-tenant AI platforms, and enterprise web applications.
              </Typography>
            </Box>

            {/* Tech Stack */}
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 3 }}>
              {techStack.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    color: 'primary.main',
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                    border: '1px solid rgba(96,165,250,0.15)',
                    '&:hover': {
                      bgcolor: alpha(theme.palette.primary.main, 0.2),
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </Stack>

            {/* Status */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 3 }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#10b981', animation: `${pulse} 1.5s ease-in-out infinite` }} />
              <Typography sx={{ color: 'text.secondary' }}>Open to opportunities</Typography>
            </Box>

            {/* WIP Banner */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                px: 2,
                py: 1.5,
                bgcolor: alpha('#fbbf24', 0.08),
                borderRadius: 2,
                border: '1px solid rgba(251, 191, 36, 0.15)',
                mb: 3,
                flexWrap: 'wrap',
              }}
            >
              <Typography variant="body2">🚧</Typography>
              <Typography variant="body2" sx={{ color: '#fbbf24', fontWeight: 500 }}>
                Portfolio under construction — more content coming soon!
              </Typography>
            </Box>

            {/* Resume Button */}
            <ViewResume />

            {/* Quick Links */}
            <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap', mb: 3 }}>
              <MuiLink href="/projects" underline="none" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, display: 'flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5 }}>
                💻 Projects
              </MuiLink>
              <Typography sx={{ color: 'text.disabled' }}>•</Typography>
              <MuiLink href="/experience" underline="none" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, display: 'flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5 }}>
                💼 Experience
              </MuiLink>
              <Typography sx={{ color: 'text.disabled' }}>•</Typography>
              <MuiLink href="/learninglog" underline="none" sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' }, display: 'flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5 }}>
                📚 Learning
              </MuiLink>
            </Stack>

            {/* Social Links */}
            <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
              <IconButton
                component="a"
                href="https://github.com/Bhupendra0823"
                target="_blank"
                sx={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.15), transform: 'translateY(-3px)' },
                  transition: 'all 0.3s',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/bkumar0823/"
                target="_blank"
                sx={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.15), transform: 'translateY(-3px)' },
                  transition: 'all 0.3s',
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="mailto:bkumar0823@gmail.com"
                sx={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.15), transform: 'translateY(-3px)' },
                  transition: 'all 0.3s',
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                component={MuiLink}
                href="/contact"
                sx={{
                  border: '1px solid rgba(255,255,255,0.06)',
                  '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.15), transform: 'translateY(-3px)' },
                  transition: 'all 0.3s',
                }}
              >
                <PhoneIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Home