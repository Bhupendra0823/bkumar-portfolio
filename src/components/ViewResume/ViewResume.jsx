import React from 'react'
import { Button } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description'

const ViewResume = () => {
  return (
    <Button
      component="a"
      href="https://bkumar-portfolio.onrender.com/resume"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      startIcon={<DescriptionIcon />}
      sx={{
        background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
        borderRadius: 2,
        px: 3,
        py: 1.5,
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '14px',
        letterSpacing: '0.5px',
        boxShadow: '0 4px 15px rgba(96,165,250,0.3)',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(96,165,250,0.4)',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      Resume
    </Button>
  )
}

export default ViewResume