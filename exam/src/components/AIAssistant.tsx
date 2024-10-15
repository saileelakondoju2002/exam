import React, { useState } from 'react';
import styled from 'styled-components';

const AssistantIcon = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ChatMessages = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
`;

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, `You: ${input}`]);
      // TODO: Implement AI response logic
      setMessages((prevMessages) => [...prevMessages, 'AI: I'm here to help! How can I assist you?']);
      setInput('');
    }
  };

  return (
    <>
      <AssistantIcon onClick={toggleChat}>AI</AssistantIcon>
      {isOpen && (
        <ChatWindow>
          <ChatHeader>AI Assistant</ChatHeader>
          <ChatMessages>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </ChatMessages>
          <form onSubmit={handleSubmit}>
            <ChatInput
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
          </form>
        </ChatWindow>
      )}
    </>
  );
};

export default AIAssistant;