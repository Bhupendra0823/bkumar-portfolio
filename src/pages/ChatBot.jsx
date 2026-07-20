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

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // API Base URL
  const API_BASE = 'https://portfolio-rag-chatbot-lugp.onrender.com'

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

              <Tooltip title="Check status">
                <IconButton 
                  onClick={checkRagStatus}
                  sx={{ 
                    color: '#60a5fa',
                    '&:hover': {
                      backgroundColor: 'rgba(96,165,250,0.1)',
                    },
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