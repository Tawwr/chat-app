import { Grid, Typography} from '@mui/material';

const Message = ({mobile, text}) => {
	return (
		<Grid item>
			<div
				style={{
					alignSelf: 'flex-end',
					width: mobile ? '60%' : '40%',
					minHeight: '20px',
					borderRadius: '5px',
					borderBottomRightRadius: 'none',
					background: '#6C89F4',
					padding: '10px',
					margin: '5px 0',
				}}
			>
				<Typography variant='body1' color='#fff'>
					{text}
				</Typography>
			</div>
		</Grid>
	);
};

export default Message;
