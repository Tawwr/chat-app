import {List} from '@mui/material'
import Conversation from './conversation.component'
import { useState } from 'react'
import { User } from '../types';

type UserListProps = {
	onlineUsers: User[];
	setCurrentChat: (user: User) => void;
}
const UserList = ({setCurrentChat, onlineUsers}:UserListProps) => {
    
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{onlineUsers?.map((user, idx) => (
				<Conversation key={idx} user={user} setCurrentChat={setCurrentChat} />
			))}
		</List>
	);
};

export default UserList;
