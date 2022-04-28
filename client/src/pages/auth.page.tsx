import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Login from '../components/login.component'
import Signup from '../components/signup.component'
import { RootState } from '../redux/store'

type AuthProps = {
  setTitle: (title: string | JSX.Element) => void
}
const Auth = ({ setTitle }: AuthProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const token = useSelector((state: RootState) => state.app.token)

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    setTitle(isLoggedIn ? 'Login' : 'Signup')
  }, [isLoggedIn])

  if (token) return <Navigate to="/" replace />

  return (
    <div
      style={{
        width: '100%',
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
  )
}

export default Auth
