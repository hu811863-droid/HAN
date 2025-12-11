import React from 'react';
import { EyeAnalysisResult } from '../types';
import { Sparkles, CheckCircle2, Star, RefreshCw, Info, Glasses } from 'lucide-react';

interface ResultCardProps {
  result: EyeAnalysisResult;
  userImage?: string | null;
  onReset: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ result, userImage, onReset }) => {
  const percentage = (result.confidence * 100).toFixed(1);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-8 mb-20 animate-fade-in">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Identity Card (Visuals, Result, Action) */}
            <div className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-24">
                <div className="bg-white rounded-[24px] shadow-xl shadow-black/5 border border-gray-100 overflow-hidden p-5 flex flex-col items-center text-center relative z-10">
                    
                    {/* User Image Container */}
                    <div className="relative w-full aspect-square rounded-[20px] overflow-hidden mb-5 bg-gray-50 border border-gray-100 shadow-inner group">
                         {userImage ? (
                            <img 
                                src={userImage} 
                                alt="Analyzed Eye" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                         ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-50 flex-col gap-2">
                                <Sparkles size={48} className="opacity-50" />
                                <span className="text-xs font-medium text-gray-400">Image not saved</span>
                            </div>
                         )}
                         {/* Optional Badge - Green */}
                         <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#65a30d] px-2.5 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                            <Sparkles size={10} />
                            {percentage}% Match
                         </div>
                    </div>

                    {/* Result Header */}
                    <div className="mb-2 w-full">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#65a30d]/10 text-[#65a30d] text-xs font-bold tracking-wider uppercase mb-3">
                            My Analysis
                        </div>
                        <h3 className="text-2xl font-extrabold text-[#333333] leading-tight mb-4">
                            {result.shape} Eyes
                        </h3>
                    </div>

                    {/* Progress Bar Section - Green Gradient */}
                    <div className="w-full mb-6 px-1">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Confidence</span>
                            <span className="text-sm font-bold text-[#65a30d]">{percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div 
                                className="bg-gradient-to-r from-[#84cc16] to-[#65a30d] h-2 rounded-full transition-all duration-1000 ease-out shadow-sm shadow-[#65a30d]/20" 
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Actions Stack */}
                    <div className="w-full space-y-3">
                        {/* Primary Action - Green Button */}
                        <button 
                            onClick={onReset}
                            className="w-full py-3.5 px-6 bg-[#65a30d] hover:bg-[#4d7c0f] text-white rounded-[16px] font-semibold text-base shadow-lg shadow-[#65a30d]/25 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                        >
                            <RefreshCw size={18} />
                            Scan Another
                        </button>
                    </div>

                </div>
            </div>

            {/* Right Column: Detailed Content */}
            <div className="w-full flex-1 space-y-6">
                
                {/* 1. Analysis Card */}
                <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8">
                     <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-[#65a30d]/10 rounded-[12px] flex items-center justify-center text-[#65a30d]">
                            <Info size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-[#333333]">Why This Shape?</h4>
                     </div>
                     <p className="text-[#555555] text-lg leading-relaxed">
                        {result.description}
                     </p>
                </div>

                {/* 2. Key Features Card */}
                <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#65a30d]/10 rounded-[12px] flex items-center justify-center text-[#65a30d]">
                            <CheckCircle2 size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-[#333333]">Key Features</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {result.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 rounded-[16px] bg-[#f9f9f9] border border-gray-100 transition-colors hover:border-[#65a30d]/30 hover:bg-[#65a30d]/5">
                                <CheckCircle2 className="w-5 h-5 text-[#65a30d] mt-0.5 flex-shrink-0" />
                                <span className="text-[#555555] font-medium leading-snug">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Eyewear Recommendations Card */}
                <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-[#65a30d]/10 rounded-[12px] flex items-center justify-center text-[#65a30d]">
                            <Glasses size={22} />
                        </div>
                        <h4 className="text-xl font-bold text-[#333333]">Recommended Frames</h4>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {result.eyewearRecommendations?.map((rec, idx) => (
                             <div key={idx} className="group relative overflow-hidden bg-[#f9f9f9] border border-gray-100 rounded-[16px] p-5 hover:border-[#65a30d]/30 hover:bg-[#65a30d]/5 transition-all duration-300 flex flex-col items-center justify-center text-center h-full">
                                <span className="text-[#555555] font-semibold text-lg">{rec}</span>
                             </div>
                        )) || (
                          <div className="col-span-3 text-center text-gray-400 italic">Analysis for eyewear not available.</div>
                        )}
                    </div>
                </div>

                {/* 4. Makeup Tips Card - Rich Avocado Gradient */}
                <div className="bg-gradient-to-br from-[#65a30d] to-[#3f6212] rounded-[24px] shadow-xl shadow-[#65a30d]/20 p-8 text-white relative overflow-hidden">
                    {/* Decorative bg shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-white/20 rounded-[12px] backdrop-blur-sm flex items-center justify-center">
                                <Star size={22} className="fill-white text-white" />
                            </div>
                            <h4 className="text-xl font-bold">Styling Strategy</h4>
                        </div>
                        <div className="space-y-6">
                            {result.makeupTips.map((tip, idx) => (
                                 <div key={idx} className="flex gap-5 items-start">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#65a30d] font-bold flex items-center justify-center shadow-md mt-0.5">
                                        {idx + 1}
                                    </span>
                                    <p className="text-white/90 text-lg leading-relaxed font-medium">
                                        {tip}
                                    </p>
                                 </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ResultCard;