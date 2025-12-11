import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = t.faqSection.items;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-[#333333] text-center mb-16 tracking-tight">
        {t.faqSection.title}
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