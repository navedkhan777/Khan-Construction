import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Namaste! Main Khan Construction ka AI Assistant hoon. Aapka sawal poochhiye." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`, // yaha apni key paste karo
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: newMessages,
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message;
    setMessages([...newMessages, reply]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow bg-white">
      <h2 className="text-xl font-bold mb-4">🤖 Khan Construction Chatbot</h2>
      <div className="h-64 overflow-y-scroll mb-4 border p-2 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <p className={`${msg.role === "user" ? "text-blue-600" : "text-green-600"}`}>
              <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Aapka sawal likhiye..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 rounded">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
