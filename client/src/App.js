import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';
import Chat from './pages/chat.page';
import Auth from './pages/auth.page';
import Appbar from './components/appbar.component';
import Footer from './components/footer.component';
import { useState } from 'react';
function App() {
	const [appbarTitle, setAppbarTitle] = useState('');
	const [onlineUsers, setOnlineUsers] = useState([
		{
			username: 'Islam',
			messages: [
				{ body: 'Fine! see you..', createdAt: new Date() },
				{ body: 'I am Islam', createdAt: new Date() },
			],
			sameUser: true,
		},
		{
			username: 'Ali',
			messages: [
				{ body: 'Fine! see you..', createdAt: new Date() },
				{ body: 'I am Ali', createdAt: new Date() },
			],
			sameUser: false,
		},
		{
			username: 'Ahmed',
			messages: [
				{ body: 'Fine! see you..', createdAt: new Date() },
				{ body: 'I am Ahmed', createdAt: new Date() },
			],
			sameUser: false,
		},
		{
			username: 'Mahmoud',
			messages: [
				{ body: 'Fine! see you..', createdAt: new Date() },
				{ body: 'I am Mahmoud', createdAt: new Date() },
			],
			sameUser: false,
		},
	]);
	const [currentChat, setCurrentChat] = useState(onlineUsers[0]);
	const handleSetCurrentChat = user => {
		setCurrentChat(user);
	};
	const handleSetTitle = title => {
		setAppbarTitle(title);
	};
	return (
		<div className='App'>
			<Appbar title={appbarTitle} />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							setCurrentChat={handleSetCurrentChat}
							currentChat={currentChat}
							onlineUsers={onlineUsers}
							setTitle={handleSetTitle}
						/>
					}
				/>
				<Route path='/auth' element={<Auth setTitle={handleSetTitle} />} />
				<Route path='/chat' element={<Chat currentChat={currentChat} setTitle={handleSetTitle} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
