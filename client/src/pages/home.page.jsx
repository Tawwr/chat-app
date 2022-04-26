import MessagesContainer from '../components/messagesContainer.component';
import UserList from '../components/userList.component';
import ChatForm from '../components/chatForm.component';
import { Paper, Grid, Typography } from '@mui/material';
const Home = () => {
	return (
		<Grid
            container
			justifyContent='center'
			// alignItems='center'
			spacing={3}
			sx={{ minHeight: '100vh', width: '100%', margin: '50px 0 0' }}
		>
			<Grid item xs={12} md={3} sx={{ height: '80vh', width: '100%' }}>
				<Paper elevation={0}>
					<Typography
						component='div'
						color='#000'
						variant='h6'
						sx={{ marginLeft: '20px', fontWeight: '600' }}
					>
						Messages
					</Typography>
					<UserList />
				</Paper>
			</Grid>
			<Grid item xs={0} md={6} sx={{ height: '80vh', width: '100%' }}>
				<Grid container spacing={2} sx={{ height: '80vh', width: '100%' }}>
					<Grid item xs={12} sx={{ height: '100%' }}>
						<Paper elevation={0}>
							<MessagesContainer />
						</Paper>
					</Grid>
					<Grid item xs={12} sx={{ height: '20%' }}>
						<Paper elevation={0}>
							<ChatForm />
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Home;
