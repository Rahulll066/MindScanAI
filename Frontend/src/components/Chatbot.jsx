import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import your logo


// Fixed Knowledge Base - PROPER ANSWERS, NO WRONG REDIRECTS
const neuroCareKnowledge = {
  // ==================== PROPER RISK RESPONSES ====================
  "low risk": {
    response: `✅ **Low Risk Results**\n\n**What This Means:**\n• No significant dementia indicators detected\n• Good cognitive health markers present\n• Lower probability of developing dementia\n\n**Recommended Actions:**\n• Continue brain-healthy lifestyle\n• Annual cognitive check-ups\n• Maintain mental activities\n• Regular monitoring\n\n**Remember:** Prevention is always better than cure.`,
    options: ["Prevention Tips", "Brain Exercises", "Learn More", "Main Menu"]
  },
  
  "medium risk": {
    response: `⚠️ **Medium Risk Detected**\n\n**What This Means:**\n• Some risk factors present\n• Proactive management recommended\n• Professional consultation advised\n\n**Immediate Steps:**\n1. Consult healthcare professional\n2. Lifestyle modifications\n3. Regular monitoring\n4. Brain-healthy habits\n\n**Key Focus:** Enhanced prevention strategies.`,
    options: ["Find Doctor", "Lifestyle Plan", "Support Resources", "Main Menu"]
  },
  
  "high risk": {
    response: `🚨 **High Risk Identified**\n\n**What This Means:**\n• Significant indicators detected\n• Immediate medical attention recommended\n• Comprehensive evaluation needed\n\n**Critical Actions:**\n1. Schedule doctor appointment\n2. Neurological evaluation\n3. Discuss family history\n4. Develop care plan\n\n**Stay Calm:** Early intervention improves outcomes.`,
    options: ["Find Specialist", "Emergency Help", "Support Groups", "Main Menu"]
  },

  // ==================== DEMENTIA QUESTIONS ====================
  "what is dementia": {
    response: `🧠 **What is Dementia?**\n\nDementia is a term for symptoms affecting:\n• Memory\n• Thinking skills\n• Social abilities\n• Daily activities\n\n**Common Types:** Alzheimer's, Vascular, Lewy Body\n**Important:** Early detection improves quality of life.`,
    options: ["Symptoms", "Risk Factors", "Prevention", "Main Menu"]
  },
  
  "dementia symptoms": {
    response: `🔍 **Dementia Symptoms**\n\n**Early Signs:**\n• Memory loss affecting daily life\n• Difficulty with planning\n• Confusion with time/place\n• Vision problems\n• Misplacing things\n\n**Later Symptoms:**\n• Personality changes\n• Communication difficulties\n• Need for assistance`,
    options: ["Risk Assessment", "When to See Doctor", "Support", "Main Menu"]
  },
  
  "stages of dementia": {
    response: `📊 **Dementia Stages**\n\n**Early Stage:** Mild symptoms, independent\n**Middle Stage:** More obvious symptoms, some help needed\n**Late Stage:** Severe symptoms, full-time care\n\nEarly detection allows better management.`,
    options: ["Early Detection", "Treatment Options", "Caregiver Help", "Main Menu"]
  },

  // ==================== PREVENTION ====================
  "prevent dementia": {
    response: `🛡️ **Dementia Prevention**\n\n**Proven Strategies:**\n• Regular physical exercise\n• Healthy diet (Mediterranean)\n• Mental stimulation\n• Social engagement\n• Quality sleep\n• Stress management\n\nUp to 40% risk reduction possible.`,
    options: ["Exercise Plan", "Diet Guide", "Brain Games", "Main Menu"]
  },
  
  "brain exercises": {
    response: `🏋️ **Brain Exercises**\n\n**Daily Activities:**\n• Puzzles and memory games\n• Learning new skills\n• Reading challenging material\n• Musical instruments\n• Strategy games\n\n**Recommendation:** 30 minutes daily.`,
    options: ["Start Exercises", "Memory Games", "Cognitive Training", "Main Menu"]
  },

  // ==================== ASSESSMENT (ONLY WHEN SPECIFICALLY ASKED) ====================
  "take assessment": {
    response: `🤖 **AI Dementia Assessment**\n\nOur assessment evaluates:\n• Memory function\n• Cognitive abilities\n• Risk factors\n\n**Takes 15-20 minutes with instant results.**\n\nRedirecting to assessment page...`,
    redirect: "/assessment"
  },

  // ==================== DOCTOR (ONLY WHEN SPECIFICALLY ASKED) ====================
  "find doctor": {
    response: `👨‍⚕️ **Doctor Consultation**\n\nFinding the right specialist for:\n• Comprehensive evaluation\n• Personalized treatment\n• Ongoing care\n\nRedirecting to doctor directory...`,
    redirect: "/services/doctors"
  },

  // ==================== GENERAL CHAT ====================
  "hi": {
    response: `👋 **Welcome to NeuroCare AI!**\n\nI specialize in early dementia detection and brain health. How can I help you today?`,
    options: ["Take Assessment", "Learn About Dementia", "Find Doctor", "Ask Question"]
  },
  
  "default": {
    response: `🧠 **NeuroCare AI Assistant**\n\nI can help you with:\n• Dementia risk assessment\n• Symptoms information\n• Prevention strategies\n• Doctor consultations\n\nWhat would you like to know?`,
    options: ["Take Assessment", "Learn Basics", "Find Help", "Ask Question"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [optionsCollapsed, setOptionsCollapsed] = useState(true); // Start collapsed
  const chatEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const navigate = useNavigate();

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen) {
      initializeChat();
    }
  }, [isOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const simulateTyping = async (callback, delay = 800) => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, delay));
    setIsTyping(false);
    callback();
  };

  const initializeChat = () => {
    setMessages([{ 
      text: `👋 **Welcome to NeuroCare AI!**\n\nI specialize in early dementia detection and brain health. How can I help you today?`,
      sender: "bot", 
      options: ["Take Assessment", "Learn About Dementia", "Find Doctor", "Ask Question"],
      timestamp: new Date()
    }]);
    setUserInput("");
    setOptionsCollapsed(true); // Options start collapsed
  };

  // SMART RESPONSE FINDER - FIXED TO GIVE PROPER ANSWERS
  const findResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    console.log("User message:", message); // Debug log
    
    // First: Check for exact matches with proper answers
    if (message.includes("low risk")) return neuroCareKnowledge["low risk"];
    if (message.includes("medium risk")) return neuroCareKnowledge["medium risk"];
    if (message.includes("high risk")) return neuroCareKnowledge["high risk"];
    if (message.includes("what is dementia")) return neuroCareKnowledge["what is dementia"];
    if (message.includes("symptoms") || message.includes("signs")) return neuroCareKnowledge["dementia symptoms"];
    if (message.includes("stage")) return neuroCareKnowledge["stages of dementia"];
    if (message.includes("prevent")) return neuroCareKnowledge["prevent dementia"];
    if (message.includes("exercise") || message.includes("brain game")) return neuroCareKnowledge["brain exercises"];
    
    // Second: Only redirect for SPECIFIC requests
    if (message.includes("take assessment") || message.includes("start test")) {
      return neuroCareKnowledge["take assessment"];
    }
    if (message.includes("find doctor") || message.includes("book appointment")) {
      return neuroCareKnowledge["find doctor"];
    }
    
    // Third: General matches
    if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
      return neuroCareKnowledge["hi"];
    }
    
    // Default: Never redirect automatically
    return neuroCareKnowledge["default"];
  };

  const handleUserMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    setUserInput("");
    
    // Add user message
    setMessages(prev => [...prev, { 
      text: userMessage, 
      sender: "user",
      timestamp: new Date()
    }]);

    await simulateTyping(() => {
      const response = findResponse(userMessage);
      
      console.log("Selected response:", response); // Debug log
      
      // Handle redirects ONLY for very specific cases
      if (response.redirect && (
          userMessage.toLowerCase().includes("take assessment") ||
          userMessage.toLowerCase().includes("find doctor") ||
          userMessage.toLowerCase().includes("book appointment")
      )) {
        setMessages(prev => [...prev, { 
          text: response.response, 
          sender: "bot",
          timestamp: new Date()
        }]);
        setTimeout(() => navigate(response.redirect), 1500);
        return;
      }
      
      // Normal response with proper information
      setMessages(prev => [...prev, { 
        text: response.response, 
        sender: "bot",
        timestamp: new Date(),
        options: response.options
      }]);
      setOptionsCollapsed(true); // Keep options collapsed after new message
    });
  };

  const handleOptionClick = async (optionText) => {
    const response = findResponse(optionText);
    
    // Add user's selection
    setMessages(prev => [...prev, { 
      text: optionText, 
      sender: "user",
      timestamp: new Date()
    }]);

    await simulateTyping(() => {
      // Handle redirects only for specific option clicks
      if (response.redirect && optionText.includes("Assessment")) {
        setMessages(prev => [...prev, { 
          text: response.response, 
          sender: "bot",
          timestamp: new Date()
        }]);
        setTimeout(() => navigate(response.redirect), 1500);
        return;
      }
      
      if (response.redirect && optionText.includes("Doctor")) {
        setMessages(prev => [...prev, { 
          text: response.response, 
          sender: "bot",
          timestamp: new Date()
        }]);
        setTimeout(() => navigate(response.redirect), 1500);
        return;
      }
      
      // Normal response
      setMessages(prev => [...prev, { 
        text: response.response, 
        sender: "bot",
        timestamp: new Date(),
        options: response.options
      }]);
      setOptionsCollapsed(true); // Keep options collapsed
    });
  };

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleRestart = () => initializeChat();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleUserMessage();
  };

  const toggleOptionsCollapse = () => {
    setOptionsCollapsed(!optionsCollapsed);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button - NOW CIRCLE */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="group relative bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Open NeuroCare AI Assistant"
        >
          {/* Your Logo - Replace with your image path */}
          <img 
            src="/assets/logo/logo.png" alt="NeuroCare" className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="text-2xl hidden">💬</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="w-96 h-[600px] bg-gradient-to-br from-gray-50 to-blue-50/30 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-white/20 backdrop-blur-sm"
        >
          {/* Header - SKY BLUE BACKGROUND */}
          <div className="bg-gradient-to-r from-sky-600 to-sky-600 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Your Logo in Header */}
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/20">
                    <img 
                         src="/assets/logo/logo.png" 
                         alt="NeuroCare" 
                         className="w-full h-full object-cover"
                         onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="text-lg hidden">🧠</span>
                </div>

                <div>
                  <h3 className="font-bold text-lg">NeuroCare AI</h3>
                  <p className="text-blue-100 text-sm">Early Dementia Detection</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleRestart}
                  className="text-xs bg-white/20 px-2 py-1 rounded-lg hover:bg-white/30 transition-all"
                >
                  Restart
                </button>
                <button
                  onClick={handleClose}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container - TRANSPARENT */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-transparent">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.sender === "bot" ? '' : 'flex-row-reverse'}`}>
                {message.sender === "bot" && (
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/20">
                        <img 
                            src="/assets/logo/logo.png" 
                            alt="NeuroCare" 
                            className="w-8 h-8 object-cover"
                             onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block';
                            }}
                         />
                        <span className="hidden">NC</span>
                    </div>
)}
                
                <div className={`flex flex-col max-w-[85%] ${message.sender === "bot" ? 'items-start' : 'items-end'}`}>
                  <div className={`flex items-center gap-2 mb-1 ${message.sender === "bot" ? '' : 'flex-row-reverse'}`}>
                    <span className="text-xs text-gray-500 font-medium">
                      {message.sender === "bot" ? 'NeuroCare AI' : 'You'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  
                  <div className={`p-4 rounded-2xl max-w-full ${
                    message.sender === "bot" 
                      ? "bg-white/90 text-gray-800 rounded-tl-none border border-gray-100" 
                      : "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-none"
                  }`}>
                    <div className="whitespace-pre-line text-sm">
                      {message.text.split('\n').map((line, i) => (
                        <p key={i} className={
                          line.startsWith('**') ? 'font-semibold text-gray-900 mt-3 first:mt-0' : 
                          line.startsWith('•') ? 'ml-4 text-gray-700 mt-1' : 'text-gray-700 mt-2 first:mt-0'
                        }>
                          {line.replace(/\*\*/g, '')}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white/20">
                  <img 
                    src="/assets/logo/logo.png" alt="NC" className="w-6 h-6 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <span className="hidden">NC</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/90 rounded-2xl rounded-tl-none p-4 border border-gray-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Options Container - COLLAPSIBLE BY DEFAULT */}
          {messages[messages.length - 1]?.options && (
            <div className="border-t border-white/20 bg-white/50">
              <button
                onClick={toggleOptionsCollapse}
                className="w-full py-3 flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition-colors bg-white/80"
              >
                <span className="text-sm font-medium">
                  {optionsCollapsed ? 'Show Options' : 'Hide Options'}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${optionsCollapsed ? 'rotate-0' : 'rotate-180'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${
                optionsCollapsed ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
              }`}>
                <div className="p-4 pt-2">
                  <div className="grid gap-2">
                    {messages[messages.length - 1].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      >
                        <span className="flex-1 text-left">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Text Input */}
          <div className="p-4 border-t border-white/20 bg-white/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about dementia, symptoms, prevention..."
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleUserMessage}
                disabled={!userInput.trim() || isTyping}
                className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;