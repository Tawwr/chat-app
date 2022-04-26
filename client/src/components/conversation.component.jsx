import {
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Typography,
	Badge,
    Divider
} from '@mui/material';


const Conversation = ({user}) => {
    const handleClick = () => {
        console.log('clicked')
    }
	return (
		<>
			<ListItem
				alignItems='flex-start'
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
						badgeContent=' '
						variant='dot'
						color='secondary'
						overlap='circular'
					>
						<Avatar alt='Remy Sharp' src='' />
					</Badge>
				</ListItemAvatar>
				<ListItemText
					primary={
						<Typography variant='subtitle2' sx={{ fontWeight: '600' }}>
							{user.username}
						</Typography>
					}
					secondary={
						<Typography component='span' variant='body2' color='text.primary'>
							{user.lastMessage}
						</Typography>
					}
				/>
			</ListItem>
			<Divider variant='fullWidth' component='li' />
		</>
	);
};

export default Conversation;
