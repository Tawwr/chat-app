import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import UserList from '../userList.component'

//TODO: Remove Dummy data

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
function MobileMessages() {
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
  </Grid>
  )
}

export default MobileMessages