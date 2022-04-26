import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { connect, Socket } from 'socket.io-client'
import { URL as BACKEND_URL } from '../api'
import { RootState } from '../redux/store'

export const SocketContext = React.createContext<Socket | undefined>(undefined)

export const useSocket = () => {
  const context = useContext(SocketContext)

  if (!context) throw Error('SocketProvider must be defined')
  return context
}

function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState(connect(BACKEND_URL))
  const user = useSelector((state: RootState) => state.app.user)

  useEffect(() => {
    if (user) {
      const { id } = user
      setSocket(
        connect(BACKEND_URL, {
          query: { id },
        })
      )
      console.log('connecting id:', id)
    }

    return () => {
      console.log('disconnecting')
      socket.close()
    }
  }, [])
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

export default SocketProvider
