import { Grid } from '@mui/material'
import { DummyUser } from '../types'
import Message from './message.component'

type MessageContainerProps = {
  currentChat: DummyUser
}
const MessagesContainer = ({ currentChat }: MessageContainerProps) => {
  return (
    <Grid
      container
      direction="column"
      /* alignItems="flex-end" */ sx={{ padding: '0 30px', width: '100%' }}
    >
      {currentChat.messages.map((message, idx) => (
        <Message
          key={idx}
          message={message}
          user={currentChat}
          mobile={false}
        />
      ))}
    </Grid>
  )
}

export default MessagesContainer
