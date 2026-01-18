import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(1)
  const [messageText, setMessageText] = useState('')

  const conversations = [
    {
      id: 1,
      name: 'Ramesh Kumar',
      avatar: 1,
      lastMessage: 'Hey, can you help me with the assignment?',
      time: '10:30 AM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Study Group - DSA',
      avatar: 5,
      lastMessage: 'Meeting tomorrow at 3 PM',
      time: '9:15 AM',
      unread: 0,
      online: false,
      isGroup: true
    },
    {
      id: 3,
      name: 'Priya Sharma',
      avatar: 8,
      lastMessage: 'Thanks for the notes!',
      time: 'Yesterday',
      unread: 0,
      online: true
    },
    {
      id: 4,
      name: 'Aarogya Thapa',
      avatar: 12,
      lastMessage: 'The lecture was really helpful',
      time: 'Yesterday',
      unread: 1,
      online: false,
      isInstructor: true
    },
    {
      id: 5,
      name: 'Web Dev Team',
      avatar: 15,
      lastMessage: 'Project deadline extended',
      time: '2 days ago',
      unread: 0,
      online: false,
      isGroup: true
    },
    {
      id: 6,
      name: 'Kumar Singh',
      avatar: 20,
      lastMessage: 'Did you check the test results?',
      time: '3 days ago',
      unread: 0,
      online: false
    }
  ]

  const messages = [
    {
      id: 1,
      senderId: 1,
      text: 'Hey, can you help me with the assignment?',
      time: '10:25 AM',
      isMine: false
    },
    {
      id: 2,
      senderId: 'me',
      text: 'Sure! Which part are you stuck on?',
      time: '10:26 AM',
      isMine: true
    },
    {
      id: 3,
      senderId: 1,
      text: 'The binary tree implementation. I am not sure how to implement the traversal methods.',
      time: '10:28 AM',
      isMine: false
    },
    {
      id: 4,
      senderId: 'me',
      text: 'Let me share some resources with you. Have you tried the recursion approach?',
      time: '10:29 AM',
      isMine: true
    },
    {
      id: 5,
      senderId: 1,
      text: 'Not yet, can you explain?',
      time: '10:30 AM',
      isMine: false
    }
  ]

  const activeChat = conversations.find(c => c.id === selectedChat)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONVERSATIONS LIST */}
      <div className="w-96 bg-white border-r flex flex-col">
        {/* HEADER */}
        <div className="p-6 border-b">
          <h1 className="text-2xl font-semibold mb-4">Messages</h1>
          <div className="relative">
            <input
              className="w-full border rounded-lg px-4 py-2 pr-10"
              placeholder="Search conversations..."
            />
            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
          </div>
        </div>

        {/* TABS */}
        <div className="flex border-b">
          <button className="flex-1 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
            All Messages
          </button>
          <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            Unread
          </button>
          <button className="flex-1 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
            Groups
          </button>
        </div>

        {/* CONVERSATIONS */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map(conv => (
            <div
              key={conv.id}
              onClick={() => setSelectedChat(conv.id)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition ${
                selectedChat === conv.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={`https://i.pravatar.cc/48?img=${conv.avatar}`}
                    className="w-12 h-12 rounded-full"
                    alt={conv.name}
                  />
                  {conv.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">{conv.name}</h3>
                      {conv.isInstructor && (
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">Instructor</span>
                      )}
                      {conv.isGroup && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Group</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{conv.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="ml-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col">
        {/* CHAT HEADER */}
        <div className="bg-white border-b p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={`https://i.pravatar.cc/40?img=${activeChat?.avatar}`}
                className="w-10 h-10 rounded-full"
                alt={activeChat?.name}
              />
              {activeChat?.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div>
              <h2 className="font-semibold">{activeChat?.name}</h2>
              <p className="text-xs text-gray-500">
                {activeChat?.online ? 'Active now' : 'Last seen recently'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">📞</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">📹</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">ℹ️</button>
          </div>
        </div>

        {/* MESSAGES */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-2 max-w-md ${msg.isMine ? 'flex-row-reverse' : ''}`}>
                {!msg.isMine && (
                  <img
                    src={`https://i.pravatar.cc/32?img=${activeChat?.avatar}`}
                    className="w-8 h-8 rounded-full"
                    alt="User"
                  />
                )}
                <div>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      msg.isMine
                        ? 'bg-blue-500 text-white'
                        : 'bg-white border'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 ${msg.isMine ? 'text-right' : ''}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MESSAGE INPUT */}
        <div className="bg-white border-t p-4">
          <div className="flex gap-3 items-center">
            <button className="p-2 hover:bg-gray-100 rounded-lg">📎</button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">😊</button>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="flex-1 border rounded-full px-4 py-2"
              placeholder="Type a message..."
            />
            <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-white border-l p-6">
        {/* USER INFO */}
        <div className="text-center mb-6">
          <img
            src={`https://i.pravatar.cc/80?img=${activeChat?.avatar}`}
            className="w-20 h-20 rounded-full mx-auto mb-3"
            alt={activeChat?.name}
          />
          <h3 className="font-semibold text-lg">{activeChat?.name}</h3>
          <p className="text-sm text-gray-500">
            {activeChat?.online ? 'Active now' : 'Offline'}
          </p>
        </div>

        {/* SHARED MEDIA */}
        <div className="mb-6">
          <h4 className="text-xs text-gray-400 font-semibold mb-3">SHARED MEDIA</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>

        {/* SHARED FILES */}
        <div className="mb-6">
          <h4 className="text-xs text-gray-400 font-semibold mb-3">SHARED FILES</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                📄
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Assignment_DSA.pdf</p>
                <p className="text-xs text-gray-500">2.3 MB</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                📊
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Notes_Chapter5.xlsx</p>
                <p className="text-xs text-gray-500">1.8 MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
            <span>🔕</span>
            <span className="text-sm">Mute Notifications</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg transition">
            <span>🔍</span>
            <span className="text-sm">Search in Conversation</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 rounded-lg transition text-red-600">
            <span>🗑️</span>
            <span className="text-sm">Delete Conversation</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Message