import React, { useState, useRef } from "react";
import { Mic, Send } from "lucide-react"; // mic + send icons

const ChatSection = () => {
  const [messages, setMessages] = useState([
    { sender: "Sakshi", text: "Hi, did you find my bag?" },
    { sender: "Isha", text: "Yes! I think I found it near the metro station." },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  // Handle sending text message
  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "You", text: newMessage }]);
    setNewMessage("");
  };

  // Start voice recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunks.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
        audioChunks.current = [];
        const audioUrl = URL.createObjectURL(audioBlob);

        setMessages((prev) => [
          ...prev,
          { sender: "You", text: "🎤 Voice Message", audio: audioUrl },
        ]);
      };
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Microphone access denied:", error);
    }
  };

  // Stop voice recording
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0B0E14] via-[#0F1621] to-[#0B0E14] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-[#0F1621]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
            Chat Section
          </h2>
          <p className="text-gray-400 text-sm">Connect with item owner/finder</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 p-4 bg-black/30 rounded-xl scrollbar-thin scrollbar-thumb-indigo-500">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-2xl max-w-xs transition-transform duration-300 ${
                msg.sender === "You"
                  ? "bg-gradient-to-r from-indigo-500 to-indigo-700 text-white ml-auto shadow-lg shadow-indigo-500/40"
                  : "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 shadow-md"
              }`}
            >
              <p className="text-sm font-semibold mb-1">{msg.sender}</p>
              {msg.audio ? (
                <audio controls src={msg.audio} className="w-full mt-2" />
              ) : (
                <p>{msg.text}</p>
              )}
            </div>
          ))}
        </div>

        {/* Input & Buttons */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400 transition"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white shadow-md hover:shadow-indigo-400/50 transition"
          >
            <Send size={20} />
          </button>
          <button
            onClick={recording ? stopRecording : startRecording}
            className={`p-3 rounded-xl text-white shadow-md transition ${
              recording
                ? "bg-red-500 hover:bg-red-600 shadow-red-400/50"
                : "bg-green-500 hover:bg-green-600 shadow-green-400/50"
            }`}
          >
            <Mic size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
