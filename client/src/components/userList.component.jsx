import {List} from '@mui/material'
import Conversation from './conversation.component'
import { useState } from 'react'
const UserList = ({setCurrentChat, onlineUsers}) => {
    
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{onlineUsers?.map((user, idx) => (
				<Conversation key={idx} user={user} setCurrentChat={setCurrentChat} />
			))}
		</List>
	);
};

export default UserList;
