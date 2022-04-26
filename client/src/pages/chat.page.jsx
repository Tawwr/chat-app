import MessagesContainer from '../components/messagesContainer.component';
import ChatForm from '../components/chatForm.component';
import { Grid, Typography, Avatar, Paper } from '@mui/material';
import { useState } from 'react'
const Chat = ({currentChat}) => {
   

	return (
		<div style={{ height: '100vh', width: '100%', margin: '100px 0 0' }}>
			<MessagesContainer currentChat={currentChat} />

			<ChatForm />
		</div>
	);
};

export default Chat;
