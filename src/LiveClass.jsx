// LiveClass.jsx

// FIX: make `global` available in browser (Vite / modern React)
if (typeof global === "undefined") {
  window.global = window
}

import { useEffect, useState, useRef } from "react"
import SockJS from "sockjs-client"
import { Client } from "@stomp/stompjs"

const CLASS_ID = "101"       // Your class ID
const USER_NAME = "Aarogya"  // Your name

const LiveClass = () => {
  const [messages, setMessages] = useState([])
  const [text, setText] = useState("")
  const stompClientRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  // Connect to WebSocket
  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      debug: () => {},
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("✅ WebSocket Connected")

        // Subscribe to class topic
        client.subscribe(`/topic/class/${CLASS_ID}`, (msg) => {
          setMessages((prev) => [...prev, JSON.parse(msg.body)])
        })

        // Join class
        client.publish({
          destination: "/app/class/join",
          body: JSON.stringify({
            classId: CLASS_ID,
            sender: USER_NAME,
            content: "joined the class",
            type: "JOIN"
          })
        })
      },
      onStompError: (frame) => {
        console.error("❌ STOMP error:", frame)
      }
    })

    client.activate()
    stompClientRef.current = client

    // Leave class on unmount
    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.publish({
          destination: "/app/class/leave",
          body: JSON.stringify({
            classId: CLASS_ID,
            sender: USER_NAME,
            content: "left the class",
            type: "LEAVE"
          })
        })
        stompClientRef.current.deactivate()
      }
    }
  }, [])

  // Send chat message
  const handleSend = () => {
    if (!text.trim()) return

    stompClientRef.current.publish({
      destination: "/app/class/chat",
      body: JSON.stringify({
        classId: CLASS_ID,
        sender: USER_NAME,
        content: text,
        type: "CHAT"
      })
    })
    setText("")
  }

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>📚 Live Class Room</h2>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          padding: 10,
          marginBottom: 10
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            <b>{msg.sender}</b>: {msg.content}
          </p>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message"
        style={{ width: "80%", padding: 8 }}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button onClick={handleSend} style={{ padding: 8, marginLeft: 5 }}>
        Send
      </button>
    </div>
  )
}

export default LiveClass
