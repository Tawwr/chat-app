import { Avatar, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ChatForm from '../chatForm.component'
import MessagesContainer from '../messagesContainer.component'
import UserList from '../userList.component'

//TODO: Remove Dummy data
const currentChat = {
  username: 'Islam',
  messages: [
    { body: 'Fine! see you..', createdAt: new Date() },
    { body: 'I am Islam', createdAt: new Date() },
  ],
  sameUser: true,
}

const onlineUsers = [
  {
    username: 'Islam',
    messages: [
      { body: 'Fine! see you..', createdAt: new Date() },
      { body: 'I am Islam', createdAt: new Date() },
    ],
    sameUser: true,
  },
  {
    username: 'Islam 2',
    messages: [
      { body: 'Fine! see you..', createdAt: new Date() },
      { body: 'I am Islam', createdAt: new Date() },
    ],
    sameUser: true,
  },
]

function DesktopComponent() {
  return (
    <Grid
      container
      justifyContent="center"
      // alignItems='center'
      spacing={3}
      sx={{ minHeight: '100vh', width: '100%', margin: '50px 0 0' }}
    >
      <Grid item xs={12} md={3} sx={{ height: '80vh', width: '100%' }}>
        <Paper elevation={0} sx={{ height: '100%' }}>
          <Typography
            component="div"
            color="#000"
            variant="h6"
            sx={{ marginLeft: '20px', fontWeight: '600' }}
          >
            Messages
          </Typography>
          <UserList
            setCurrentChat={(currentChat) => {}}
            onlineUsers={onlineUsers}
          />
        </Paper>
      </Grid>
      <Grid item md={6} sx={{ height: '80vh', width: '100%' }}>
        <Grid container spacing={2} sx={{ height: '80vh', width: '100%' }}>
          <Grid item xs={12} sx={{ height: '100%', position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '18px',
                background: '#fff',
                width: '90%',
              }}
            >
              <Avatar sx={{ display: 'inline-block' }} />
              <Typography component="span" variant="body1">
                {currentChat.username}
              </Typography>
            </div>
            <Paper elevation={0} sx={{ height: '100%', overflowY: 'auto' }}>
              <MessagesContainer currentChat={currentChat} />
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ height: '20%' }}>
            <ChatForm />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DesktopComponent
