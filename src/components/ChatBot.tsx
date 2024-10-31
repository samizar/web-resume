'use client';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Clipboard } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(index);
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000);
  };

  const linkify = (text: string) => {
    // Modified regex to not include trailing punctuation
    const urlRegex = /(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([\/\w-]*)*(?=[.,!?]|$)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = urlRegex.exec(text)) !== null) {
      // Add text before the URL
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the URL as a link
      const url = match[0];
      const fullUrl = url.startsWith('http') ? url : `https://${url}`;
      parts.push(
        <a
          key={match.index}
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline break-all"
        >
          {url}
        </a>
      );

      lastIndex = match.index + url.length;
      
      // Add any punctuation that follows
      if (lastIndex < text.length && /[.,!?]/.test(text[lastIndex])) {
        parts.push(text[lastIndex]);
        lastIndex++;
      }
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const botMessage = { 
        role: 'assistant' as const, 
        content: data.message
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant' as const, 
        content: "Oops! Something went wrong. Please try again later! 🤖" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Bot Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-[#FFD93D] border-4 border-black rounded-full
                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none
                 transition-all duration-300 hover:translate-x-1 hover:-translate-y-1
                 text-black z-50"
      >
        <Bot size={24} strokeWidth={2.5} />
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white border-4 border-black rounded-lg w-full max-w-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b-4 border-black bg-[#FFD93D]">
              <h3 className="text-xl font-bold text-black">Ask me anything! 🤖</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-black hover:text-white transition-all duration-300
                         border-2 border-black rounded-md text-black"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-96 overflow-y-auto bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center text-gray-500 mt-4">
                  👋 Hi! Ask me anything about Sami's experience, skills, or background!
                </div>
              )}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-4 ${
                    msg.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg border-2 border-black max-w-[80%]
                              ${
                                msg.role === 'user'
                                  ? 'bg-[#FFD93D]'
                                  : 'bg-white'
                              }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <p className="text-black whitespace-pre-wrap">
                        {msg.role === 'assistant' ? linkify(msg.content) : msg.content}
                      </p>
                      {msg.role === 'assistant' && (
                        <button
                          onClick={() => copyToClipboard(msg.content, i)}
                          className={`p-1.5 rounded-md transition-all duration-300 border-2 border-black
                                      ${copySuccess === i 
                                        ? 'bg-green-500 text-white scale-110 rotate-12' 
                                        : 'bg-white text-black hover:bg-black hover:text-white'}`}
                        >
                          <Clipboard size={16} strokeWidth={2.5} className="transition-transform duration-300" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-left">
                  <div className="inline-block p-3 rounded-lg border-2 border-black bg-white">
                    <p className="text-black">Thinking... 🤔</p>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t-4 border-black">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about Sami..."
                  className="flex-1 p-2 border-2 border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-[#FFD93D]
                           text-black placeholder-gray-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-white border-2 border-black rounded-md
                           hover:bg-black hover:text-white transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed
                           shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                           hover:translate-x-1 hover:-translate-y-1"
                >
                  <Send size={20} strokeWidth={3} className="text-black hover:text-white transition-colors duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}