'use client';
import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const About = () => {
  // Utility function to format message text with line breaks and bold
  const formatMessage = (text: string): JSX.Element[] => {
    // Split by newlines (handle both escaped and actual newlines)
    const lines = text.split(/\\n|\n/);
    
    return lines.map((line, lineIndex) => {
      // Empty line = line break
      if (!line.trim()) {
        return <br key={lineIndex} />;
      }
      
      // Parse bold text (**text**)
      const parts = line.split(/(\*\*.*?\*\*)/);
      
      return (
        <span key={lineIndex} className="block">
          {parts.map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              const boldText = part.slice(2, -2);
              return <strong key={partIndex} className="font-bold">{boldText}</strong>;
            }
            return <span key={partIndex}>{part}</span>;
          })}
        </span>
      );
    });
  };

  // Generate session ID once per component mount (temporary per tab session)
  const sessionIdRef = useRef(uuidv4());

  // Chat toggle state - Desktop: open by default, Mobile: collapsed by default
  // Responsive behavior synced with Tailwind lg breakpoint (1024px)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([]);
  
  // Initialize chat state based on screen size on component mount
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    setIsChatOpen(isDesktop);
  }, []);
  
  // Load chat history on component mount
  useEffect(() => {
    const loadHistory = async () => {
      const sessionId = sessionIdRef.current;
      
      try {
        const response = await fetch(`https://api.researchmate.me/history?session_id=${sessionId}`);
        
        if (!response.ok) {
          throw new Error('Failed to load history');
        }
        
        const data = await response.json();
        
        if (data.messages && data.messages.length > 0) {
          const loadedMessages: Message[] = data.messages.map((msg: any, index: number) => ({
            id: index + 1,
            text: msg.content,
            sender: msg.role === 'user' ? 'user' : 'bot',
            timestamp: new Date(),
          }));
          setMessages(loadedMessages);
        } else {
          // Empty history, show default greeting
          setMessages([{
            id: 1,
            text: "Hello! I'm an AI assistant. Ask me about Mitesh's experience, skills, or projects!",
            sender: 'bot',
            timestamp: new Date(),
          }]);
        }
      } catch (error) {
        console.error('Failed to load chat history:', error);
        // Fallback to default greeting
        setMessages([{
          id: 1,
          text: "Hello! I'm an AI assistant. Ask me about Mitesh's experience, skills, or projects!",
          sender: 'bot',
          timestamp: new Date(),
        }]);
      }
    };
    
    loadHistory();
  }, []);
  const [input, setInput] = useState('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userInput = input.trim();
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const sessionId = sessionIdRef.current;
      
      const response = await fetch('https://api.researchmate.me/portfolio/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          message: userInput,
        }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.response || "I received your message but couldn't generate a response.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat API error:', error);
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Sorry, something went wrong. Please try again.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="flex flex-col pt-28 lg:pt-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
        id="about"
        data-aos="fade-up"
      >
        <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
          <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-[#ffd700]"></div>
          <span className=" font-bold text-lg sm:text-2xl font-idgrotesk">
            About Me
          </span>
          <div className="w-[5%] lg:w-36 border-b-[1px] border-b-[#ffd700]"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full py-10 gap-10 lg:items-start">
          {/* Chatbot UI - visible on all screen sizes */}
          {/* Mobile: full width, normal margin | Desktop (lg+): half width with upward lift via lg:-mt-44 */}
          <div className={`flex w-full lg:w-1/2 mt-6 lg:-mt-44 lg:min-h-[600px] ${isChatOpen ? 'lg:justify-start lg:items-start' : 'lg:justify-center lg:items-center'} justify-center items-start`}>

            {!isChatOpen ? (
              /* Collapsed state - Beautiful animated trigger button */
              /* Slow breathing animation (3s) for calm, premium feel - replaces fast animate-pulse */
              <button
                onClick={() => setIsChatOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-br from-[#ffd700] to-[#ffd700] rounded-full shadow-2xl shadow-[#ffd700] hover:shadow-[#ffd700] transition-all duration-1 hover:scale-110 active:scale-95 animate-[pulse_2s_ease-in-out_infinite] hover:animate-none"
              >
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ffd700] to-[#ffd700] blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center gap-3">
                  {/* AI Icon */}
                  <svg
                    className="w-6 h-6 text-[#121212] group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span className="text-[#121212] font-bold text-lg font-idgrotesk">
                    Ask Anything About Mitesh
                  </span>
                </div>
              </button>
            ) : (
              /* Expanded state - Full chatbot UI with smooth animation */
              <div className="w-full transition-all duration-500 ease-in-out animate-fadeIn">
                {/* Gradient Border Wrapper */}
                <div className="w-full p-[2px] rounded-3xl bg-gradient-to-br from-[#ffd700] via-[#ffed4e] to-[#ffd700] shadow-2xl shadow-[#ffd700]/20">
                  {/* Inner Container with Dark Gradient */}
                  {/* Responsive height: shorter on mobile (450px), taller on desktop (600px) */}
                  <div className="w-full bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#262626] rounded-[22px] flex flex-col h-[450px] lg:h-[600px] overflow-hidden">
                    {/* Chat Header with close button */}
                    <div className="relative bg-gradient-to-r from-[#1a1a1a] to-[#262626] px-6 py-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {/* Online Status Indicator */}
                          <div className="relative">
                            <div className="w-3 h-3 bg-[#ffd700] rounded-full animate-pulse"></div>
                            <div className="absolute inset-0 w-3 h-3 bg-[#ffd700] rounded-full blur-sm"></div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#ffd700] font-idgrotesk">
                              AI Assistant
                            </h3>
                            <p className="text-xs text-[#ffffff] opacity-60">
                              Ask me anything about Mitesh
                            </p>
                          </div>
                        </div>
                        
                        {/* Close button */}
                        <button
                          onClick={() => setIsChatOpen(false)}
                          className="p-2 hover:bg-[#ffd700]/10 rounded-full transition-all duration-300 group"
                          aria-label="Close chat"
                        >
                          <svg
                            className="w-5 h-5 text-[#ffd700] group-hover:rotate-90 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* Gradient Underline */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent"></div>
                    </div>

                    {/* Messages Area */}
                    <div 
                      ref={messagesContainerRef}
                      className="flex-1 overflow-y-auto px-6 py-6 space-y-4 scrollbar-thin scrollbar-thumb-[#ffd700] scrollbar-track-[#262626]"
                    >
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                          } animate-fadeIn`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-5 py-3 transition-all duration-300 ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-br from-[#ffd700] to-[#ffed4e] text-[#121212] shadow-lg shadow-[#ffd700]/30'
                                : 'bg-gradient-to-br from-[#262626] to-[#1a1a1a] text-[#ffffff] shadow-lg shadow-black/50 border border-[#ffffff]/5'
                            }`}
                          >
                            <div className="text-sm leading-relaxed font-medium">{formatMessage(message.text)}</div>
                          </div>
                        </div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form
                      onSubmit={handleSubmit}
                      className="px-6 py-5 bg-[#1a1a1a]/50 backdrop-blur-sm border-t border-[#ffd700]/20"
                    >
                      <div className="relative">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          className="w-full bg-gradient-to-br from-[#262626] to-[#1a1a1a] text-[#ffffff] rounded-2xl px-5 py-3.5 pr-12 outline-none focus:ring-2 focus:ring-[#ffd700] focus:shadow-lg focus:shadow-[#ffd700]/30 placeholder-[#ffffff] placeholder-opacity-40 transition-all duration-300 border border-[#ffffff]/5"
                        />
                        <button
                          type="submit"
                          disabled={!input.trim() || isLoading}
                          aria-label="Send message"
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-gradient-to-br from-[#ffd700] to-[#ffed4e] rounded-lg hover:from-[#ffed4e] hover:to-[#ffd700] transition-all duration-300 hover:shadow-lg hover:shadow-[#ffd700]/50 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {isLoading ? (
                            <svg
                              className="w-5 h-5 text-[#121212] animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              className="w-5 h-5 text-[#121212] rotate-90"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right half - contains article text */}
          <div className="w-full lg:w-1/2">
            <article className="text-justify">
              I am an AI Engineer with one year of hands-on industry experience, 
              building and deploying real-world AI systems in production environments. 
              I have worked on multiple projects within a professional setting, 
              contributing to end-to-end machine learning and generative AI solutions.
              <br />
              <br />
              My work spans generative AI, machine learning, deep learning, natural 
              language processing, and computer vision, with a strong focus on solving 
              practical business problems. I have experience taking models from 
              experimentation to deployment, working closely with data, APIs, and scalable systems.
              <br />
              <br />
              I enjoy working on complex problems, building reliable AI solutions, and 
              continuously improving systems based on real usage and feedback.
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
