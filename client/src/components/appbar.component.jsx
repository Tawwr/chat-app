import { Box } from '@mui/material';
const Appbar = () => {
	return (
			<Box
				component='div'
				sx={{
					background: '#373759',
					width: '100%',
					height: {
						xs: '28px',
						md: '32px',
					},
					position: 'fixed',
					top: '0',
					borderRadius: '0 0 35px 35px',
					padding: '10px',
				}}
			>
                
            </Box>
	);
};

export default Appbar;
