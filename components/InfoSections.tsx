import React from 'react';
import { Palette, Glasses, Heart, ScanFace } from 'lucide-react';

const InfoSections: React.FC = () => {
  const features = [
    {
      icon: <Palette className="w-8 h-8 text-[#65a30d]" />,
      title: "Master Your Makeup",
      description: "Learn the exact angles and techniques to make your specific eye shape pop."
    },
    {
      icon: <Glasses className="w-8 h-8 text-[#65a30d]" />,
      title: "Find Your Frames",
      description: "Discover glasses that balance your brow bone and highlight your best features."
    },
    {
      icon: <Heart className="w-8 h-8 text-[#65a30d]" />,
      title: "Boost Confidence",
      description: "Embrace your unique look with architectural styling tips designed just for you."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* CTA Section - Gradient from f9f9f9 to white */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] tracking-tight">
            Ready To Find Your Eye Shape?
          </h2>
          <p className="text-xl text-[#555555] leading-relaxed max-w-2xl mx-auto">
             Stop guessing. Instantly identify your eye shape in seconds with AI.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-[#65a30d] hover:bg-[#4d7c0f] text-white text-lg font-semibold px-10 py-4 rounded-[8px] shadow-lg shadow-[#65a30d]/30 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
          >
            <ScanFace className="w-5 h-5" />
            Reveal My Shape
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-[#f9f9f9]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">
            Why It Matters
          </h2>
          <p className="text-[#555555] max-w-xl mx-auto">
            Your eye shape is the blueprint for your style. Unlock personalized makeup and eyewear potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 bg-white p-4 rounded-[12px] border border-gray-100 shadow-sm group hover:border-[#65a30d]/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <div className="space-y-3 text-center md:text-left">
                <h3 className="text-xl font-bold text-[#333333]">
                  {feature.title}
                </h3>
                <p className="text-[#555555] leading-relaxed text-[15px]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InfoSections;