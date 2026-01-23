import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

const Message = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const stompClientRef = useRef(null);

  const username = "me"; // replace with logged-in user

  // 🔌 WebSocket (SockJS + STOMP)
  useEffect(() => {
    const socket = new SockJS("http://localhost:8083/ws");

    const stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("Connected to WebSocket");

        // Subscribe to public chat
        stompClient.subscribe("/topic/public", (payload) => {
          const msg = JSON.parse(payload.body);

          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: msg.content,
              isMine: msg.sender === username,
              time: new Date().toLocaleTimeString(),
            },
          ]);
        });

        // JOIN message (optional)
        stompClient.publish({
          destination: "/app/chat.join",
          body: JSON.stringify({
            sender: username,
            type: "JOIN",
            content: "",
          }),
        });
      },
    });

    stompClient.activate();
    stompClientRef.current = stompClient;

    return () => stompClient.deactivate();
  }, []);

  // 📤 Send message via WebSocket
  const sendMessage = () => {
    if (!messageText.trim()) return;

    stompClientRef.current.publish({
      destination: "/app/chat.send",
      body: JSON.stringify({
        sender: username,
        content: messageText,
        type: "CHAT",
      }),
    });

    setMessageText("");
  };

  const conversations = [
    { id: 1, name: "Ramesh Kumar", avatar: 1, online: true },
    { id: 2, name: "Study Group - DSA", avatar: 5 },
    { id: 3, name: "Priya Sharma", avatar: 8 },
  ];

  const activeChat = conversations.find((c) => c.id === selectedChat);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* CONVERSATIONS */}
      <div className="w-96 bg-white border-r">
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setSelectedChat(conv.id)}
            className={`p-4 cursor-pointer ${
              selectedChat === conv.id ? "bg-blue-50" : ""
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
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isMine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`rounded-2xl px-4 py-2 max-w-md ${
                  msg.isMine
                    ? "bg-blue-500 text-white"
                    : "bg-white border"
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
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-6 py-2 rounded-full"
          >
            Send
          </button>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-80 bg-white border-l p-6">
        <p className="text-gray-500">User Info Panel</p>
      </div>
    </div>
  );
};

export default Message;
