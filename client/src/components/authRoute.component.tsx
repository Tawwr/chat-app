import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { meAPI } from '../api'
import { useSocket } from '../context/SocketProvider'
import { setUser, signOut } from '../redux/reducers/app'
import { RootState } from '../redux/store'

function AuthRoute({ children }: { children: React.ReactNode }): JSX.Element {
  const token = useSelector((state: RootState) => state.app.token)
  const [loading, setLoading] = useState(true)
  const socket = useSocket()

  const dispatch = useDispatch()

  const fetchMe = async () => {
    try {
      const data = await meAPI(token)
      dispatch(setUser(data))
    } catch (error) {
      console.log('error fetching,', { error })
      dispatch(signOut())
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMe()
    //TODO: receive conversations and notifications
    socket.on('receive-message', (message) => {
      console.log({ message })
    })
  }, [])

  if (loading) {
    return (
      <div>
        <h5>loading...</h5>
      </div>
    )
  }

  if (token) {
    return <> {children}</>
  } else {
    return <Navigate to="/auth" replace />
  }
}
export default AuthRoute
