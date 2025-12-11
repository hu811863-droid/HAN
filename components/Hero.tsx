import React, { useState, useRef, useEffect } from 'react';
import { Upload, ScanLine, Loader2, AlertCircle, Trash2, RefreshCw, ShieldCheck, Camera, X } from 'lucide-react';
import { analyzeEyeShape } from '../services/geminiService';
import { EyeAnalysisResult } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onAnalysisComplete: (result: EyeAnalysisResult | null, image?: string | null) => void;
}

const Hero: React.FC<HeroProps> = ({ onAnalysisComplete }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const { t, language } = useLanguage();
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Camera cleanup
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  const stopCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError(t.hero.error);
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
      onAnalysisComplete(null, null); // Reset previous results
    }
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    onAnalysisComplete(null, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleScan = async () => {
    if (!selectedFile) {
      setError(t.hero.error);
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Pass the current language to the service
      const result = await analyzeEyeShape(selectedFile, language);
      // Pass both the result and the current preview URL
      onAnalysisComplete(result, previewUrl);
    } catch (err) {
      setError(t.hero.error);
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Camera Functions
  const startCamera = async () => {
    setError(null);
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera error:", err);
      setError("Unable to access camera. Please check permissions.");
      setIsCameraOpen(false);
    }
  };

  const closeCamera = () => {
    stopCameraStream();
    setIsCameraOpen(false);
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Match canvas size to video size
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const context = canvas.getContext('2d');
      if (context) {
        // Draw the video frame to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert to blob/file
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `selfie_${Date.now()}.jpg`, { type: 'image/jpeg' });
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
            setError(null);
            onAnalysisComplete(null, null);
            closeCamera();
          }
        }, 'image/jpeg', 0.95);
      }
    }
  };

  return (
    <div className="w-full max-w-[88%] mx-auto px-4 mt-6">
      {/* Background: Deep Olive Green - Slightly narrower and shorter */}
      <div className="bg-[#4d7c0f] bg-gradient-to-br from-[#5a8d13] to-[#3f6212] rounded-[32px] px-6 py-10 md:py-14 text-center shadow-xl shadow-[#3f6212]/20 relative overflow-hidden transition-all duration-500 border border-[#4d7c0f]">
        
        {/* Decorative background elements - Subtle curves */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#d9f99d] opacity-5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        {isCameraOpen ? (
          /* Camera UI Overlay */
          <div className="relative z-20 flex flex-col items-center justify-center animate-fade-in max-w-2xl mx-auto w-full">
             <div className="relative w-full aspect-[4/3] md:aspect-video bg-black rounded-[24px] overflow-hidden shadow-2xl border-4 border-white/10 mb-6">
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-full object-cover transform -scale-x-100"
                />
                <button 
                  onClick={closeCamera}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all"
                >
                  <X size={24} />
                </button>
                {/* Hidden canvas for capture */}
                <canvas ref={canvasRef} className="hidden" />
             </div>
             
             <div className="flex gap-4 items-center">
               <button 
                 onClick={capturePhoto}
                 className="h-16 w-16 rounded-full bg-white border-4 border-[#65a30d]/50 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-black/20"
                 aria-label="Take Photo"
               >
                 <div className="h-12 w-12 rounded-full bg-[#65a30d]" />
               </button>
             </div>
             <p className="mt-4 text-white/80 font-medium text-sm">{t.hero.cameraTip}</p>
          </div>
        ) : (
          /* Standard Upload UI */
          <>
            {/* Title: Keyword Rich for SEO */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-sm relative z-10 tracking-tight leading-tight">
              {t.hero.title}
              <span className="block text-2xl md:text-4xl mt-2 font-bold text-white/90">{t.hero.subtitle}</span>
            </h1>
            {/* Subtitle: Value Prop - Concise & Direct */}
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10 font-medium leading-relaxed">
              {t.hero.desc}
            </p>

            {/* Input Container - Unified White Box */}
            <div className="max-w-3xl mx-auto bg-white rounded-[26px] p-2 pl-4 flex flex-col md:flex-row items-center gap-2 shadow-lg relative z-10">
              
              {/* Upload Input Area - Left side */}
              <div 
                onClick={triggerFileInput}
                className="flex-1 w-full flex items-center gap-4 py-3 cursor-pointer hover:bg-gray-50 rounded-[20px] transition-colors group"
              >
                {/* Icon Circle - Light Green */}
                <div className="bg-[#f0fdf4] p-3 rounded-full text-[#65a30d] border border-[#dcfce7] group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Upload size={20} />
                </div>
                
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="font-bold truncate w-full text-left text-lg text-[#333333]">
                    {selectedFile ? selectedFile.name : t.hero.upload}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {selectedFile ? t.hero.ready : "JPG, PNG supported"}
                  </span>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*"
                />
              </div>

              {/* Action Buttons - Right side inside the white box */}
              <div className="flex items-center gap-2 w-full md:w-auto p-1 flex-shrink-0">
                {/* Scan Button - Rectangular - Now First/Front */}
                <button 
                    onClick={handleScan}
                    disabled={isAnalyzing || !selectedFile}
                    className="h-14 px-8 rounded-[20px] font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95 text-lg whitespace-nowrap shadow-md bg-[#3f6212] hover:bg-[#365314] text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isAnalyzing ? (
                    <>
                        <Loader2 className="animate-spin w-5 h-5" /> 
                        {t.hero.analyzing}
                    </>
                    ) : (
                    <>
                        <ScanLine className="w-5 h-5" /> 
                        {t.hero.analyze}
                    </>
                    )}
                </button>

                {/* Camera Button - Square - Now Second/Back */}
                <button 
                    onClick={startCamera}
                    disabled={isAnalyzing}
                    className="w-14 h-14 rounded-[20px] bg-[#3f6212] hover:bg-[#365314] text-white shadow-md transition-all flex items-center justify-center group flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Take a Selfie"
                >
                    <Camera size={24} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>

            </div>
          </>
        )}

        {/* Privacy Note - White/70 - Concise */}
        {!isCameraOpen && (
          <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm font-medium relative z-10 animate-fade-in">
            <ShieldCheck size={16} />
            <span>{t.hero.privacy}</span>
          </div>
        )}

        {/* Preview Area (Only show if Camera is closed) */}
        {previewUrl && !isCameraOpen && (
          <div className="mt-8 relative z-10 animate-fade-in-up flex flex-col items-center">
            <div className="inline-block p-2 bg-white rounded-[24px] border border-gray-100 shadow-md">
                <img 
                src={previewUrl} 
                alt="Eye shape analysis preview" 
                className="h-40 w-40 object-cover rounded-[20px]" 
                />
            </div>
            
            <div className="flex items-center gap-3 mt-5">
                <button
                    onClick={triggerFileInput}
                    disabled={isAnalyzing}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 text-[#333333] text-sm font-semibold rounded-full shadow-sm border border-gray-200 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <RefreshCw size={14} />
                    {t.hero.change}
                </button>
                <button
                    onClick={clearSelection}
                    disabled={isAnalyzing}
                    className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-red-50 text-red-500 text-sm font-semibold rounded-full shadow-sm border border-red-100 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Trash2 size={14} />
                    {t.hero.remove}
                </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 relative z-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-[12px] text-sm font-medium shadow-sm border border-red-100">
              <AlertCircle size={18} className="shrink-0" />
              <span>{error}</span>
            </div>
            
            {selectedFile && !isCameraOpen && (
               <button 
                 onClick={handleScan}
                 disabled={isAnalyzing}
                 className="flex items-center gap-2 px-6 py-3 bg-white text-[#65a30d] rounded-[12px] font-medium text-sm hover:bg-gray-50 shadow-md transition-all transform active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
               >
                 <RefreshCw size={18} />
                 {t.hero.tryAgain}
               </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Hero;