import { Grid, Typography} from '@mui/material';
import { useState } from 'react'
const Message = ({mobile, user, message}) => {
	return (
			<Grid item
				sx={{
					alignSelf: user.sameUser ? 'flex-end' : 'flex-start',
					width: mobile ? '60%' : '40%',
					minHeight: '20px',
					borderRadius: user.sameUser ? '10px 10px 0 10px' : '10px 10px 10px 0',
					background: user.sameUser ? '#6C89F4': '#03ccbb',
					padding: '10px',
					margin: '5px 0',
				}}
			>
				<Typography variant='body1' color='#fff'>
					{message.body}
				</Typography>
			</Grid>
		
	);
};

export default Message;
