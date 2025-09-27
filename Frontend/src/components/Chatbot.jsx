import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Comprehensive Knowledge Base
const neuroCareKnowledge = {
  // ==================== RISK-RELATED RESPONSES (PROPER ANSWERS) ====================
  "low risk": {
    response: `✅ **Low Risk Results - Understanding Your Status**\n\n**What This Means:**\n• No significant current indicators of dementia\n• Lower probability of developing cognitive issues\n• Good cognitive health markers present\n\n**Recommended Actions:**\n• Continue brain-healthy lifestyle habits\n• Annual cognitive check-ups\n• Maintain mental and physical activities\n• Regular monitoring for any changes\n\n**Remember:** Low risk doesn't mean zero risk. Regular monitoring is still important.`,
    options: ["Learn Prevention", "Brain Exercises", "Take Assessment", "Main Menu"]
  },
  
  "medium risk": {
    response: `⚠️ **Medium Risk - Proactive Steps Needed**\n\n**What This Means:**\n• Some indicators present that need attention\n• Higher than average risk factors detected\n• Proactive management recommended\n\n**Immediate Actions:**\n1. Consult healthcare professional\n2. Comprehensive medical evaluation\n3. Lifestyle modifications\n4. Regular monitoring program\n\n**Key Focus Areas:**\n• Enhanced brain exercises\n• Diet improvements\n• Stress management\n• Medical follow-ups`,
    options: ["Find Doctor", "Lifestyle Plan", "Take Assessment", "Support Resources"]
  },
  
  "high risk": {
    response: `🚨 **High Risk - Important Next Steps**\n\n**What This Means:**\n• Significant indicators detected\n• Professional medical evaluation strongly recommended\n• Immediate attention needed\n\n**Critical Actions:**\n1. **Schedule doctor appointment immediately**\n2. Comprehensive neurological evaluation\n3. Discuss family history with specialist\n4. Develop intervention plan\n\n**Don't Panic:** Early detection and intervention can significantly improve outcomes.`,
    options: ["Find Specialist Now", "Emergency Contacts", "Take Assessment", "Support Groups"]
  },

  // ==================== ASSESSMENT REDIRECT (ONLY WHEN SPECIFICALLY ASKED) ====================
  "take assessment": {
    response: `🤖 **Dementia Risk Assessment**\n\nOur AI-powered assessment evaluates:\n• Memory function\n• Cognitive abilities\n• Risk factors\n• Lifestyle factors\n\n**Takes 15-20 minutes with instant results.**\n\nRedirecting you to the assessment page...`,
    redirect: "/assessment"
  },
  
  "start test": {
    response: `🔗 **Taking you to the assessment...**\n\nYou'll complete cognitive tasks and receive immediate AI-powered results.`,
    redirect: "/assessment"
  },

  // ==================== DOCTOR REDIRECT (ONLY WHEN SPECIFICALLY ASKED) ====================
  "doctor appointment": {
    response: `👨‍⚕️ **Doctor Consultation**\n\nRedirecting you to our specialist directory where you can:\n• Find dementia specialists\n• Book appointments\n• Read doctor reviews\n• Check availability`,
    redirect: "/servicedoctor"
  },

  // ==================== GENERAL DEMENTIA KNOWLEDGE ====================
  "what is dementia": {
    response: `🧠 **What is Dementia?**\n\nDementia describes symptoms affecting:\n• **Memory** - Recall and retention\n• **Thinking** - Reasoning and judgment\n• **Social Abilities** - Communication skills\n• **Daily Activities** - Routine tasks\n\n**Common Types**: Alzheimer's (60-80%), Vascular, Lewy Body`,
    options: ["Early Signs", "Types of Dementia", "Risk Factors", "Take Assessment"]
  },
  
  "dementia symptoms": {
    response: `🔍 **Dementia Symptoms**\n\n**Early Signs:**\n• Memory loss affecting daily life\n• Difficulty planning/problem-solving\n• Confusion with time/place\n• Vision/spatial issues\n• New language problems\n\n**When to Seek Help:**\nIf these symptoms persist and affect daily activities.`,
    options: ["Risk Assessment", "When to See Doctor", "Prevention Tips", "Main Menu"]
  },

  // ==================== PREVENTION & LIFESTYLE ====================
  "reduce dementia risk": {
    response: `🛡️ **Dementia Prevention Strategies**\n\n**Proven Methods:**\n• **Exercise**: 150 mins/week aerobic activity\n• **Diet**: Mediterranean style with brain-healthy foods\n• **Sleep**: 7-8 hours quality sleep nightly\n• **Mental Stimulation**: Learn new skills regularly\n• **Social Engagement**: Maintain strong connections\n\n**Risk Reduction**: Up to 40% possible with lifestyle changes`,
    options: ["Exercise Plan", "Diet Guide", "Brain Games", "Take Assessment"]
  },
  
  "brain exercises": {
    response: `🏋️ **Brain Training Exercises**\n\n**Daily Mental Workouts:**\n• Puzzles (crosswords, Sudoku)\n• Memory games and challenges\n• Learning new languages/skills\n• Musical instrument practice\n• Reading complex material\n• Strategy games (chess, cards)\n\n**Recommendation**: 30 minutes daily of varied activities`,
    options: ["Start Exercises", "Memory Games", "Cognitive Training", "Main Menu"]
  },

  // ==================== CHIT-CHAT & DEFAULT ====================
  "hi": {
    response: `👋 Hello! I'm NeuroCare AI, specializing in early dementia detection and brain health. How can I assist you today?`,
    options: ["Take Assessment", "Learn About Dementia", "Find Doctors", "Ask Question"]
  },
  
  "default": {
    response: `🧠 **NeuroCare AI Assistant**\n\nI specialize in early dementia detection and brain health. I can help you with:\n\n• Risk assessment and analysis\n• Dementia signs and symptoms\n• Prevention strategies\n• Doctor consultations\n\nHow can I assist you today?`,
    options: ["Take Assessment", "Learn Basics", "Find Help", "Ask Question"]
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [optionsCollapsed, setOptionsCollapsed] = useState(false);
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
      text: `🧠 **Welcome to NeuroCare AI Assistant**\n\nI specialize in early dementia detection and brain health. How can I help you today?`,
      sender: "bot", 
      options: ["Take Assessment", "Learn About Dementia", "Find Doctors", "Ask Question"],
      timestamp: new Date()
    }]);
    setUserInput("");
    setOptionsCollapsed(false);
  };

  // Smart response finder - PRIORITIZES PROPER ANSWERS OVER REDIRECTS
  const findResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();
    
    // First check for risk-related queries (give proper answers)
    if (message.includes("low risk")) return neuroCareKnowledge["low risk"];
    if (message.includes("medium risk")) return neuroCareKnowledge["medium risk"];
    if (message.includes("high risk")) return neuroCareKnowledge["high risk"];
    
    // Then check for specific assessment requests (only then redirect)
    if (message.includes("take assessment") || message.includes("start test") || 
        message.includes("begin test")) {
      return neuroCareKnowledge["take assessment"];
    }
    
    // Then check for specific doctor requests
    if (message.includes("doctor appointment") || message.includes("book doctor") ||
        message.includes("find doctor")) {
      return neuroCareKnowledge["doctor appointment"];
    }
    
    // Then check other knowledge base entries
    for (const [key, data] of Object.entries(neuroCareKnowledge)) {
      if (message.includes(key)) {
        return data;
      }
    }
    
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
      
      // Handle redirects ONLY for specific requests
      if (response.redirect && (userMessage.includes("take assessment") || 
          userMessage.includes("doctor appointment") || userMessage.includes("start test"))) {
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
      setOptionsCollapsed(false);
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
      
      // Normal response
      setMessages(prev => [...prev, { 
        text: response.response, 
        sender: "bot",
        timestamp: new Date(),
        options: response.options
      }]);
      setOptionsCollapsed(false);
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
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="group relative bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl w-16 h-16 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Open NeuroCare AI Assistant"
        >
          <span className="text-2xl">🧠</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="w-96 h-[600px] bg-gradient-to-br from-gray-50 to-blue-50/30 shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-white/20 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-lg">🤖</span>
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
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all"
                >
                  ×
                </button>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-3 ${message.sender === "bot" ? '' : 'flex-row-reverse'}`}>
                {message.sender === "bot" && (
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    NC
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
                      ? "bg-white text-gray-800 rounded-tl-none border border-gray-100" 
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
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  NC
                </div>
                <div className="flex items-center space-x-1 bg-white rounded-2xl rounded-tl-none p-4 border border-gray-100">
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

          {/* Options Container */}
          {messages[messages.length - 1]?.options && (
            <div className="border-t border-white/20 bg-white/50">
              <button
                onClick={toggleOptionsCollapse}
                className="w-full py-3 flex items-center justify-center gap-2 text-gray-700 hover:text-gray-900 transition-colors bg-white/80"
              >
                <span className="text-sm font-medium">Quick Options</span>
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
                placeholder="Type your question about dementia..."
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