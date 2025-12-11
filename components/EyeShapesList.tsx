import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Custom SVG components to mimic the vector illustrations
// Theme: Avocado Green Style (#65a30d)
const EyeIllustration = ({ type }: { type: string }) => {
  // Base Eye Component
  const BaseEye = ({ 
    rotate = 0, 
    scaleY = 1, 
    className = "",
    translateX = 0,
    translateY = 0
  }: { 
    rotate?: number, 
    scaleY?: number, 
    className?: string,
    translateX?: number,
    translateY?: number
  }) => (
    <g transform={`translate(${translateX}, ${translateY}) rotate(${rotate} 50 25) scale(1 ${scaleY})`} className={className}>
      {/* Wrapper for Blink Animation - Scales Y axis without affecting parent rotation */}
      <g className="eye-blink origin-center" style={{ transformOrigin: '50px 25px' }}>
        {/* Sclera/Shape - White with soft stroke */}
        <path
          d="M10,25 Q50,-5 90,25 Q50,55 10,25 Z"
          fill="#FFFFFF"
          stroke="#e5e5e5"
          strokeWidth="1"
        />
        {/* Upper Lash Line - Dark Charcoal */}
        <path
          d="M10,25 Q50,-5 90,25"
          fill="none"
          stroke="#333333"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Iris - Cool Gray */}
        <circle cx="50" cy="25" r="11" fill="#71717a" />
        {/* Pupil - Black */}
        <circle 
          cx="50" 
          cy="25" 
          r="5" 
          fill="#000000" 
        />
        {/* Highlight - White */}
        <circle cx="54" cy="21" r="2.5" fill="white" opacity="0.9" />
      </g>
    </g>
  );

  // Render specific eye types based on props
  switch (type) {
    case 'Almond':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
            <BaseEye translateX={10} translateY={15} />
            <BaseEye translateX={110} translateY={15} />
        </svg>
      );
    case 'Round':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
            {/* Round eyes are more open (scaleY larger) */}
            <BaseEye translateX={10} translateY={15} scaleY={1.3} />
            <BaseEye translateX={110} translateY={15} scaleY={1.3} />
        </svg>
      );
    case 'Upturned':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
            {/* Rotate outer corners up */}
            <BaseEye translateX={10} translateY={20} rotate={-10} />
            <BaseEye translateX={110} translateY={20} rotate={10} />
            {/* Green dotted arrow indicators */}
            <path d="M5,45 L15,35" stroke="#65a30d" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            <path d="M215,45 L205,35" stroke="#65a30d" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#65a30d" />
                </marker>
            </defs>
        </svg>
      );
    case 'Downturned':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
             {/* Rotate outer corners down */}
            <BaseEye translateX={10} translateY={10} rotate={10} />
            <BaseEye translateX={110} translateY={10} rotate={-10} />
             {/* Green dotted arrow indicators pointing down */}
             <path d="M5,25 L15,35" stroke="#65a30d" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
             <path d="M215,25 L205,35" stroke="#65a30d" strokeWidth="2" strokeDasharray="3,3" markerEnd="url(#arrowhead)" />
        </svg>
      );
    case 'Wide-set':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
            {/* Increased spacing: Left at 0 (ends ~80), Right at 130 (starts ~140) - Approx */}
            <BaseEye translateX={0} translateY={15} />
            <BaseEye translateX={130} translateY={15} />
             {/* Center indicator */}
             <path d="M100,25 L120,25" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" />
             <path d="M96,25 L100,21 M96,25 L100,29" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" />
             <path d="M124,25 L120,21 M124,25 L120,29" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'Close-set':
      return (
        <svg viewBox="0 0 220 80" className="w-full h-full">
            {/* Decreased spacing */}
            <BaseEye translateX={20} translateY={15} />
            <BaseEye translateX={100} translateY={15} />
            {/* Center indicator - inward pressure */}
            <path d="M105,25 L115,25" stroke="#65a30d" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case 'Monolid':
        return (
          <svg viewBox="0 0 220 80" className="w-full h-full">
               {/* No crease, flatter top */}
              <g transform="translate(10, 15)">
                  <path d="M10,25 Q50,5 90,25 Q50,45 10,25 Z" fill="#FFFFFF" stroke="#e5e5e5" strokeWidth="1" />
                  <path d="M10,25 Q50,5 90,25" fill="none" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="50" cy="25" r="10" fill="#71717a" />
                  <circle cx="50" cy="25" r="5" fill="#000000" />
              </g>
              <g transform="translate(110, 15)">
                   <path d="M10,25 Q50,5 90,25 Q50,45 10,25 Z" fill="#FFFFFF" stroke="#e5e5e5" strokeWidth="1" />
                   <path d="M10,25 Q50,5 90,25" fill="none" stroke="#333333" strokeWidth="4" strokeLinecap="round" />
                   <circle cx="50" cy="25" r="10" fill="#71717a" />
                   <circle cx="50" cy="25" r="5" fill="#000000" />
              </g>
          </svg>
        );
    case 'Hooded':
        return (
          <svg viewBox="0 0 220 80" className="w-full h-full">
                {/* Heavy brow bone/fold indicated by extra line close to lash */}
              <BaseEye translateX={10} translateY={15} />
              <path d="M20,30 Q60,10 100,30" fill="none" stroke="#333333" strokeWidth="1.5" strokeOpacity="0.5" transform="translate(10, -5)" />
              
              <BaseEye translateX={110} translateY={15} />
              <path d="M20,30 Q60,10 100,30" fill="none" stroke="#333333" strokeWidth="1.5" strokeOpacity="0.5" transform="translate(110, -5)" />
          </svg>
        );
    case 'Deep-set':
        return (
          <svg viewBox="0 0 220 80" className="w-full h-full">
               {/* Similar to hooded but emphasizes depth with a darker, higher arch shadow/brow bone */}
              <BaseEye translateX={10} translateY={15} />
              {/* Brow bone shadow */}
              <path d="M10,15 Q50,0 90,15" fill="none" stroke="#333333" strokeWidth="3" strokeOpacity="0.3" />
              
              <BaseEye translateX={110} translateY={15} />
              <path d="M110,15 Q150,0 190,15" fill="none" stroke="#333333" strokeWidth="3" strokeOpacity="0.3" />
          </svg>
        );
    default:
      return null;
  }
};

