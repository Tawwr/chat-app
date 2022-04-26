import UserList from '../components/userList.component';
import MessagesContainer from '../components/messagesContainer.component';
import ChatForm from '../components/chatForm.component';
import { Paper, Grid, Typography, Avatar,Box } from '@mui/material';
import {useState, useEffect} from 'react'

const Home = ({setCurrentChat, currentChat, onlineUsers }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth);
        });
    }, [screenWidth])


	return (
        <>
            {
                screenWidth > 768 ? (
                    <Grid
            container
			justifyContent='center'
			// alignItems='center'
			spacing={3}
			sx={{ minHeight: '100vh', width: '100%', margin: '50px 0 0' }}
		>
			<Grid item xs={12} md={3} sx={{ height: '80vh', width: '100%' }}>
				<Paper elevation={0} sx={{height: '100%'}} >
					<Typography
						component='div'
						color='#000'
						variant='h6'
						sx={{ marginLeft: '20px', fontWeight: '600' }}
					>
						Messages
					</Typography>
					<UserList setCurrentChat={setCurrentChat} onlineUsers={onlineUsers} />
				</Paper>
			</Grid>
			<Grid item md={6} sx={{ height: '80vh', width: '100%' }}>
				<Grid container spacing={2} sx={{ height: '80vh', width: '100%' }}>
					<Grid item xs={12} sx={{ height: '100%',  position: 'relative'}}>
                            <div style={{position: 'absolute', top: '18px', background: '#fff', width: '90%'}}>
                                <Avatar  sx={{display: 'inline-block'}}/>
                                <Typography component="span" variant="body1">{currentChat.username}</Typography>
                            </div>
						<Paper elevation={0}  sx={{height: '100%', overflowY: "auto",}} >

							<MessagesContainer currentChat={currentChat}/>
						</Paper>
					</Grid>
					<Grid item xs={12} sx={{ height: '20%' }}>
							<ChatForm />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
                ) : (
                    <div style={{minHeight: "100vh", margin: '50px 0 0' }}>
                    <Typography
						component='div'
						color='#000'
						variant='h6'
						sx={{ marginLeft: '20px', fontWeight: '600' }}
					>
						Messages
					</Typography>
					<UserList setCurrentChat={setCurrentChat} onlineUsers={onlineUsers} />
				</div>
                )
            }
        </>
        /* {
            screenWidth > 768 ? (
                <Grid
            container
			justifyContent='center'
			// alignItems='center'
			spacing={3}
			sx={{ minHeight: '100vh', width: '100%', margin: '50px 0 0' }}
		>
			<Grid item xs={12} md={3} sx={{ height: '80vh', width: '100%' }}>
				<Paper elevation={0} sx={{height: '100%'}} >
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
			<Grid item md={6} sx={{ height: '80vh', width: '100%' }}>
				<Grid container spacing={2} sx={{ height: '80vh', width: '100%' }}>
					<Grid item xs={12} sx={{ height: '100%',  position: 'relative'}}>
                            <div style={{position: 'absolute', top: '18px', background: '#fff', width: '90%'}}>
                                <Avatar sx={{display: 'inline-block'}}/>
                                <Typography component="span" variant="body1">Islam Sayed</Typography>
                            </div>
						<Paper elevation={0}  sx={{height: '100%', overflowY: "auto",}} >

							<MessagesContainer/>
						</Paper>
					</Grid>
					<Grid item xs={12} sx={{ height: '20%' }}>
							<ChatForm />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
            ) : (
                <UserList />
            )
        } */
		
	);
};

export default Home;
