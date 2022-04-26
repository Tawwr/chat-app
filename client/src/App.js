import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.page';
import Chat from './pages/chat.page';
import Auth from './pages/auth.page';
import Appbar from './components/appbar.component';
import Footer from './components/footer.component';
import { useState } from 'react';
function App() {
	const [onlineUsers, setOnlineUsers] = useState([
		{
			username: 'Islam',
			messages: [{body: 'Fine! see you..', createdAt: new Date()}, {body: 'I am Islam', createdAt: new Date()}],
			sameUser: true,
		},
		{
			username: 'Ali',
			messages: [{body: 'Fine! see you..', createdAt: new Date()}, {body: 'I am Ali', createdAt: new Date()}],
			sameUser: false,
		},
		{
			username: 'Ahmed',
			messages: [{body: 'Fine! see you..', createdAt: new Date()}, {body: 'I am Ahmed', createdAt: new Date()}],
			sameUser: false,
		},
		{
			username: 'Mahmoud',
			messages: [{body: 'Fine! see you..', createdAt: new Date()}, {body: 'I am Mahmoud', createdAt: new Date()}],
			sameUser: false,
		},
	]);
	const [currentChat, setCurrentChat] = useState(onlineUsers[0]);
  const handleSetCurrentChat = (user) => {
    setCurrentChat(user);
  }
	return (
		<div className='App'>
			<Appbar />
			<Routes>
				<Route path='/' element={<Home setCurrentChat={handleSetCurrentChat} currentChat={currentChat} onlineUsers={onlineUsers} />} />
				<Route path='/auth' element={<Auth />} />
				<Route path='/chat' element={<Chat currentChat={currentChat} />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
