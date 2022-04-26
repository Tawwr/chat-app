import Login from '../components/login.component';
import Signup from '../components/signup.component';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

const Auth = ({ setTitle }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

	useEffect(() => {
		setTitle(isLoggedIn ? 'Login' : 'Signup');
	}, [isLoggedIn]);

	return (
		<div
			style={{
				minHeight: '100vh',
				width: '100%',
				margin: '100px 0 0 0',
				display: 'flex',
				justifyContent: 'center',
				background: '#f4f5fb',
			}}
		>
			{isLoggedIn ? (
				<Login toggleAuth={toggleAuth} />
			) : (
				<Signup toggleAuth={toggleAuth} />
			)}
		</div>
	);
};

export default Auth;
