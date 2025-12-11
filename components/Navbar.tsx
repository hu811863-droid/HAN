import React, { useState } from 'react';
import { Eye, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: 'home' | 'result', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId?: string) => {
    setIsOpen(false);
    onNavigate('home', sectionId);
  };

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

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => handleNavClick()} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
          Eye Shape Finder
        </button>
        <button onClick={() => handleNavClick('shapes')} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
          Eye Shapes
        </button>
        <button onClick={() => handleNavClick('faq')} className="text-[#555555] hover:text-[#65a30d] font-medium transition-colors">
          FAQ
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-[#555555] hover:text-[#65a30d] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl shadow-lg md:hidden flex flex-col p-4 gap-4 z-40 border-t border-gray-100">
          <button onClick={() => handleNavClick()} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
            Eye Shape Finder
          </button>
          <button onClick={() => handleNavClick('shapes')} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
            Eye Shapes
          </button>
          <button onClick={() => handleNavClick('faq')} className="text-left text-[#555555] hover:text-[#65a30d] font-medium">
            FAQ
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;