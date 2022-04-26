import {List} from '@mui/material'
import Conversation from './conversation.component'
import { useState } from 'react'
const UserList = () => {
    const [onlineUsers, setOnlineUsers] = useState([
        {username: 'Islam', lastMessage: 'Fine! see you..'},
        {username: 'Islam', lastMessage: 'Fine! see you..'},
        {username: 'Islam', lastMessage: 'Fine! see you..'},
        {username: 'Islam', lastMessage: 'Fine! see you..'},
    ]);
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{onlineUsers?.map((user, idx) => (
				<Conversation key={idx} user={user} />
			))}
		</List>
	);
};

export default UserList;
