'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose,  } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";

type AnandChatbotProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnandChatbot = ( {isVisible , setIsVisible } : AnandChatbotProps) => {
 

  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const chatbotMessages = [
    'Hello! Thanks for visiting my website.',
    '📞 Contact Number: +91-9654773572',
    '✉️ Email: <a href="mailto:anandsingh23112005@gmail.com" class="text-blue-600 hover:underline">anandsingh23112005@gmail.com</a>',
    '🔗 LinkedIn: <a href="https://linkedin.com/in/anand-thakur-083b09333" target="_blank" rel="noopener noreferrer" class="text-blue-600 ">My Profile : anand-thakur-083b09333</a>',
    '🔗Github : <a href="https://github.com/AnandSinghDeveloper" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">AnandSinghDeveloper</a>',
    'Feel free to reach out anytime!',
  ];

  useEffect(() => {
    // Show chatbot and start message sequence on page load
    setIsVisible(true);
    startMessageSequence();
  }, []);

  const startMessageSequence = () => {
    setMessages([]);
    setCurrentMessageIndex(0);
    setIsLoading(true);
  }
    useEffect(() => {
  if (!isLoading) return;

  if (currentMessageIndex < chatbotMessages.length) {
    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, chatbotMessages[currentMessageIndex]]);
      setCurrentMessageIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  } else {
    setIsLoading(false);
  }
}, [currentMessageIndex, isLoading]); // 1-second delay between messages

  //   return () => clearInterval(interval);
  // };

  const closeChatbot = () => {
    setIsVisible(false);
  };

  const openChatbot = () => {
    setIsVisible(true);
    startMessageSequence();
  };

  const refreshChatbot = () => {
    startMessageSequence();
  };

  if (!isVisible) return null;
  return (
      <>
      {/* Chatbot Container */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-25 right-5 w-70  lg:w-90  bg-grey-900 rounded-xl shadow-2xl font-sans z-50 overflow-hidden"
          >
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-t-xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                 <div className=" chatbot w-10  h-10 rounded-full shadow-xl border border-[#5918df] "> </div>
                <span className="text-lg font-semibold">Anand Thakur</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={refreshChatbot}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition"
                  title="Refresh"
                >
                
                  <LuRefreshCcw className="h-5 w-5" />
                </button>
                <button
                  onClick={closeChatbot}
                  className="text-white hover:bg-white/20 p-1 rounded-full transition"
                  title="Close"
                >
                  <IoClose className="h-5 w-5" />
                </button>
              </div>
            </div>
            {/* Chatbot Body */}
            <div className="p-4 max-h-full overflow-y-auto bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3 p-3 bg-black rounded-lg shadow-sm text-sm"
                  dangerouslySetInnerHTML={{ __html: message }}
                >
                 
                </motion.div>
                
              ))}
              {isLoading && currentMessageIndex < chatbotMessages.length && (
                <div className="flex justify-start">
                  <div className="p-3 bg-transparent rounded-lg shadow-sm flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Bot Icon (Visible when chatbot is closed) */}
      {!isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-5 right-5 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          onClick={openChatbot}
          title="Open Chatbot"
        >
         <IoClose className="text-white text-2xl" />
          
        </motion.button>
      )}
    </>
  )
}

export default AnandChatbot
