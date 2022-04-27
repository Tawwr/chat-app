import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.page'
import Chat from './pages/chat.page'
import Auth from './pages/auth.page'
import Appbar from './components/appbar.component'
import Footer from './components/footer.component'
import { useState } from 'react'
import { DummyUser } from './types'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { useEffect } from 'react'
import AuthGuard from './components/authGuard.component'
function App() {
  const token = useSelector((state: RootState) => state.app.token)
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
  const [currentChat, setCurrentChat] = useState<DummyUser>(onlineUsers[0])

  useEffect(() => {
    localStorage.setItem('chat-auth-token', token)
  }, [token])

  const handleSetCurrentChat = (user: DummyUser) => {
    setCurrentChat(user)
  }

  const handleSetTitle = (title: string | JSX.Element) => {
    setAppbarTitle(title)
  }
  return (
    <div className="App">
      <Appbar title={appbarTitle} />
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuard>
              <Home
                setCurrentChat={handleSetCurrentChat}
                currentChat={currentChat}
                onlineUsers={onlineUsers}
                setTitle={handleSetTitle}
              />
            </AuthGuard>
          }
        />
        <Route path="/auth" element={<Auth setTitle={handleSetTitle} />} />
        <Route
          path="/chat"
          element={
            <AuthGuard>
              <Chat currentChat={currentChat} setTitle={handleSetTitle} />
            </AuthGuard>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
