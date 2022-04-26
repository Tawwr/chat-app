import { useState } from 'react'
import Message from './message.component'
import { Grid } from '@mui/material'
import { User } from '../types'

type MessagesContainerProps = {
  currentChat: User
}
const MessagesContainer = ({ currentChat }: MessagesContainerProps) => {
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
