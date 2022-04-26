import { Box } from '@mui/material';
import { Typography, Avatar, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

const Appbar = ({ title }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setScreenWidth(window.innerWidth);
		});
	}, [screenWidth]);
	return (
		<Box
			component='div'
			sx={{
				background: '#373759',
				height: {
					xs: '28px',
					md: '32px',
				},
				position: 'sticky',
				top: '0',
                left: '0',
				borderRadius: '0 0 35px 35px',
				padding: '15px',
				zIndex: '1',
			}}
		>
			{screenWidth > 768 ? (
				<Grid container >
					<Grid item>
						    <img src={Logo} alt='logo' width='30' />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="#fff">Connect</Typography>
                    </Grid>
				</Grid>
			) : (
                <Typography variant="h6" color="#fff">{title}</Typography>
			)}
		</Box>
	);
};

export default Appbar;
