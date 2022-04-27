import { Grid, Paper } from '@mui/material'
import { DummyUser } from '../types'
import Message from './message.component'
import { useRef, useEffect } from 'react'
type MessageContainerProps = {
  currentChat: DummyUser
}
const MessagesContainer = ({ currentChat }: MessageContainerProps) => {
  const messagesWrapper = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (messagesWrapper.current) {
      messagesWrapper.current.scrollTop = messagesWrapper.current.scrollHeight
    }
  }, [currentChat])
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      justifyContent="flex-end"
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <div
        ref={messagesWrapper}
        style={{ overflowY: 'auto', padding: '0 30px' }}
      >
        {currentChat.messages.map((message, idx) => (
          <Message
            key={idx}
            message={message}
            user={currentChat}
            mobile={false}
          />
        ))}
      </div>
    </Grid>
  )
}

export default MessagesContainer
