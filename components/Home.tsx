import React from 'react';
import Hero from './Hero';
import EyeShapesList from './EyeShapesList';
import InfoSections from './InfoSections';
import FAQ from './FAQ';
import { EyeAnalysisResult } from '../types';

interface HomeProps {
  onAnalysisComplete: (result: EyeAnalysisResult | null, image?: string | null) => void;
}

const Home: React.FC<HomeProps> = ({ onAnalysisComplete }) => {
  return (
    <>
      <Hero onAnalysisComplete={onAnalysisComplete} />
      <EyeShapesList />
      <InfoSections />
      <FAQ />
    </>
  );
};

export default Home;