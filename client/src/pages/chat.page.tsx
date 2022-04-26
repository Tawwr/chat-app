import { Avatar, Grid } from '@mui/material'
import { useEffect } from 'react'
import ChatForm from '../components/chatForm.component'
import MessagesContainer from '../components/messagesContainer.component'
import { User } from '../types'

type ChatProps = {
  currentChat: User
  setTitle: (title: string | JSX.Element) => void
}

const Chat = ({ currentChat, setTitle }: ChatProps) => {
  useEffect(() => {
    //setTitle(currentChat.username);
    setTitle(
      <Grid container>
        <Grid item sx={{ marginRight: '5px' }}>
          <Avatar />
        </Grid>
        <Grid item>{currentChat.username}</Grid>
      </Grid>
    )
  }, [])
  return (
    <div style={{ height: '100vh', width: '100%', margin: '100px 0 0' }}>
      <MessagesContainer currentChat={currentChat} />

      <ChatForm />
    </div>
  )
}

export default Chat
