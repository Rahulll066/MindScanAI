import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        appName: "MindScanAI",
        login: "Login",
        signup: "Signup",
        profile: "Profile",
        logout: "Logout",

        // Home Hero
        heroTitle: "Early Dementia Detection with <1>AI</1>",
        heroSubtitle:
          "A simple platform for early detection of dementia using cognitive tests and AI-powered analysis.",
        startAssessment: "Start Assessment",
        learnMore: "Learn More",

        // Why Choose
        whyChooseTitle: "Why Choose <1>MindScanAI</1>",
        features: {
          advancedAI: {
            title: "Advanced AI Analysis",
            desc: "State-of-the-art machine learning algorithms analyze cognitive patterns with unprecedented accuracy."
          },
          earlyDetection: {
            title: "Early Detection",
            desc: "Identify potential signs of dementia years before traditional methods, enabling proactive care."
          },
          hipaa: {
            title: "HIPAA Compliant",
            desc: "Complete data privacy and security compliance ensures your sensitive health information is protected."
          },
          familyDashboard: {
            title: "Family Dashboard",
            desc: "Share results with family members and caregivers through secure, easy-to-understand dashboards."
          },
          monitoring: {
            title: "Continuous Monitoring",
            desc: "Regular assessments track cognitive changes over time for comprehensive health insights."
          },
          validated: {
            title: "Clinically Validated",
            desc: "Backed by peer-reviewed research and validated in clinical trials with leading medical institutions."
          },
        },

        // How It Works
        howItWorks: "How It Works",
        steps: {
          assessment: {
            title: "Take Assessment",
            desc: "Complete our 15-minute cognitive assessment from the comfort of your home."
          },
          ai: {
            title: "AI Analysis",
            desc: "Our advanced AI analyzes your responses using patterns from millions of data points."
          },
          results: {
            title: "Get Results",
            desc: "Receive a detailed report with risk assessment and personalized recommendations."
          },
          action: {
            title: "Take Action",
            desc: "Work with healthcare providers using our insights for early intervention strategies."
          },
        },

        // Testimonials
        testimonials: {
          title: "What Our Users Say",
          chen: {
            quote:
              "MindScan's AI technology has revolutionized how we approach early dementia detection. The accuracy and early detection capabilities are unprecedented.",
            name: "Dr. Sarah Chen",
            role: "Neurologist, Stanford Medical Center",
          },
          williams: {
            quote:
              "Thanks to MindScan, we caught early signs that my doctor missed. Now I'm getting the care I need and my family has peace of mind.",
            name: "Margaret Williams",
            role: "Patient, Age 72",
          },
          rodriguez: {
            quote:
              "The clinical validation and accuracy of MindScan's AI model is remarkable. It's become an essential tool in our diagnostic process.",
            name: "Dr. Michael Rodriguez",
            role: "Chief of Neurology, Mayo Clinic",
          },
          cta: "Start Your Assessment Today",
        },

        // FAQ
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about MindScan's AI-powered dementia detection.",
          q1: {
            question: "Is MindScan's AI assessment safe to use at home?",
            answer: "Yes! MindScan's AI assessments are completely safe and designed for home use. All data is encrypted and HIPAA compliant."
          },
          q2: {
            question: "How long does the cognitive assessment take?",
            answer: "The assessment typically takes about 15 minutes and includes memory, speech, and cognitive function tasks."
          },
          q3: {
            question: "Can MindScan detect dementia early?",
            answer: "MindScan’s AI analyzes cognitive patterns to detect early signs of dementia. However, it is not a substitute for professional medical diagnosis."
          },
          q4: {
            question: "Is my personal data safe with MindScan?",
            answer: "Absolutely. All personal and health data is securely stored, encrypted, and only shared with authorized healthcare personnel if you consent."
          },
          q5: {
            question: "Do I need a doctor to interpret the results?",
            answer: "You can view your results directly through MindScan, but consulting a healthcare professional is recommended for personalized advice."
          },
          q6: {
            question: "Is MindScan suitable for all age groups?",
            answer: "MindScan is designed primarily for adults, especially those aged 50 and above, but younger adults can also use it for cognitive monitoring."
          },
          q7: {
            question: "How accurate is MindScan's AI?",
            answer: "MindScan's AI is clinically validated and trained on millions of data points, providing highly reliable early detection insights, but it does not replace professional medical advice."
          },
          q8: {
            question: "Can family members access my results?",
            answer: "Yes, you can securely share your results with family members or caregivers via the Family Dashboard, if you choose to do so."
          },
        },

        //Footer
        footer: {
            aboutTitle: "About MindScanAI",
            aboutDesc: "MindScanAI uses advanced AI to help detect early signs of dementia through simple at-home cognitive assessments.",
            quickLinksTitle: "Quick Links",
            links: {
                about: "About",
                assessment: "Take Assessment",
                profile: "Profile",
                contact: "Contact"
            },
            contactTitle: "Contact Us", 
            callUs: "Call us",
            email: "Email",
            rights: "All rights reserved."
        },

        //About page
        about: {
            heroTitle: "About",
            heroTitleHighlight: "MindScanAI",
            heroSubtitle: "A simple platform for early detection of dementia using cognitive tests and AI-powered analysis. Smarter. Simpler. Sooner.",
            mindTitle: "The Mind Behind MindScanAI",
            mindFeatures: {
                aiTitle: "Smart AI Analysis",
                aiDesc: "Detects early signs of dementia accurately using AI-powered cognitive patterns.",
                healthTitle: "Health Impact",
                healthDesc: "Empowers families and healthcare providers to take timely action for better outcomes."
            },
            whatYouGetTitle: "What You Get",
            whatYouGet: {
                aiResultsTitle: "Accurate AI Results",
                aiResultsDesc: "Our AI-powered platform provides precise insights into early signs of dementia.",
                privacyTitle: "Privacy & Security",
                privacyDesc: "All user data is kept completely private and secure throughout the process.",
                sharingTitle: "Optional Sharing",
                sharingDesc: "Users have full control to share their results with family or healthcare professionals."
            },
            whyProjectTitle: "Why This Project?",
            whyProjectDesc: "Dementia affects millions worldwide, yet diagnosis often comes late. Our mission is to make early detection accessible, affordable, and reliable through modern technology. By identifying signs early, we empower families and healthcare providers to take timely action.",
            approachTitle: "Our Approach",
            approachDesc: "We combine cognitive assessments (memory, reasoning, attention) with AI-driven analysis to detect patterns that may indicate early dementia. The platform is designed to be easy-to-use for all age groups, with interactive tests and instant insights.",
            keyBenefitsTitle: "Key Benefits",
            keyBenefits: {
                accessibleTitle: "Accessible Testing",
                accessibleDesc: "Simple assessments that can be done at home by anyone, anytime.",
                accurateTitle: "Accurate Insights",
                accurateDesc: "AI models trained on research data ensure reliable detection patterns.",
                affordableTitle: "Affordable & Scalable",
                affordableDesc: "Designed to reach communities with limited access to healthcare."
            },
            visionTitle: "Our Vision",
            visionDesc: "We believe technology can transform healthcare. By enabling early dementia detection, we aim to improve quality of life, reduce the burden on caregivers, and support healthcare professionals in making data-driven decisions.",
            cta: "Start Your Assessment"
        },
        //Assessment page
        assessment: {
            title: "Check Your Risk of Dementia",
            description: "Begin our scientifically designed assessment to analyze your cognitive health. The test takes about 15–20 minutes and includes multiple short activities.",
            button: "Start Assessment"
        },
        //Signup page
        signup: {
            title: "Create Account",
            success: "Signup completed! Redirecting...",
            error: "Signup failed!",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            password: "Password",
            button: "Sign Up",
            already: "Already have an account?",
            signIn: "Sign in"
        },
        //Login page
        login: {
            title: "Login",
            email: "Email",
            password: "Password",
            button: "Login",
            success: "Login successful! Redirecting...",
            error: "Login failed!",
            noAccount: "Don't have an account?",
            signUp: "Sign up"
        },
        //Profile page
        profile: {
            "title": "Profile",
            "edit": "Edit Profile",
            "save": "Save Profile",
            "age": "Age",
            "gender": "Gender",
            "notes": "Notes",
            "reminders": "Reminders"
        },
      },
    },
    hi: {
      translation: {
        // Navbar
        appName: "माइंडस्कैनएआई",
        login: "लॉगिन",
        signup: "साइन अप",
        profile: "प्रोफ़ाइल",
        logout: "लॉगआउट",

        // Home Hero
        heroTitle: "एआई के साथ प्रारंभिक डिमेंशिया का पता लगाना <1></1>",
        heroSubtitle:
          "संज्ञानात्मक परीक्षणों और एआई-संचालित विश्लेषण का उपयोग करके डिमेंशिया का प्रारंभिक पता लगाने के लिए एक सरल प्लेटफ़ॉर्म।",
        startAssessment: "परीक्षण शुरू करें",
        learnMore: "और जानें",

        // Why Choose
        whyChooseTitle: "क्यों चुनें <1>माइंडस्कैनएआई</1>",
        features: {
          advancedAI: {
            title: "उन्नत एआई विश्लेषण",
            desc: "आधुनिक मशीन लर्निंग एल्गोरिदम संज्ञानात्मक पैटर्न का अभूतपूर्व सटीकता से विश्लेषण करते हैं।"
          },
          earlyDetection: {
            title: "प्रारंभिक पहचान",
            desc: "पारंपरिक तरीकों से वर्षों पहले संभावित डिमेंशिया संकेतों की पहचान करें, जिससे सक्रिय देखभाल संभव हो।"
          },
          hipaa: {
            title: "HIPAA अनुपालन",
            desc: "पूर्ण डेटा गोपनीयता और सुरक्षा अनुपालन आपके संवेदनशील स्वास्थ्य जानकारी की रक्षा सुनिश्चित करता है।"
          },
          familyDashboard: {
            title: "परिवार डैशबोर्ड",
            desc: "परिणामों को सुरक्षित और आसानी से समझने योग्य डैशबोर्ड के माध्यम से परिवार और देखभालकर्ताओं के साथ साझा करें।          "
          },
          monitoring: {
            title: "निरंतर निगरानी",
            desc: "नियमित मूल्यांकन समय के साथ संज्ञानात्मक परिवर्तनों को ट्रैक करता है और व्यापक स्वास्थ्य अंतर्दृष्टि प्रदान करता है।"
          },
          validated: {
            title: "क्लिनिकली प्रमाणित",
            desc: "समीक्षित शोध और प्रमुख चिकित्सा संस्थानों में नैदानिक परीक्षणों द्वारा मान्य।"
          },
        },

        // How It Works
        howItWorks: "यह कैसे काम करता है",
        steps: {
          assessment: {
            title: "परीक्षण दें",
            desc: "घर बैठे हमारा 15-मिनट का संज्ञानात्मक परीक्षण पूरा करें।"
          },
          ai: {
            title: "एआई विश्लेषण",
            desc: "हमारा उन्नत एआई लाखों डेटा पॉइंट्स के पैटर्न का उपयोग करके आपकी प्रतिक्रियाओं का विश्लेषण करता है।"
          },
          results: {
            title: "परिणाम प्राप्त करें",
            desc: "जोखिम मूल्यांकन और व्यक्तिगत सिफारिशों के साथ एक विस्तृत रिपोर्ट प्राप्त करें।"
          },
          action: {
            title: "कार्रवाई करें",
            desc: "प्रारंभिक हस्तक्षेप रणनीतियों के लिए हमारे इनसाइट्स का उपयोग करके स्वास्थ्य प्रदाताओं के साथ कार्य करें।"
          },
        },

        // Testimonials
        testimonials: {
          title: "हमारे उपयोगकर्ता क्या कहते हैं",
          chen: {
            quote:
              "MindScan की एआई तकनीक ने प्रारंभिक डिमेंशिया पहचान के प्रति हमारे दृष्टिकोण को बदल दिया है। इसकी सटीकता और प्रारंभिक पहचान क्षमताएं अभूतपूर्व हैं।",
            name: "डॉ. सारा चेन",
            role: "न्यूरोलॉजिस्ट, स्टैनफोर्ड मेडिकल सेंटर",
          },
          williams: {
            quote:
              "MindScan की बदौलत हमने शुरुआती संकेत पकड़ लिए जो मेरे डॉक्टर से छूट गए थे। अब मुझे आवश्यक देखभाल मिल रही है और मेरे परिवार को सुकून है।",
            name: "मार्गरेट विलियम्स",
            role: "रोगी, आयु 72",
          },
          rodriguez: {
            quote:
              "MindScan के एआई मॉडल का क्लिनिकल सत्यापन और सटीकता उल्लेखनीय है। यह हमारे नैदानिक प्रक्रिया में एक आवश्यक उपकरण बन गया है।",
            name: "डॉ. माइकल रोड्रिगेज",
            role: "न्यूरोलॉजी प्रमुख, मेयो क्लिनिक",
          },
          cta: "आज ही अपना परीक्षण शुरू करें",
        },

        // FAQ
        faq: {
          title: "अक्सर पूछे जाने वाले प्रश्न",
          subtitle: "MindScan के एआई-संचालित डिमेंशिया पता लगाने के बारे में आपको जो कुछ जानना आवश्यक है।",
          q1: {
            question: "क्या MindScan का एआई परीक्षण घर पर सुरक्षित है?",
            answer: "हाँ! MindScan के AI परीक्षण पूरी तरह से सुरक्षित हैं और घर पर उपयोग के लिए डिज़ाइन किए गए हैं। सभी डेटा एन्क्रिप्टेड और HIPAA अनुपालन हैं।"
          },
          q2: {
            question: "संज्ञानात्मक परीक्षण में कितना समय लगता है?",
            answer: "परीक्षण में आमतौर पर लगभग 15 मिनट लगते हैं और इसमें स्मृति, भाषा और संज्ञानात्मक कार्य शामिल हैं।"
          },
          q3: {
            question: "क्या MindScan प्रारंभिक डिमेंशिया का पता लगा सकता है?",
            answer: "MindScan का AI प्रारंभिक डिमेंशिया संकेतों का पता लगाने के लिए संज्ञानात्मक पैटर्न का विश्लेषण करता है। हालांकि, यह पेशेवर चिकित्सा निदान का विकल्प नहीं है।"
          },
          q4: {
            question: "क्या मेरा व्यक्तिगत डेटा MindScan के साथ सुरक्षित है?",
            answer: "बिल्कुल। सभी व्यक्तिगत और स्वास्थ्य डेटा सुरक्षित रूप से संग्रहीत, एन्क्रिप्टेड होते हैं और केवल अधिकृत स्वास्थ्य कर्मियों के साथ साझा किया जाता है यदि आप सहमति देते हैं।"
          },
          q5: {
            question: "क्या मुझे परिणामों की व्याख्या के लिए डॉक्टर की आवश्यकता है?",
            answer: "आप सीधे MindScan के माध्यम से अपने परिणाम देख सकते हैं, लेकिन व्यक्तिगत सलाह के लिए स्वास्थ्य पेशेवर से परामर्श करना अनुशंसित है।"
          },
          q6: {
            question: "क्या MindScan सभी उम्र के लिए उपयुक्त है?",
            answer: "MindScan मुख्य रूप से वयस्कों के लिए डिज़ाइन किया गया है, विशेष रूप से 50 वर्ष और उससे ऊपर के लोगों के लिए, लेकिन युवा वयस्क भी इसे संज्ञानात्मक निगरानी के लिए उपयोग कर सकते हैं।"
          },
          q7: {
            question: "MindScan का AI कितना सटीक है?",
            answer: "MindScan का AI क्लिनिकली मान्य और लाखों डेटा पॉइंट्स पर प्रशिक्षित है, अत्यधिक विश्वसनीय प्रारंभिक पता लगाने की जानकारी प्रदान करता है, लेकिन यह पेशेवर चिकित्सा सलाह का विकल्प नहीं है।"
          },
          q8: {
            question: "क्या परिवार के सदस्य मेरे परिणाम देख सकते हैं?",
            answer: "हाँ, आप अपने परिणाम सुरक्षित रूप से परिवार के सदस्यों या देखभालकर्ताओं के साथ Family Dashboard के माध्यम से साझा कर सकते हैं, यदि आप ऐसा करना चुनते हैं।"
          },
        },
        //Footer
        footer: {
            aboutTitle: "माइंडस्कैनएआई के बारे में",
            aboutDesc: "MindScanAI उन्नत AI का उपयोग करके सरल घरेलू संज्ञानात्मक परीक्षणों के माध्यम से डिमेंशिया के शुरुआती संकेतों का पता लगाने में मदद करता है।",
            quickLinksTitle: "त्वरित लिंक",
            links: {
                about: "के बारे में",
                assessment: "परीक्षण दें",
                profile: "प्रोफ़ाइल",
                contact: "संपर्क करें"
            },
            contactTitle: "संपर्क करें",
            callUs: "हमें कॉल करें",
            email: "ईमेल",
            rights: "सर्वाधिकार सुरक्षित।"
        },
        //About page
        about: {
            heroTitle: "के बारे में",
            heroTitleHighlight: "माइंडस्कैनएआई",
            heroSubtitle: "संज्ञानात्मक परीक्षणों और एआई-संचालित विश्लेषण का उपयोग करके डिमेंशिया का प्रारंभिक पता लगाने के लिए एक सरल प्लेटफ़ॉर्म। स्मार्ट। सरल। जल्दी।",
            mindTitle: "माइंडस्कैनएआई के पीछे की सोच",
            mindFeatures: {
                aiTitle: "स्मार्ट एआई विश्लेषण",
                aiDesc: "एआई-संचालित संज्ञानात्मक पैटर्न का उपयोग करके डिमेंशिया के प्रारंभिक संकेतों का सटीक पता लगाता है।",
                healthTitle: "स्वास्थ्य प्रभाव",
                healthDesc: "परिवार और स्वास्थ्य प्रदाताओं को बेहतर परिणाम के लिए समय पर कार्रवाई करने में सक्षम बनाता है।"
            },
            whatYouGetTitle: "आपको क्या मिलता है",
            whatYouGet: {
                aiResultsTitle: "सटीक एआई परिणाम",
                aiResultsDesc: "हमारा एआई-संचालित प्लेटफ़ॉर्म डिमेंशिया के प्रारंभिक संकेतों पर सटीक अंतर्दृष्टि प्रदान करता है।",
                privacyTitle: "गोपनीयता और सुरक्षा",
                privacyDesc: "सारी उपयोगकर्ता जानकारी पूरी तरह सुरक्षित और गोपनीय रखी जाती है।",
                sharingTitle: "वैकल्पिक साझा करना",
                sharingDesc: "उपयोगकर्ता परिवार या स्वास्थ्य पेशेवरों के साथ अपने परिणाम साझा करने पर पूर्ण नियंत्रण रखते हैं।"
            },
            whyProjectTitle: "यह परियोजना क्यों?",
            whyProjectDesc: "डिमेंशिया दुनिया भर में लाखों लोगों को प्रभावित करता है, फिर भी निदान अक्सर देर से होता है। हमारा मिशन आधुनिक तकनीक के माध्यम से प्रारंभिक पहचान को सुलभ, किफायती और विश्वसनीय बनाना है। प्रारंभिक संकेतों की पहचान करके, हम परिवारों और स्वास्थ्य प्रदाताओं को समय पर कार्रवाई करने में सशक्त बनाते हैं।",
            approachTitle: "हमारा दृष्टिकोण",
            approachDesc: "हम संज्ञानात्मक मूल्यांकन (मेमोरी, तर्क, ध्यान) को एआई-संचालित विश्लेषण के साथ मिलाकर उन पैटर्न का पता लगाते हैं जो प्रारंभिक डिमेंशिया का संकेत दे सकते हैं। प्लेटफ़ॉर्म सभी आयु समूहों के लिए उपयोग में आसान बनाया गया है, जिसमें इंटरैक्टिव परीक्षण और त्वरित अंतर्दृष्टि शामिल हैं।",
            keyBenefitsTitle: "मुख्य लाभ",
            keyBenefits: {
                accessibleTitle: "सुलभ परीक्षण",
                accessibleDesc: "सरल मूल्यांकन जो कोई भी घर पर किसी भी समय कर सकता है।",
                accurateTitle: "सटीक अंतर्दृष्टि",
                accurateDesc: "अनुसंधान डेटा पर प्रशिक्षित एआई मॉडल विश्वसनीय पहचान पैटर्न सुनिश्चित करते हैं।",
                affordableTitle: "किफायती और स्केलेबल",
                affordableDesc: "ऐसे समुदायों तक पहुँचने के लिए डिज़ाइन किया गया जहाँ स्वास्थ्य देखभाल तक सीमित पहुँच है।"
            },
            visionTitle: "हमारी दृष्टि",
            visionDesc: "हम मानते हैं कि तकनीक स्वास्थ्य देखभाल को बदल सकती है। प्रारंभिक डिमेंशिया पहचान सक्षम करके, हम जीवन की गुणवत्ता में सुधार करने, देखभाल करने वालों के बोझ को कम करने, और स्वास्थ्य पेशेवरों को डेटा-आधारित निर्णय लेने में समर्थन देने का लक्ष्य रखते हैं।",
            cta: "अपना परीक्षण शुरू करें"
        },
        //Assessment page
        assessment: {
            title: "अपने डिमेंशिया जोखिम की जाँच करें",
            description: "अपनी संज्ञानात्मक स्वास्थ्य का विश्लेषण करने के लिए हमारे वैज्ञानिक रूप से डिज़ाइन किए गए परीक्षण की शुरुआत करें। यह परीक्षण लगभग 15–20 मिनट लेता है और इसमें कई छोटे-छोटे कार्य शामिल हैं।",
            button: "परीक्षण शुरू करें"
        },    
        //Signup page
        signup: {
            title: "खाता बनाएँ",
            success: "साइनअप पूरा हुआ! पुनः निर्देशित किया जा रहा है...",
            error: "साइनअप विफल!",
            firstName: "पहला नाम",
            lastName: "अंतिम नाम",
            email: "ईमेल",
            password: "पासवर्ड",
            button: "साइन अप",
            already: "क्या आपके पास पहले से खाता है?",
            signIn: "साइन इन करें"
        },
        //Login page
         login: {
            title: "लॉगिन",
            email: "ईमेल",
            password: "पासवर्ड",
            button: "लॉगिन करें",
            success: "लॉगिन सफल! पुनः निर्देशित कर रहे हैं...",
            error: "लॉगिन विफल!",
            noAccount: "क्या आपके पास खाता नहीं है?",
            signUp: "साइन अप करें"
        },
        //Profile page
        profile: {
            "notLoggedIn": "आप लॉगिन नहीं हैं।",
            "fetchError": "प्रोफ़ाइल लाने में विफल।",
            "updateError": "प्रोफ़ाइल अपडेट करने में विफल।",
            "loading": "प्रोफ़ाइल लोड हो रही है...",
            "age": "उम्र",
            "gender": "लिंग",
            "male": "पुरुष",
            "female": "महिला",
            "other": "अन्य",
            "notes": "नोट्स",
            "reminders": "रिमाइंडर",
            "notAvailable": "उपलब्ध नहीं",
            "select": "चुनें",
            "editButton": "प्रोफ़ाइल संपादित करें",
            "saveButton": "प्रोफ़ाइल सहेजें",
            "avatarAlt": "अवतार",
            "newAvatarAlt": "नया अवतार"
        },
      },
    },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;


