import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar
        appName: "NeuroCare",
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
        whyChooseTitle: "Why Choose <1>NeuroCare</1>",
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
              "NeuroCare's AI technology has revolutionized how we approach early dementia detection. The accuracy and early detection capabilities are unprecedented.",
            name: "Dr. Sarah Chen",
            role: "Neurologist, Stanford Medical Center",
          },
          williams: {
            quote:
              "Thanks to NeuroCare, we caught early signs that my doctor missed. Now I'm getting the care I need and my family has peace of mind.",
            name: "Margaret Williams",
            role: "Patient, Age 72",
          },
          rodriguez: {
            quote:
              "The clinical validation and accuracy of NeuroCare's AI model is remarkable. It's become an essential tool in our diagnostic process.",
            name: "Dr. Michael Rodriguez",
            role: "Chief of Neurology, Mayo Clinic",
          },
          cta: "Start Your Assessment Today",
        },

        // FAQ
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about NeuroCare's AI-powered dementia detection.",
          q1: {
            question: "Is NeuroCare's AI assessment safe to use at home?",
            answer: "Yes! NeuroCare's AI assessments are completely safe and designed for home use. All data is encrypted and HIPAA compliant."
          },
          q2: {
            question: "How long does the cognitive assessment take?",
            answer: "The assessment typically takes about 15 minutes and includes memory, speech, and cognitive function tasks."
          },
          q3: {
            question: "Can NeuroCare detect dementia early?",
            answer: "NeuroCare’s AI analyzes cognitive patterns to detect early signs of dementia. However, it is not a substitute for professional medical diagnosis."
          },
          q4: {
            question: "Is my personal data safe with NeuroCare?",
            answer: "Absolutely. All personal and health data is securely stored, encrypted, and only shared with authorized healthcare personnel if you consent."
          },
          q5: {
            question: "Do I need a doctor to interpret the results?",
            answer: "You can view your results directly through NeuroCare, but consulting a healthcare professional is recommended for personalized advice."
          },
          q6: {
            question: "Is NeuroCare suitable for all age groups?",
            answer: "NeuroCare is designed primarily for adults, especially those aged 50 and above, but younger adults can also use it for cognitive monitoring."
          },
          q7: {
            question: "How accurate is NeuroCare's AI?",
            answer: "NeuroCare's AI is clinically validated and trained on millions of data points, providing highly reliable early detection insights, but it does not replace professional medical advice."
          },
          q8: {
            question: "Can family members access my results?",
            answer: "Yes, you can securely share your results with family members or caregivers via the Family Dashboard, if you choose to do so."
          },
        },

        //Footer
        footer: {
            aboutTitle: "About NeuroCare",
            aboutDesc: "NeuroCare uses advanced AI to help detect early signs of dementia through simple at-home cognitive assessments.",
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
            heroTitleHighlight: "NeuroCare",
            heroSubtitle: "A simple platform for early detection of dementia using cognitive tests and AI-powered analysis. Smarter. Simpler. Sooner.",
            mindTitle: "The Mind Behind NeuroCare",
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
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;



