import MessagesContainer from '../components/messagesContainer.component'
import ChatForm from '../components/chatForm.component'
import { useEffect } from 'react'
import { Avatar, Grid } from '@mui/material'
import { DummyUser } from '../types'

type ChatProps = {
  currentChat: DummyUser
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
    <div style={{ width: '100%' }}>
      <div style={{height: '80vh'}}>
        <MessagesContainer currentChat={currentChat} />
      </div>
      <ChatForm />
    </div>
  )
}

export default Chat
