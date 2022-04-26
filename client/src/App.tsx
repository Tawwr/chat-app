import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Appbar from './components/appbar.component'
import AuthRoute from './components/authRoute.component'
import Footer from './components/footer.component'
import SocketProvider from './context/SocketProvider'
import Auth from './pages/auth.page'
import Chat from './pages/chat.page'
import Home from './pages/home.page'
import { RootState } from './redux/store'
import { DummyUser } from './types'

function App() {
  const { token } = useSelector((state: RootState) => state.app)
  useEffect(() => {
    localStorage.setItem('chat-auth-token', token)
  }, [token])
  
  const [appbarTitle, setAppbarTitle] = useState<string | JSX.Element>('')
  const [onlineUsers, setOnlineUsers] = useState<DummyUser[]>([
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
  ])
  const [currentChat, setCurrentChat] = useState(onlineUsers[0])
  const handleSetCurrentChat = (user: DummyUser) => {
    setCurrentChat(user)
  }
  const handleSetTitle = (title: string | JSX.Element) => {
    setAppbarTitle(title)
  }
  return (
    <div className="App">
      <SocketProvider>
        <Appbar title={appbarTitle} />
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home
                  setCurrentChat={handleSetCurrentChat}
                  currentChat={currentChat}
                  onlineUsers={onlineUsers}
                  setTitle={handleSetTitle}
                />
              </AuthRoute>
            }
          />
          <Route path="/auth" element={<Auth setTitle={handleSetTitle} />} />
          <Route
            path="/chat"
            element={
              <AuthRoute>
                <Chat currentChat={currentChat} setTitle={handleSetTitle} />
              </AuthRoute>
            }
          />
        </Routes>
        <Footer />
      </SocketProvider>
    </div>
  )
}

export default App
