import React, { useEffect, useState } from 'react'
import { connect, Socket } from 'socket.io-client'

export const SocketContext = React.createContext<Socket | undefined>(undefined)

function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState(connect('http://localhost:8181/'))

  useEffect(() => {
    // TODO: Replace with User Id
    const id = 5
    setSocket(
      connect('http://localhost:8181/', {
        query: { id },
      })
    )
    console.log('connecting id:', id)

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
