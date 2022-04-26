import {
  Avatar,
  Badge,
  Divider,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DummyUser } from '../types'

type ConversationProps = {
  user: DummyUser
  setCurrentChat: (user: DummyUser) => void
}
const Conversation = ({ user, setCurrentChat }: ConversationProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const navigate = useNavigate()

  const handleClick = () => {
    setCurrentChat(user)
    console.log(user)
    screenWidth < 768 && navigate('/chat')
  }
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          borderLeft: '10px solid #6C89F4',
          '&:hover': { cursor: 'pointer', background: '#f4f5fb' },
        }}
        onClick={handleClick}
      >
        <ListItemAvatar>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            badgeContent=" "
            variant="dot"
            color="secondary"
            overlap="circular"
          >
            <Avatar alt="Remy Sharp" src="" />
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant="subtitle2" sx={{ fontWeight: '600' }}>
              {user.username}
            </Typography>
          }
          secondary={
            <Grid container justifyContent="space-between" component="span">
              <Grid item>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`${user.messages[user.messages.length - 1].body.substring(
                    0,
                    15
                  )}...`}
                </Typography>
              </Grid>
              <Grid item>
                {moment(
                  user.messages[user.messages.length - 1].createdAt
                ).format('h:mm a')}
              </Grid>
            </Grid>
          }
        />
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </>
  )
}

export default Conversation
