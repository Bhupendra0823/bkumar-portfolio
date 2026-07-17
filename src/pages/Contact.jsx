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
  TextField,
  useTheme,
  alpha,
  Divider,
  IconButton,
  Alert,
  CircularProgress,
} from '@mui/material'
import { styled, keyframes } from '@mui/material/styles'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import WorkIcon from '@mui/icons-material/Work'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}))

const Contact = () => {
  const [visible, setVisible] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const theme = useTheme()

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

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: 'Email',
      value: 'bkumar0823@gmail.com',
      link: 'mailto:bkumar0823@gmail.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      title: 'Phone',
      value: '+91 8864866262',
      link: 'tel:+918864866262',
    },
    {
      icon: <WorkIcon sx={{ fontSize: 32 }} />,
      title: 'Availability',
      value: 'Open to full-time roles, freelance work, and collaborations',
      link: null,
    },
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
        {/* Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 5,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Chip
            label="CONTACT"
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
            Let's Connect
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', letterSpacing: 2, textTransform: 'uppercase' }}>
            I'm open to opportunities and collaboration
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

        {/* Contact Info Grid */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{
            mb: 5,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.2s',
          }}
        >
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                textAlign: 'center',
                p: 2,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  bgcolor: alpha(theme.palette.common.white, 0.08),
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: alpha(theme.palette.primary.main, 0.15),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {info.icon}
                </Box>
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
                  {info.title}
                </Typography>
                {info.link ? (
                  <Typography
                    component="a"
                    href={info.link}
                    sx={{
                      color: 'primary.main',
                      textDecoration: 'none',
                      fontWeight: 500,
                      '&:hover': { color: 'primary.light' },
                    }}
                  >
                    {info.value}
                  </Typography>
                ) : (
                  <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.6 }}>
                    {info.value}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Form */}
        <Box
          sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.4s',
          }}
        >
          <Card sx={{ p: { xs: 3, sm: 4 } }}>
            <CardContent sx={{ p: { xs: 0, sm: 0 } }}>
              <form
                action="https://forminit.com/f/akkepdwa"
                method="POST"
                onSubmit={handleSubmit}
              >
                <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                  <Typography sx={{ fontSize: 24 }}>💬</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Send me a message
                  </Typography>
                </Stack>

                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: {
                      color: 'text.primary',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.1)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: 'text.secondary' },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={{ mb: 2 }}
                  InputProps={{
                    sx: {
                      color: 'text.primary',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.1)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: 'text.secondary' },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  placeholder="Tell me about your project, opportunity, or idea..."
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  sx={{ mb: 3 }}
                  InputProps={{
                    sx: {
                      color: 'text.primary',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.1)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: 'text.secondary' },
                  }}
                />

                <input type="hidden" name="_subject" value="New Portfolio Contact" />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={formStatus === 'sending' || formStatus === 'sent'}
                  sx={{
                    background: formStatus === 'sent'
                      ? 'linear-gradient(135deg, #4ade80, #22d3ee)'
                      : formStatus === 'error'
                      ? 'linear-gradient(135deg, #f87171, #ef4444)'
                      : 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 2,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(96,165,250,0.3)',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  {formStatus === 'sending' ? (
                    <CircularProgress size={24} sx={{ color: 'white' }} />
                  ) : formStatus === 'sent' ? (
                    '✅ Message Sent!'
                  ) : formStatus === 'error' ? (
                    '❌ Error! Try again'
                  ) : (
                    'Send Message →'
                  )}
                </Button>

                {formStatus === 'sent' && (
                  <Alert
                    icon={<CheckCircleIcon />}
                    severity="success"
                    sx={{ mt: 2 }}
                  >
                    Thank you! Your message has been sent successfully. I'll get back to you soon! 🎉
                  </Alert>
                )}

                {formStatus === 'error' && (
                  <Alert
                    icon={<ErrorIcon />}
                    severity="error"
                    sx={{ mt: 2 }}
                  >
                    Oops! Something went wrong. Please try again or contact me directly via email.
                  </Alert>
                )}
              </form>
            </CardContent>
          </Card>
        </Box>

        {/* Note */}
        <Box
          sx={{
            textAlign: 'center',
            my: 4,
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.6s',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            ❤️ Thanks for visiting my portfolio. I'm always open to feedback,
            ideas, and collaboration opportunities. ❤️
          </Typography>
        </Box>

        {/* Social Section */}
        <Box
          sx={{
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.7s',
          }}
        >
          <Typography variant="caption" sx={{ color: 'text.disabled', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 2 }}>
            Connect with me
          </Typography>
          <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
            <IconButton
              component="a"
              href="https://github.com/Bhupendra0823"
              target="_blank"
              sx={{
                border: '1px solid rgba(255,255,255,0.06)',
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                  transform: 'translateY(-3px)',
                },
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
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                  transform: 'translateY(-3px)',
                },
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
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://bkumar0823.space"
              target="_blank"
              sx={{
                border: '1px solid rgba(255,255,255,0.06)',
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.15),
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s',
              }}
            >
              <Typography>🌐</Typography>
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact