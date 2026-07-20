import React from 'react'
import {
  Box,
  Modal,
  IconButton,
  Typography,
  Fade,
  Tooltip,
  Button,
} from '@mui/material'
import { Close as CloseIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import ChatbotPage from '../../pages/ChatBot'

const ChatbotModal = ({ open, onClose }) => {
  const navigate = useNavigate()

  const handleOpenInNewTab = () => {
    onClose()
    window.open('/chatbot', '_blank')
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Fade in={open}>
        <Box sx={{
          width: '95%',
          maxWidth: '1100px',
          height: '90vh',
          maxHeight: '850px',
          backgroundColor: 'transparent',
          borderRadius: '24px',
          position: 'relative',
          overflow: 'hidden',
          outline: 'none',
        }}>
          {/* Modal Header */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 20px',
            background: 'linear-gradient(180deg, rgba(10,14,39,0.95) 0%, transparent 100%)',
            backdropFilter: 'blur(10px)',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                🤖 AI Chatbot
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: '#64748b',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '2px 10px',
                  borderRadius: '12px',
                  fontSize: '10px',
                  fontWeight: 500,
                }}
              >
                Ask about my experience
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title="Open in new tab">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={handleOpenInNewTab}
                  startIcon={<OpenInNewIcon sx={{ fontSize: 18 }} />}
                  sx={{
                    color: '#94a3b8',
                    borderColor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      borderColor: '#60a5fa',
                      color: '#60a5fa',
                      backgroundColor: 'rgba(96,165,250,0.05)',
                    },
                    textTransform: 'none',
                    fontSize: '12px',
                    borderRadius: '8px',
                  }}
                >
                  New Tab
                </Button>
              </Tooltip>

              <IconButton
                onClick={onClose}
                sx={{
                  color: '#94a3b8',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  '&:hover': {
                    backgroundColor: 'rgba(239,68,68,0.2)',
                    color: '#ef4444',
                  },
                  width: 36,
                  height: 36,
                }}
              >
                <CloseIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>

          {/* Chatbot Content */}
          <Box sx={{
            height: '100%',
            overflow: 'hidden',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #0a0e27, #1a1a3e, #2d1b4e)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            <ChatbotPage isModal={true} />
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ChatbotModal