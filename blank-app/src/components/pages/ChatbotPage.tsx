import React, { useState } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const ChatbotPage: React.FC = () => {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm ZenGen, your mental wellness companion. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Message handling would go here in a functional version
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-purple-600 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center">
                  <i className="fas fa-robot text-white text-xl"></i>
                </div>
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-semibold text-white">Chat with ZenGen</h2>
                <p className="text-purple-200 text-sm">Your Mental Wellness Assistant</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } animate-fadeIn`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-full border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 hover:scale-105"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Suggested messages:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "I'm feeling anxious",
              "How can I improve my mood?",
              "Tell me about meditation",
              "I need someone to talk to",
            ].map((suggestion, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full bg-white text-gray-700 text-sm hover:bg-purple-50 transition-colors duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
