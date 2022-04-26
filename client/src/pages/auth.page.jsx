import Login from "../components/login.component";
import Signup from "../components/signup.component";
import {useState} from 'react'
import { Container } from '@mui/material'

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleAuth = () => setIsLoggedIn(!isLoggedIn);

	return (
		<div style={{ minHeight: '100vh', width: '100%', margin: '100px 0 0 0', display: "flex", justifyContent: 'center' }}>
            {isLoggedIn ? <Login toggleAuth={toggleAuth} /> : <Signup toggleAuth={toggleAuth} />}
		</div>
	);
};

export default Auth;
