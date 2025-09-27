import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AssessmentProvider } from "./context/AssessmentContext";
import './index.css';


createRoot(document.getElementById('root')).render(
    <AssessmentProvider>
        <App />
    </AssessmentProvider>
)
