import { useEffect, useState } from 'react'
import Login from '../components/login.component'
import Signup from '../components/signup.component'

type AuthProps = {
  setTitle: (title: string | JSX.Element) => void
}
const Auth = ({ setTitle }: AuthProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const toggleAuth = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    setTitle(isLoggedIn ? 'Login' : 'Signup')
  }, [isLoggedIn])

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
  )
}

export default Auth
