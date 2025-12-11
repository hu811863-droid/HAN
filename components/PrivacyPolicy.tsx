import React from 'react';
import { 
  Shield, 
  Lock, 
  EyeOff, 
  FileText, 
  Cookie, 
  Scale, 
  Users, 
  ScrollText, 
  Target, 
  Megaphone, 
  Link, 
  RefreshCw,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  const sections = [
    {
      icon: <FileText size={22} className="text-gray-400" />,
      title: t.privacyPolicy.introTitle,
      content: t.privacyPolicy.introDesc
    },
    {
      icon: <EyeOff size={22} className="text-gray-400" />,
      title: t.privacyPolicy.processingTitle,
      content: t.privacyPolicy.processingDesc
    },
    {
      icon: <ScrollText size={22} className="text-gray-400" />,
      title: t.privacyPolicy.logsTitle,
      content: t.privacyPolicy.logsDesc
    },
    {
      icon: <Cookie size={22} className="text-gray-400" />,
      title: t.privacyPolicy.cookiesTitle,
      content: t.privacyPolicy.cookiesDesc
    },
    {
      icon: <Target size={22} className="text-gray-400" />,
      title: t.privacyPolicy.dartTitle,
      content: t.privacyPolicy.dartDesc
    },
    {
      icon: <Megaphone size={22} className="text-gray-400" />,
      title: t.privacyPolicy.partnersTitle,
      content: t.privacyPolicy.partnersDesc
    },
    {
      icon: <Users size={22} className="text-gray-400" />,
      title: t.privacyPolicy.thirdPartyTitle,
      content: t.privacyPolicy.thirdPartyDesc
    },
    {
      icon: <MapPin size={22} className="text-gray-400" />,
      title: t.privacyPolicy.ccpaTitle,
      content: t.privacyPolicy.ccpaDesc
    },
    {
      icon: <Scale size={22} className="text-gray-400" />,
      title: t.privacyPolicy.gdprTitle,
      content: t.privacyPolicy.gdprDesc
    },
    {
      icon: <Shield size={22} className="text-gray-400" />,
      title: t.privacyPolicy.childrenTitle,
      content: t.privacyPolicy.childrenDesc
    },
    {
      icon: <Link size={22} className="text-gray-400" />,
      title: t.privacyPolicy.linksTitle,
      content: t.privacyPolicy.linksDesc
    },
    {
      icon: <RefreshCw size={22} className="text-gray-400" />,
      title: t.privacyPolicy.changesTitle,
      content: t.privacyPolicy.changesDesc
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-20 animate-fade-in">
      <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 md:p-12">
        
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-[#333333] mb-4 tracking-tight">{t.privacyPolicy.title}</h1>
          <p className="text-[#555555] text-lg">
            {t.privacyPolicy.subtitle}
          </p>
          <p className="mt-4 text-sm text-gray-400 font-medium uppercase tracking-wide">
            {t.privacyPolicy.lastUpdated}: {new Date().toLocaleDateString()}
          </p>
        </div>
        
        <div className="prose prose-lg text-[#555555] max-w-none">
          
          {/* Key Highlight Box: Commitment to Data Non-Retention */}
          <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-[16px] p-6 mb-10">
            <h3 className="text-[#65a30d] font-bold text-xl mb-2 flex items-center gap-2">
              <Shield size={24} className="flex-shrink-0" />
              {t.privacyPolicy.noRetentionTitle}
            </h3>
            <p className="text-[#333333] font-medium leading-relaxed">
              {t.privacyPolicy.noRetentionDesc}
            </p>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <section key={index} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-bold text-[#333333] mb-4 flex items-center gap-3">
                {section.icon}
                {section.title}
              </h2>
              <p className="leading-relaxed text-base text-[#555555]">
                {section.content}
              </p>
            </section>
          ))}

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;