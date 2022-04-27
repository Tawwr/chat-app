import { Avatar, Grid, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ChatForm from '../components/chatForm.component'
import MessagesContainer from '../components/messagesContainer.component'
import UserList from '../components/userList.component'
import { DummyUser } from '../types'

type HomeProps = {
  setCurrentChat: (user: DummyUser) => void
  currentChat: DummyUser
  onlineUsers: DummyUser[]
  setTitle: (title: string | JSX.Element) => void
}
const Home = ({
  setCurrentChat,
  currentChat,
  onlineUsers,
  setTitle,
}: HomeProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })
  }, [screenWidth])

  useEffect(() => {
    if (screenWidth < 992) {
      setTitle('Messages')
    }
  }, [])

  return (
    <div style={{ margin: '25px 0' }}>
      {screenWidth > 992   ? (
        <Grid
          container
          justifyContent="center"
          // alignItems='center'
          spacing={3}
          sx={{ width: '100%' }}
        >
          <Grid item xs={12} md={3} sx={{ height: '75vh', width: '100%' }}>
            <div
              style={{
                width: '100%',
                background: '#fff',
                borderRadius: '15px 15px 0 0',
              }}
            >
              <Typography
                component="div"
                color="#000"
                variant="h6"
                sx={{
                  marginLeft: '20px',
                  fontWeight: '600',
                  position: 'relative',
                  top: '0',
                  left: '0',
                  padding: '15px',
                }}
              >
                Messages
              </Typography>
            </div>
            <div style={{width: "100%", height: '100%', overflowY: 'auto' }}>
              <UserList
                setCurrentChat={setCurrentChat}
                onlineUsers={onlineUsers}
              />
            </div>
          </Grid>
          <Grid item sm={6} md={6} sx={{ height: '100%', width: '100%' }}>
            <Grid container spacing={2} sx={{ height: '80vh', width: '100%' }}>
              <Grid item xs={12} sx={{ height: '100%' }}>
                <div
                  style={{
                    background: '#fff',
                    padding: '10px',
                    borderRadius: '15px 15px 0 0',
                  }}
                >
                  <Grid container alignItems="center">
                    <Grid item sx={{marginRight: "10px"}}>
                      <Avatar sx={{ display: 'inline-block' }} />
                    </Grid>
                    <Grid item>
                      <Typography component="span" variant="body1">
                        {currentChat.username}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    height: '70vh',
                    overflowY: 'auto',
                    background: '#fff',
                    borderRadius: '0 0 15px 15px',
                  }}
                >
                  <MessagesContainer currentChat={currentChat} />
                </div>
              </Grid>
              <Grid item xs={12} sx={{ height: '20%' }}>
                <ChatForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} md={3} sx={{ height: '75vh', width: '100%' }}>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <UserList
              setCurrentChat={setCurrentChat}
              onlineUsers={onlineUsers}
            />
          </div>
        </Grid>
      )}
    </div>
  )
}

export default Home