const EyeShapesList: React.FC = () => {
  const { t } = useLanguage();

  // Keys to iterate over the shape items
  const shapeKeys = [
    'Almond', 'Round', 'Upturned', 'Downturned', 
    'Wide-set', 'Close-set', 'Monolid', 'Hooded', 'Deep-set'
  ];

  return (
    <section id="shapes" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#333333] tracking-tight mb-4">
          {t.shapesList.title}
        </h2>
        <p className="text-[#555555] text-lg max-w-2xl mx-auto">
          {t.shapesList.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {shapeKeys.map((key) => {
          const shapeData = t.shapesList.items[key];
          // Fallback if translation is missing (though it shouldn't be with the setup)
          if (!shapeData) return null;

          // Get the translated name for display (e.g. "Almond Eyes" -> "Almond" part translated)
          // We use the shapeNames map for the title part
          const displayName = t.shapeNames[key as keyof typeof t.shapeNames] || key;

          return (
            <div 
              key={key} 
              className="group bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-[#65a30d]/10 hover:border-[#65a30d]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* SVG Illustration Container */}
              <div className="h-28 w-full bg-[#f9f9f9] rounded-[16px] mb-6 flex items-center justify-center overflow-hidden border border-gray-50 group-hover:bg-white transition-colors">
                <div className="w-56 h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <EyeIllustration type={key} />
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <div className="inline-block px-3 py-1 bg-[#65a30d]/10 text-[#65a30d] text-xs font-bold rounded-full mb-3 uppercase tracking-wide">
                  {shapeData.match}
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  {displayName}
                </h3>
                <p className="text-[#555555] text-sm leading-relaxed">
                  {shapeData.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EyeShapesList;