import React, { useState } from 'react';
import { Eye, Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavigate: (view: 'home' | 'result', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleNavClick = (sectionId?: string) => {
    setIsOpen(false);
    onNavigate('home', sectionId);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'th', label: 'ไทย', flag: '🇹🇭' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md py-4 px-6 md:px-12 flex items-center justify-between shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Logo Area */}
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => handleNavClick()}
      >
        <div className="bg-[#65a30d] p-1.5 rounded-lg shadow-lg shadow-[#65a30d]/20 group-hover:scale-105 transition-transform duration-300">
          <Eye className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold text-[#333333] tracking-tight">EyeShapeAI</span>
      </div>

      <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick()} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
            {t.nav.finder}
          </button>
          <button onClick={() => handleNavClick('shapes')} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
            {t.nav.shapes}
          </button>
          <button onClick={() => handleNavClick('faq')} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
            {t.nav.faq}
          </button>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-[#555555] font-medium"
          >
            <Globe size={18} />
            <span className="uppercase text-sm">{language}</span>
          </button>

          {isLangOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)}></div>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 overflow-hidden animate-fade-in">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-medium flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      language === lang.code ? 'text-[#65a30d] bg-[#f0fdf4]' : 'text-[#333333]'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    {lang.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#555555] hover:text-[#65a30d] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg md:hidden flex flex-col p-4 gap-4 z-40 border-t border-gray-100">
          <button onClick={() => handleNavClick()} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
            {t.nav.finder}
          </button>
          <button onClick={() => handleNavClick('shapes')} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
             {t.nav.shapes}
          </button>
          <button onClick={() => handleNavClick('faq')} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
             {t.nav.faq}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;