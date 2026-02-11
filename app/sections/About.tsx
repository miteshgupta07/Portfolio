'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const About = () => {
  // Chat toggle state - Desktop: open by default, Mobile: collapsed by default
  // Responsive behavior synced with Tailwind lg breakpoint (1024px)
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Initialize chat state based on screen size on component mount
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    setIsChatOpen(isDesktop);
  }, []);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm an AI assistant. Ask me about Mitesh's experience, skills, or projects!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "This is a demo response. API integration coming soon. I'm here to help you learn more about Mitesh's AI engineering expertise!",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);
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
          <div className="flex w-full lg:w-1/2 mt-6 lg:-mt-44 justify-center lg:justify-start items-start">
            {!isChatOpen ? (
              /* Collapsed state - Beautiful animated trigger button */
              /* Slow breathing animation (3s) for calm, premium feel - replaces fast animate-pulse */
              <button
                onClick={() => setIsChatOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-br from-[#ffd700] to-[#ffd700] rounded-full shadow-2xl shadow-[#ffd700] hover:shadow-[#ffd700] transition-all duration-1 hover:scale-110 active:scale-95 animate-[pulse_1s_ease-in-out_infinite] hover:animate-none"
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
                            <p className="text-sm leading-relaxed font-medium">{message.text}</p>
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
                      <div className="flex gap-3">
                        <input
                          type="text"
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          className="flex-1 bg-gradient-to-br from-[#262626] to-[#1a1a1a] text-[#ffffff] rounded-2xl px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#ffd700] focus:shadow-lg focus:shadow-[#ffd700]/30 placeholder-[#ffffff] placeholder-opacity-40 transition-all duration-300 border border-[#ffffff]/5"
                        />
                        <button
                          type="submit"
                          className="bg-gradient-to-br from-[#ffd700] to-[#ffed4e] hover:from-[#ffed4e] hover:to-[#ffd700] text-[#121212] font-bold rounded-2xl px-8 py-3.5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#ffd700]/60 hover:scale-105 active:scale-95 flex-shrink-0"
                        >
                          Send
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
