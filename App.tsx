import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ResultCard from './components/ResultCard';
import PrivacyPolicy from './components/PrivacyPolicy';
import { EyeAnalysisResult } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

type ViewState = 'home' | 'result' | 'privacy';

function AppContent() {
  const [analysisResult, setAnalysisResult] = useState<EyeAnalysisResult | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const { t } = useLanguage();

  // Handle Shared Results on Mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shareId = params.get('share');

    if (shareId) {
      try {
        const storedData = localStorage.getItem(`eyeshape_share_${shareId}`);
        if (storedData) {
          const parsed = JSON.parse(storedData);
          if (parsed && parsed.result) {
            setAnalysisResult(parsed.result);
            // Note: Images are not stored in localStorage to avoid quota limits
            setUserImage(null);
            setCurrentView('result');
          }
        }
      } catch (e) {
        console.error("Error loading shared result:", e);
      }
    }
  }, []);

  const handleAnalysisComplete = (result: EyeAnalysisResult | null, image?: string | null) => {
    if (result) {
      setAnalysisResult(result);
      if (image) setUserImage(image);
      setCurrentView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If null is passed (e.g. clear/reset), just clear data but maybe stay on home
      setAnalysisResult(null);
      setUserImage(null);
    }
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setUserImage(null);
    setCurrentView('home');
    // Clear share param if present
    if (window.location.search.includes('share=')) {
        window.history.pushState({}, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    
    // Determine scroll behavior
    if (sectionId) {
      // If there's a section ID, wait for render then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar onNavigate={(view, section) => handleNavigate(view as ViewState, section)} />
      
      <main className="pb-12">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Home onAnalysisComplete={handleAnalysisComplete} />
          </div>
        )}

        {currentView === 'result' && analysisResult && (
          <div className="animate-fade-in pt-6">
             <ResultCard 
                result={analysisResult} 
                userImage={userImage} 
                onReset={handleReset} 
             />
          </div>
        )}

        {currentView === 'privacy' && (
          <div className="pt-6">
            <PrivacyPolicy />
          </div>
        )}
      </main>

      {/* Footer - Compact, Horizontal, Clean */}
      <footer className="bg-white text-[#555555] py-8 border-t border-gray-200 text-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-[#333333]">
              <span className="w-6 h-6 bg-[#65a30d] rounded-[6px] flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </span>
              EyeShapeAI
            </div>
            <span className="hidden md:inline text-gray-300">|</span>
            <p className="text-[#555555]">© {new Date().getFullYear()} {t.footer.rights}</p>
          </div>

          {/* Right: Links & Contact Horizontal */}
          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <button onClick={() => handleNavigate('home')} className="hover:text-[#65a30d] transition-colors">{t.footer.links.home}</button>
            <button onClick={() => handleNavigate('home', 'shapes')} className="hover:text-[#65a30d] transition-colors">{t.footer.links.shapes}</button>
            <button onClick={() => handleNavigate('home', 'faq')} className="hover:text-[#65a30d] transition-colors">{t.footer.links.faq}</button>
            <button onClick={() => handleNavigate('privacy')} className="hover:text-[#65a30d] transition-colors">{t.footer.links.privacy}</button>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}