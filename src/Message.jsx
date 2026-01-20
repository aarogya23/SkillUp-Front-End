import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState([]) // 🔴 dynamic messages
  const [socket, setSocket] = useState(null)

  const username = "me" // replace with logged-in user

  // 🔌 WebSocket connection
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws/chat")

    ws.onopen = () => {
      console.log("WebSocket connected")
    }

    ws.onmessage = (event) => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          text: event.data,
          isMine: event.data.startsWith(username),
          time: new Date().toLocaleTimeString()
        }
      ])
    }

    ws.onclose = () => {
      console.log("WebSocket disconnected")
    }

    setSocket(ws)
    return () => ws.close()
  }, [])

  // 📤 Send message via REST API
  const sendMessage = async () => {
    if (!messageText.trim()) return

    await fetch("http://localhost:8083/api/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: username,
        receiver: "user1",
        content: messageText
      })
    })

    setMessageText("")
  }

  const conversations = [
    { id: 1, name: 'Ramesh Kumar', avatar: 1, online: true },
    { id: 2, name: 'Study Group - DSA', avatar: 5 },
    { id: 3, name: 'Priya Sharma', avatar: 8 }
  ]

  const activeChat = conversations.find(c => c.id === selectedChat)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* CONVERSATIONS LIST (UNCHANGED) */}
      <div className="w-96 bg-white border-r">
        {conversations.map(conv => (
          <div
            key={conv.id}
            onClick={() => setSelectedChat(conv.id)}
            className={`p-4 cursor-pointer ${
              selectedChat === conv.id ? 'bg-blue-50' : ''
            }`}
          >
            {conv.name}
          </div>
        ))}
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* HEADER */}
        <div className="bg-white border-b p-4">
          <h2 className="font-semibold">{activeChat?.name}</h2>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-md ${
                  msg.isMine
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-gray-400 mt-1 text-right">
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="bg-white border-t p-4 flex gap-3">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="flex-1 border rounded-full px-4 py-2"
            placeholder="Type a message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Send
          </button>
        </div>
      </div>

      {/* RIGHT PANEL (UNCHANGED UI) */}
      <div className="w-80 bg-white border-l p-6">
        <p className="text-gray-500">User Info Panel</p>
      </div>
    </div>
  )
}

export default Message
