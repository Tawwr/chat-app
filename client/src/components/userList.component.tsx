import { List } from '@mui/material'
import { DummyUser } from '../types'
import Conversation from './conversation.component'

type UserListProps = {
  setCurrentChat: (user: DummyUser) => void
  onlineUsers: DummyUser[]
}
const UserList = ({ setCurrentChat, onlineUsers }: UserListProps) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {onlineUsers?.map((user, idx) => (
        <Conversation key={idx} user={user} setCurrentChat={setCurrentChat} />
      ))}
    </List>
  )
}

export default UserList
