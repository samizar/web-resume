'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Send } from 'lucide-react';

// Add this after the imports
emailjs.init('hqCFAkmOLo8DHb66d');

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NoteModal({ isOpen, onClose }: NoteModalProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      await emailjs.send(
        'service_52axib4',
        'template_yt35ygq',
        {
          from_name: name,
          message: message,
          to_name: 'Sami',
        },
        'hqCFAkmOLo8DHb66d'
      );
      
      setStatus('success');
      setName('');
      setMessage('');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white border-4 border-black rounded-lg p-6 w-full max-w-md 
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Leave me a note ✍️</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black hover:text-white transition-all duration-300 
                     border-2 border-black rounded-md
                     shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                     hover:translate-x-1 hover:-translate-y-1"
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2 text-black">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border-4 border-black rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#FFD93D]
                       text-black placeholder-gray-500"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-2 text-black">Your Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border-4 border-black rounded-md h-32 
                       focus:outline-none focus:ring-2 focus:ring-[#FFD93D]
                       text-black placeholder-gray-500"
              placeholder="Write your message here"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 
                     bg-[#FFD93D] border-4 border-black rounded-md 
                     hover:bg-black hover:text-white transition-all duration-300 
                     shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none 
                     hover:translate-x-1 hover:-translate-y-1 text-black font-bold
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} strokeWidth={2.5} />
            {isSending ? 'Sending...' : 'Send Note'}
          </button>

          {status === 'success' && (
            <div className="p-3 border-4 border-green-500 rounded-md bg-green-50 text-green-700 font-bold text-center">
              Note sent successfully! 🎉
            </div>
          )}
          {status === 'error' && (
            <div className="p-3 border-4 border-red-500 rounded-md bg-red-50 text-red-700 font-bold text-center">
              Failed to send note. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 