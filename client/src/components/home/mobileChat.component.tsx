import React from 'react'
import ChatForm from '../chatForm.component'
import MessagesContainer from '../messagesContainer.component'

//TODO: Remove Dummy data

const currentChat = {
  username: 'Islam',
  messages: [
    { body: 'Fine! see you..', createdAt: new Date() },
    { body: 'I am Islam', createdAt: new Date() },
  ],
  sameUser: true,
}

function MobileChat() {
  return (
    <div style={{ height: '100vh', width: '100%', margin: '100px 0 0' }}>
      test 123
      <MessagesContainer currentChat={currentChat} />
      <ChatForm />
    </div>
  )
}

export default MobileChat
