import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  Stack,
  Divider,
  useTheme,
  alpha,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import DescriptionIcon from '@mui/icons-material/Description'

const Footer = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: alpha(theme.palette.background.default, 0.95),
        borderTop: '1px solid rgba(255,255,255,0.05)',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'center' }}
          spacing={{ xs: 2, md: 0 }}
          sx={{ mb: 2 }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                B
              </span>
              hupendra
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Software Engineer | GenAI & Full Stack Developer
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems="center"
            sx={{ flexWrap: 'wrap' }}
          >
            <MuiLink
              href="https://github.com/Bhupendra0823"
              target="_blank"
              underline="none"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <GitHubIcon sx={{ fontSize: 16 }} />
              GitHub
            </MuiLink>
            <Typography variant="body2" sx={{ color: 'text.disabled', display: { xs: 'none', sm: 'block' }, alignContent:"center" }}>
              •
            </Typography>
            <MuiLink
              href="https://www.linkedin.com/in/bkumar0823/"
              target="_blank"
              underline="none"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <LinkedInIcon sx={{ fontSize: 16 }} />
              LinkedIn
            </MuiLink>
            <Typography variant="body2" sx={{ color: 'text.disabled', display: { xs: 'none', sm: 'block' }, alignContent:"center" }}>
              •
            </Typography>
            <MuiLink
              href="mailto:bkumar0823@gmail.com"
              underline="none"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <EmailIcon sx={{ fontSize: 16 }} />
              Email
            </MuiLink>
            <Typography variant="body2" sx={{ color: 'text.disabled', display: { xs: 'none', sm: 'block' }, alignContent:"center" }}>
              •
            </Typography>
            <MuiLink
              href="/resume"
              target="_blank"
              underline="none"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <DescriptionIcon sx={{ fontSize: 16 }} />
              Resume
            </MuiLink>
          </Stack>
        </Stack>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 2 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            © {new Date().getFullYear()} Bhupendra Kumar. All rights reserved.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              ❤️
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.disabled' }}>
              Built with React & Passion
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer