import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
  CircularProgress,
  Chip,
  IconButton,
  Fade,
  Slide,
  Alert,
  Snackbar,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  InputAdornment,
  IconButton as MuiIconButton,
} from '@mui/material'
import {
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
  Delete as DeleteIcon,
  AutoAwesome as AIIcon,
  Description as DocIcon,
  Settings as SettingsIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  FileCopy as CopyIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
} from '@mui/icons-material'
import { styled } from '@mui/material/styles'

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ChatContainer = styled(Paper)(({ theme, isModal }) => ({
  height: isModal ? 'calc(100vh - 140px)' : 'calc(100vh - 200px)',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: '1px solid rgba(255,255,255,0.08)',
  overflow: 'hidden',
  position: 'relative',
}))

const MessagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: '20px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(96,165,250,0.3)',
    borderRadius: '3px',
    '&:hover': {
      background: 'rgba(96,165,250,0.5)',
    },
  },
}))

const MessageBubble = styled(Box)(({ theme, isUser }) => ({
  display: 'flex',
  flexDirection: isUser ? 'row-reverse' : 'row',
  gap: '12px',
  maxWidth: '85%',
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  animation: 'fadeInUp 0.4s ease forwards',
}))

const MessageContent = styled(Paper)(({ theme, isUser }) => ({
  padding: '14px 18px',
  borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
  background: isUser 
    ? 'linear-gradient(135deg, #3b82f6, #7c3aed)'
    : 'rgba(255,255,255,0.08)',
  color: isUser ? '#ffffff' : '#e2e8f0',
  border: isUser ? 'none' : '1px solid rgba(255,255,255,0.06)',
  position: 'relative',
  transition: 'all 0.3s',
  wordBreak: 'break-word',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: isUser 
      ? '0 8px 25px rgba(59,130,246,0.3)'
      : '0 8px 25px rgba(0,0,0,0.2)',
  },
}))

const AvatarWrapper = styled(Box)(({ theme, isUser }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: isUser 
    ? 'linear-gradient(135deg, #3b82f6, #7c3aed)'
    : 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  flexShrink: 0,
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
}))

const InputContainer = styled(Box)(({ theme }) => ({
  padding: '16px 24px',
  borderTop: '1px solid rgba(255,255,255,0.06)',
  background: 'rgba(255,255,255,0.02)',
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-end',
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  flex: 1,
  '& .MuiOutlinedInput-root': {
    borderRadius: '14px',
    background: 'rgba(255,255,255,0.03)',
    color: '#e2e8f0',
    '& fieldset': {
      borderColor: 'rgba(255,255,255,0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(96,165,250,0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#60a5fa',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#60a5fa',
  },
}))

const SendButton = styled(Button)(({ theme }) => ({
  borderRadius: '14px',
  minWidth: '50px',
  height: '56px',
  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
  color: '#ffffff',
  '&:hover': {
    background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
    transform: 'scale(1.02)',
    boxShadow: '0 8px 25px rgba(96,165,250,0.3)',
  },
  '&:disabled': {
    background: 'rgba(255,255,255,0.1)',
    color: '#64748b',
  },
}))

const StatusIndicator = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px',
  borderRadius: '20px',
  background: 'rgba(255,255,255,0.03)',
}))

const StatusDot = styled(Box)(({ theme, status }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  background: status === 'ready' ? '#10b981' : '#f59e0b',
  animation: status === 'ready' ? 'pulse 1.5s ease-in-out infinite' : 'none',
}))

// ============================================================================
// SETTINGS MODAL
// ============================================================================

const SettingsModal = ({ open, onClose, onUpdate, currentStatus }) => {
  const [credentials, setCredentials] = useState({
    aws_access_key_id: '',
    aws_secret_access_key: '',
    aws_session_token: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' })

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setCredentials({
        aws_access_key_id: '',
        aws_secret_access_key: '',
        aws_session_token: '',
      })
      setError('')
      setSuccess(false)
    }
  }, [open])

  const handleChange = (field) => (event) => {
    setCredentials({
      ...credentials,
      [field]: event.target.value,
    })
    setError('')
    setSuccess(false)
  }

  const handleSubmit = async () => {
    // Validate
    if (!credentials.aws_access_key_id.trim()) {
      setError('AWS Access Key ID is required')
      return
    }
    if (!credentials.aws_secret_access_key.trim()) {
      setError('AWS Secret Access Key is required')
      return
    }

    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const result = await onUpdate(credentials)
      if (result.success) {
        setSuccess(true)
        setSnackbar({
          open: true,
          message: '✅ AWS credentials updated successfully!',
          severity: 'success',
        })
        // ✅ FIXED: Remove the reload and close modal after success
        setTimeout(() => {
          onClose()
        }, 1500)
      } else {
        setError(result.error || 'Failed to update credentials')
      }
    } catch (err) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' })

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(10,14,39,0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          color: '#e2e8f0',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        },
      }}
    >
      <DialogTitle sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        pb: 2,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <SettingsIcon sx={{ color: '#60a5fa' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            AWS Credentials Settings
          </Typography>
        </Box>
        <IconButton
          onClick={onClose}
          sx={{
            color: '#64748b',
            '&:hover': {
              color: '#e2e8f0',
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        {/* Current Status */}
        {currentStatus && (
          <Box sx={{ 
            p: 2, 
            mb: 3, 
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}>
            <Typography variant="caption" sx={{ color: '#64748b', display: 'block', mb: 1 }}>
              Current Configuration
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                Region: <span style={{ color: '#60a5fa' }}>{currentStatus.region || 'Not set'}</span>
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                LLM Model: <span style={{ color: '#60a5fa' }}>{currentStatus.llm_model || 'Not set'}</span>
              </Typography>
              <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                Embedding Model: <span style={{ color: '#60a5fa' }}>{currentStatus.embedding_model || 'Not set'}</span>
              </Typography>
              {currentStatus.access_key_masked && (
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Access Key: <span style={{ color: '#10b981' }}>{currentStatus.access_key_masked}</span>
                </Typography>
              )}
            </Box>
          </Box>
        )}

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', my: 2 }} />

        {/* Info Message */}
        <Alert 
          severity="info" 
          sx={{ 
            mb: 3,
            backgroundColor: 'rgba(96,165,250,0.1)',
            color: '#93c5fd',
            '& .MuiAlert-icon': { color: '#60a5fa' },
            borderRadius: '12px',
          }}
        >
          <Typography variant="body2">
            Update your AWS credentials here. This is useful for AWS Sandbox credentials that expire every hour.
            No need to redeploy your application!
          </Typography>
        </Alert>

        {/* Form Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          <TextField
            label="AWS Access Key ID"
            value={credentials.aws_access_key_id}
            onChange={handleChange('aws_access_key_id')}
            fullWidth
            disabled={loading}
            placeholder="AKIA..."
            variant="outlined"
            InputProps={{
              sx: {
                color: '#e2e8f0',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(96,165,250,0.3)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#60a5fa',
                },
              },
            }}
            InputLabelProps={{
              sx: { color: '#64748b' },
            }}
          />

          <TextField
            label="AWS Secret Access Key"
            value={credentials.aws_secret_access_key}
            onChange={handleChange('aws_secret_access_key')}
            fullWidth
            disabled={loading}
            placeholder="..."
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              sx: {
                color: '#e2e8f0',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(96,165,250,0.3)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#60a5fa',
                },
              },
              endAdornment: (
                <InputAdornment position="end">
                  <MuiIconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    sx={{ color: '#64748b' }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </MuiIconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              sx: { color: '#64748b' },
            }}
          />

          <TextField
            label="AWS Session Token (Optional)"
            value={credentials.aws_session_token}
            onChange={handleChange('aws_session_token')}
            fullWidth
            disabled={loading}
            placeholder="For temporary credentials only..."
            variant="outlined"
            helperText="Only required for temporary credentials (like AWS Sandbox)"
            InputProps={{
              sx: {
                color: '#e2e8f0',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(96,165,250,0.3)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#60a5fa',
                },
              },
            }}
            InputLabelProps={{
              sx: { color: '#64748b' },
            }}
            FormHelperTextProps={{
              sx: { color: '#64748b' },
            }}
          />
        </Box>

        {/* Error Message */}
        {error && (
          <Alert 
            severity="error" 
            sx={{ 
              mt: 2,
              backgroundColor: 'rgba(239,68,68,0.1)',
              color: '#fca5a5',
              '& .MuiAlert-icon': { color: '#ef4444' },
              borderRadius: '12px',
            }}
          >
            {error}
          </Alert>
        )}

        {/* Success Message */}
        {success && (
          <Alert 
            severity="success" 
            sx={{ 
              mt: 2,
              backgroundColor: 'rgba(16,185,129,0.1)',
              color: '#6ee7b7',
              '& .MuiAlert-icon': { color: '#10b981' },
              borderRadius: '12px',
            }}
          >
            Credentials updated successfully! The page will refresh automatically.
          </Alert>
        )}
      </DialogContent>

      <DialogActions sx={{ 
        p: 2.5, 
        borderTop: '1px solid rgba(255,255,255,0.06)',
        gap: 1,
      }}>
        <Button
          onClick={onClose}
          disabled={loading}
          sx={{
            color: '#94a3b8',
            '&:hover': {
              color: '#e2e8f0',
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={loading}
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
            color: '#ffffff',
            borderRadius: '12px',
            px: 3,
            '&:hover': {
              background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
              transform: 'scale(1.02)',
            },
            '&:disabled': {
              background: 'rgba(255,255,255,0.1)',
              color: '#64748b',
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: '#ffffff' }} />
          ) : (
            'Update Credentials'
          )}
        </Button>
      </DialogActions>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ 
            backgroundColor: 'rgba(10,14,39,0.95)',
            color: '#e2e8f0',
            '& .MuiAlert-icon': {
              color: snackbar.severity === 'error' ? '#ef4444' : '#60a5fa',
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Dialog>
  )
}

// ============================================================================
// TYPING EFFECT COMPONENT
// ============================================================================

const TypingAnimation = () => (
  <Box sx={{ display: 'flex', gap: '6px', padding: '4px 0' }}>
    <Box sx={{ 
      width: '8px', 
      height: '8px', 
      borderRadius: '50%', 
      background: '#60a5fa',
      animation: 'bounce 1.4s ease-in-out infinite',
      animationDelay: '0s',
    }} />
    <Box sx={{ 
      width: '8px', 
      height: '8px', 
      borderRadius: '50%', 
      background: '#60a5fa',
      animation: 'bounce 1.4s ease-in-out infinite',
      animationDelay: '0.2s',
    }} />
    <Box sx={{ 
      width: '8px', 
      height: '8px', 
      borderRadius: '50%', 
      background: '#60a5fa',
      animation: 'bounce 1.4s ease-in-out infinite',
      animationDelay: '0.4s',
    }} />
  </Box>
)

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const ChatbotPage = ({ isModal = false }) => {
  // State
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [ragStatus, setRagStatus] = useState(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [initializing, setInitializing] = useState(false)
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' })
  const [copied, setCopied] = useState(false)
  const [showContext, setShowContext] = useState({})
  
  // Settings modal state
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [updatingCredentials, setUpdatingCredentials] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // API Base URL
  const API_BASE = 'https://logmanager-rag.onrender.com'

  // ==========================================================================
  // EFFECTS
  // ==========================================================================

  useEffect(() => {
    checkRagStatus()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // ==========================================================================
  // API CALLS
  // ==========================================================================

  const checkRagStatus = async () => {
    try {
      const response = await fetch(`${API_BASE}/rag-status`)
      const data = await response.json()
      setRagStatus(data)
      setIsInitialized(data.is_initialized)
    } catch (error) {
      console.error('Status check failed:', error)
    }
  }

  const initializeRAG = async () => {
    setInitializing(true)

    try {
      const response = await fetch(`${API_BASE}/rag-init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Initialization failed')
      }

      const data = await response.json()
      setIsInitialized(true)
      setRagStatus({ ...ragStatus, is_initialized: true })

      setSnackbar({
        open: true,
        message: `✅ RAG initialized! Loaded ${data.chunk_count} chunks`,
        severity: 'success',
      })

      setMessages([
        {
          id: Date.now(),
          text: `✅ RAG system initialized with document: ${data.document_name} (${data.chunk_count} chunks)`,
          isUser: false,
          isSystem: true,
        },
      ])

    } catch (error) {
      setSnackbar({
        open: true,
        message: `Failed to initialize: ${error.message}`,
        severity: 'error',
      })
    } finally {
      setInitializing(false)
    }
  }

  const updateAWSCredentials = async (credentials) => {
  setUpdatingCredentials(true)
  
  try {
    const response = await fetch(`${API_BASE}/aws/credentials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.detail || 'Failed to update credentials')
    }

    const data = await response.json()
    
    // ✅ FIXED: Update status without reloading
    // Refresh the RAG status to reflect new credentials
    await checkRagStatus()
    
    // Also update the ragStatus state with the new credentials
    setRagStatus(prev => ({
      ...prev,
      aws_credentials: {
        ...prev?.aws_credentials,
        region: data.region || prev?.aws_credentials?.region,
        llm_model: data.llm_model || prev?.aws_credentials?.llm_model,
        embedding_model: data.embedding_model || prev?.aws_credentials?.embedding_model,
        access_key_masked: credentials.aws_access_key_id.slice(0, 4) + '...' + credentials.aws_access_key_id.slice(-4),
      }
    }))
    
    setSnackbar({
      open: true,
      message: '✅ AWS credentials updated successfully!',
      severity: 'success',
    })

    // Add system message
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: `🔄 AWS credentials updated. LLM: ${data.llm_model || 'Default'}, Embedding: ${data.embedding_model || 'Default'}`,
      isUser: false,
      isSystem: true,
    }])

    return { success: true, data }

  } catch (error) {
    setSnackbar({
      open: true,
      message: `Failed to update credentials: ${error.message}`,
      severity: 'error',
    })
    return { success: false, error: error.message }
  } finally {
    setUpdatingCredentials(false)
  }
}

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    if (!isInitialized) {
      setSnackbar({
        open: true,
        message: 'Please initialize the RAG system first.',
        severity: 'warning',
      })
      return
    }

    const userMessage = input.trim()
    setInput('')
    setLoading(true)

    const userMsg = {
      id: Date.now(),
      text: userMessage,
      isUser: true,
    }
    setMessages(prev => [...prev, userMsg])

    const loadingMsg = {
      id: Date.now() + 1,
      text: '',
      isUser: false,
      isLoading: true,
    }
    setMessages(prev => [...prev, loadingMsg])

    try {
      const response = await fetch(`${API_BASE}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: userMessage,
          k: 8
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to get response')
      }

      const data = await response.json()

      setMessages(prev => prev.filter(msg => !msg.isLoading))

      const botMsg = {
        id: Date.now(),
        text: data.answer,
        isUser: false,
        context: data.context,
        timestamp: new Date().toLocaleTimeString(),
      }
      setMessages(prev => [...prev, botMsg])

    } catch (error) {
      setMessages(prev => prev.filter(msg => !msg.isLoading))
      setSnackbar({
        open: true,
        message: `Error: ${error.message}`,
        severity: 'error',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const clearChat = () => {
    setMessages([])
    setShowContext({})
    setSnackbar({
      open: true,
      message: 'Chat cleared',
      severity: 'info',
    })
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleContext = (id) => {
    setShowContext(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false })
  }

  const openSettings = () => {
    setSettingsOpen(true)
  }

  const closeSettings = () => {
    setSettingsOpen(false)
  }

  // ==========================================================================
  // RENDER
  // ==========================================================================

  return (
    <Box sx={{ 
      minHeight: isModal ? '100%' : '100vh',
      padding: isModal ? '12px' : '20px',
      paddingTop: isModal ? '56px' : '90px',
      height: isModal ? '100%' : 'auto',
      overflow: isModal ? 'hidden' : 'auto',
      background: 'transparent',
    }}>
      <Container maxWidth="lg" sx={{ height: isModal ? '100%' : 'auto', p: isModal ? 0 : undefined }}>
        {/* Header - Hide in modal */}
        {!isModal && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3,
            flexWrap: 'wrap',
            gap: 2,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AIIcon sx={{ fontSize: 32, color: '#60a5fa' }} />
              <Box>
                <Typography variant="h4" sx={{ 
                  color: '#ffffff',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  RAG Chatbot
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Ask questions about my experience using AI
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
              <StatusIndicator>
                <StatusDot status={isInitialized ? 'ready' : 'idle'} />
                <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                  {isInitialized ? 'Ready' : 'Not Initialized'}
                </Typography>
              </StatusIndicator>

              {!isInitialized ? (
                <Button
                  variant="contained"
                  onClick={initializeRAG}
                  disabled={initializing}
                  sx={{
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #60a5fa, #a78bfa)',
                    color: '#ffffff',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                    },
                    '&:disabled': {
                      background: 'rgba(255,255,255,0.1)',
                      color: '#64748b',
                    },
                  }}
                >
                  {initializing ? (
                    <CircularProgress size={20} sx={{ color: '#ffffff' }} />
                  ) : (
                    <>
                      <DocIcon sx={{ mr: 1 }} />
                      Initialize RAG
                    </>
                  )}
                </Button>
              ) : (
                <Tooltip title="Clear chat">
                  <IconButton 
                    onClick={clearChat}
                    sx={{ 
                      color: '#94a3b8',
                      '&:hover': {
                        color: '#ef4444',
                        backgroundColor: 'rgba(239,68,68,0.1)',
                      },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title="AWS Settings">
                <IconButton 
                  onClick={openSettings}
                  sx={{ 
                    color: '#60a5fa',
                    '&:hover': {
                      backgroundColor: 'rgba(96,165,250,0.1)',
                      transform: 'rotate(90deg)',
                    },
                    transition: 'transform 0.3s',
                  }}
                >
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        )}

        {/* Chat Container */}
        <ChatContainer elevation={0} isModal={isModal}>
          {/* Messages */}
          <MessagesContainer>
            {messages.length === 0 ? (
              <Box sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#64748b',
                textAlign: 'center',
                gap: 2,
                px: 2,
              }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%',
                  background: 'rgba(96,165,250,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <AIIcon sx={{ fontSize: 40, color: '#60a5fa' }} />
                </Box>
                <Typography variant="h6" sx={{ color: '#94a3b8' }}>
                  Ask me anything about Bhupendra
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', maxWidth: 400 }}>
                  {isInitialized 
                    ? 'Type your question below and I\'ll search through the resume to find the answer.'
                    : 'Please initialize the RAG system first by clicking the "Initialize RAG" button.'
                  }
                </Typography>
                {isInitialized && (
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
                    <Chip 
                      label="What are the key skills?" 
                      size="small" 
                      sx={{ 
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      }}
                      onClick={() => setInput('What are the key skills mentioned?')}
                    />
                    <Chip 
                      label="List all projects" 
                      size="small" 
                      sx={{ 
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      }}
                      onClick={() => setInput('List all projects from the resume')}
                    />
                    <Chip 
                      label="Work experience" 
                      size="small" 
                      sx={{ 
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      }}
                      onClick={() => setInput('What work experience is mentioned?')}
                    />
                    <Chip 
                      label="Education" 
                      size="small" 
                      sx={{ 
                        background: 'rgba(255,255,255,0.05)',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        '&:hover': { background: 'rgba(255,255,255,0.1)' },
                      }}
                      onClick={() => setInput('What is the educational background?')}
                    />
                  </Box>
                )}
              </Box>
            ) : (
              messages.map((msg) => (
                <Slide 
                  key={msg.id} 
                  direction={msg.isUser ? 'left' : 'right'} 
                  in={true}
                  timeout={300}
                >
                  <MessageBubble isUser={msg.isUser}>
                    <AvatarWrapper isUser={msg.isUser}>
                      {msg.isUser ? (
                        <PersonIcon sx={{ color: '#ffffff', fontSize: 22 }} />
                      ) : (
                        <BotIcon sx={{ color: '#ffffff', fontSize: 22 }} />
                      )}
                    </AvatarWrapper>

                    <Box sx={{ maxWidth: '100%' }}>
                      <MessageContent isUser={msg.isUser}>
                        {msg.isLoading ? (
                          <TypingAnimation />
                        ) : msg.isSystem ? (
                          <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                            {msg.text}
                          </Typography>
                        ) : (
                          <>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>
                              {msg.text}
                            </Typography>
                            
                            {msg.context && msg.context.length > 0 && (
                              <Box sx={{ mt: 2 }}>
                                <Button
                                  size="small"
                                  onClick={() => toggleContext(msg.id)}
                                  sx={{
                                    color: '#60a5fa',
                                    '&:hover': { color: '#93c5fd' },
                                  }}
                                >
                                  {showContext[msg.id] ? (
                                    <>
                                      <ExpandLessIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                      Hide sources
                                    </>
                                  ) : (
                                    <>
                                      <ExpandMoreIcon sx={{ fontSize: 16, mr: 0.5 }} />
                                      Show sources ({msg.context.length})
                                    </>
                                  )}
                                </Button>
                                
                                <Fade in={showContext[msg.id]}>
                                  <Box sx={{ 
                                    mt: 1, 
                                    p: 2, 
                                    borderRadius: '8px',
                                    background: 'rgba(0,0,0,0.2)',
                                    maxHeight: 200,
                                    overflow: 'auto',
                                  }}>
                                    {msg.context.map((doc, idx) => (
                                      <Box key={idx} sx={{ 
                                        mb: 1, 
                                        p: 1, 
                                        borderRadius: '4px',
                                        background: 'rgba(255,255,255,0.03)',
                                        fontSize: '12px',
                                        color: '#94a3b8',
                                      }}>
                                        <Typography variant="caption" sx={{ color: '#60a5fa' }}>
                                          Source {idx + 1} (Score: {(doc.score * 100).toFixed(1)}%)
                                        </Typography>
                                        <Typography variant="caption" sx={{ display: 'block', mt: 0.5, color: '#94a3b8' }}>
                                          {doc.content.slice(0, 150)}...
                                        </Typography>
                                      </Box>
                                    ))}
                                  </Box>
                                </Fade>
                              </Box>
                            )}
                          </>
                        )}
                      </MessageContent>

                      {!msg.isUser && !msg.isLoading && !msg.isSystem && msg.text && (
                        <Box sx={{ display: 'flex', gap: 1, mt: 0.5, ml: 1 }}>
                          <Tooltip title="Copy response">
                            <IconButton 
                              size="small" 
                              onClick={() => copyToClipboard(msg.text)}
                              sx={{ 
                                color: '#64748b',
                                '&:hover': { color: '#60a5fa' },
                                padding: '2px',
                              }}
                            >
                              {copied ? <CheckIcon sx={{ fontSize: 16 }} /> : <CopyIcon sx={{ fontSize: 16 }} />}
                            </IconButton>
                          </Tooltip>
                        </Box>
                      )}
                    </Box>
                  </MessageBubble>
                </Slide>
              ))
            )}
            <div ref={messagesEndRef} />
          </MessagesContainer>

          {/* Input Area */}
          <InputContainer>
            <StyledTextField
              inputRef={inputRef}
              placeholder={isInitialized ? "Ask a question about Bhupendra..." : "Initialize RAG first..."}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={!isInitialized || loading}
              multiline
              maxRows={4}
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
                    {loading && <CircularProgress size={20} sx={{ color: '#60a5fa' }} />}
                  </Box>
                ),
              }}
            />
            <SendButton
              variant="contained"
              onClick={sendMessage}
              disabled={!input.trim() || !isInitialized || loading}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: '#ffffff' }} />
              ) : (
                <SendIcon />
              )}
            </SendButton>
          </InputContainer>
        </ChatContainer>

        {/* Footer Info - Hide in modal */}
        {!isModal && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mt: 2,
            px: 1,
            flexWrap: 'wrap',
            gap: 1,
          }}>
            <Typography variant="caption" sx={{ color: '#475569' }}>
              💡 Powered by AWS Bedrock & LangGraph
            </Typography>
            <Typography variant="caption" sx={{ color: '#475569' }}>
              {isInitialized && ragStatus && (
                <>📄 {ragStatus.document_name} • {ragStatus.chunk_count} chunks</>
              )}
            </Typography>
          </Box>
        )}

        {/* Settings Modal */}
        <SettingsModal
          open={settingsOpen}
          onClose={closeSettings}
          onUpdate={updateAWSCredentials}
          currentStatus={ragStatus?.aws_credentials || null}
        />

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ 
              backgroundColor: 'rgba(10,14,39,0.95)',
              color: '#e2e8f0',
              '& .MuiAlert-icon': {
                color: snackbar.severity === 'error' ? '#ef4444' : '#60a5fa',
              },
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>

      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }

          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
            }
            40% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </Box>
  )
}

export default ChatbotPage