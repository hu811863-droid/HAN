export interface EyeAnalysisResult {
  shape: string;
  confidence: number;
  description: string;
  features: string[];
  makeupTips: string[];
  eyewearRecommendations: string[];
}

export interface EyeShapeInfo {
  name: string;
  description: string;
  imageUrl: string;
}