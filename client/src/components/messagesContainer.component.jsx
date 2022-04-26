import { useState } from 'react';
import Message from './message.component';
import { Grid } from '@mui/material';
const MessagesContainer = ({currentChat}) => {

	return (
		<Grid
			container
			direction='column'
			/* alignItems="flex-end" */ sx={{ padding: '0 30px', width: '100%' }}
		>
			{currentChat.messages.map((message, idx) => (
				<Message key={idx} message={message} user={currentChat.username} mobile={false} />
			))}
		</Grid>
	);
};

export default MessagesContainer;
