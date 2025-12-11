import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How exactly does the AI determine my eye shape?',
      answer: "Our smart AI scans your photo for specific facial landmarks—like the visibility of your crease, the angle of your outer corners, and the amount of iris visible. It compares these measurements against expert definitions to pinpoint your unique shape instantly."
    },
    {
      question: 'What are the main eye shape categories?',
      answer: "We analyze for the major architectural types: Almond, Round, Monolid, Hooded, Upturned, Downturned, Wide-set, Close-set, and Deep-set. Keep in mind, many people are a beautiful blend of these traits (e.g., 'Hooded Almond')!"
    },
    {
      question: 'What is the difference between Hooded and Monolid eyes?',
      answer: "It comes down to the crease! Hooded eyes have a visible crease that is tucked away under a fold of skin when looking straight ahead. Monolid eyes typically have a flat, smooth lid with no visible crease line. Both offer unique canvases for stunning makeup looks."
    },
    {
      question: 'Why does shape matter for my makeup routine?',
      answer: "Geometry is the secret to professional-looking makeup. Knowing your shape tells you exactly where to place your wing to 'lift' your face, or where to apply shadow to create depth. It stops you from fighting your features and starts helping you enhance them."
    },
    {
      question: 'Can this result help me choose the perfect glasses?',
      answer: "100%. Frame shopping becomes effortless when you know the rule of opposites. Round eyes often look best in angular, geometric frames, while sharper shapes shine in softer, curved glasses. Your result gives you the blueprint to balance your overall look."
    },
    {
      question: 'Is my eye shape permanent?',
      answer: "Mostly, yes—it's part of your DNA! However, time plays a role. As we age, skin elasticity changes, often making eyes appear more hooded or downturned over time. Re-checking your shape every few years ensures your styling strategy evolves with you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-[#333333] text-center mb-16 tracking-tight">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="group rounded-[12px] overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full flex items-center justify-between p-6 text-left transition-colors duration-300 ${
                openIndex === index ? 'bg-[#65a30d]/5 border-[#65a30d]/10' : 'bg-white hover:bg-gray-50 border border-gray-200'
              } border rounded-[12px]`}
            >
              <span className={`font-semibold text-lg ${openIndex === index ? 'text-[#65a30d]' : 'text-[#333333]'}`}>
                {faq.question}
              </span>
              <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-[#65a30d] text-white' : 'text-gray-400'}`}>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </button>
            
            <div 
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6 text-[#555555] leading-relaxed text-[16px] bg-white border-l border-r border-b border-gray-200 rounded-b-[12px] -mt-1 pt-7">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;