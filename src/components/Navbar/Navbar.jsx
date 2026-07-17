import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Container,
  Avatar,
  Stack,
  alpha,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ViewResume from '../ViewResume/ViewResume'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false)
    }
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/projects', label: 'Projects', icon: <CodeIcon /> },
    { path: '/experience', label: 'Experience', icon: <WorkIcon /> },
    { path: '/learninglog', label: 'Learning', icon: <SchoolIcon /> },
    { path: '/contact', label: 'Contact', icon: <ContactMailIcon /> },
  ]

  const isActive = (path) => location.pathname === path

  const drawer = (
    <Box sx={{ width: 280, p: 2, height: '100%', bgcolor: '#0a0e27' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Bhupendra
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.path} disablePadding>
            <ListItemButton
              component={Link}
              to={link.path}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                bgcolor: isActive(link.path) ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                borderLeft: isActive(link.path) ? `3px solid ${theme.palette.primary.main}` : '3px solid transparent',
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                },
              }}
            >
              <ListItemIcon sx={{ color: isActive(link.path) ? 'primary.main' : 'text.secondary', minWidth: 40 }}>
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.label}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: isActive(link.path) ? 'primary.main' : 'text.primary',
                    fontWeight: isActive(link.path) ? 600 : 400,
                  },
                }}
              />
              {isActive(link.path) && (
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2, borderColor: 'rgba(255,255,255,0.06)' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <ViewResume />
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://github.com/Bhupendra0823"
            target="_blank"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            🐙
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/bkumar0823/"
            target="_blank"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            🔗
          </IconButton>
          <IconButton
            component="a"
            href="mailto:bkumar0823@gmail.com"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
          >
            ✉️
          </IconButton>
        </Stack>
        <Typography variant="caption" sx={{ color: 'text.disabled' }}>
          © {new Date().getFullYear()} Bhupendra Kumar
        </Typography>
      </Box>
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled
            ? alpha(theme.palette.background.default, 0.95)
            : alpha(theme.palette.background.default, 0.85),
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
          borderBottom: scrolled
            ? '1px solid rgba(255,255,255,0.05)'
            : '1px solid rgba(255,255,255,0.03)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 2 }, minHeight: 70 }}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                fontWeight: 700,
                textDecoration: 'none',
                color: 'text.primary',
                '& span': {
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                },
              }}
            >
              <span>B</span>hupendra
            </Typography>

            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    startIcon={link.icon}
                    sx={{
                      color: isActive(link.path) ? 'primary.main' : 'text.secondary',
                      fontWeight: isActive(link.path) ? 600 : 400,
                      borderBottom: isActive(link.path) ? '2px solid' : '2px solid transparent',
                      borderColor: 'primary.main',
                      borderRadius: 0,
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
                <ViewResume />
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: 'text.secondary' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar