import { GoogleGenAI, Type, Schema } from "@google/genai";
import { EyeAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Helper to convert File to Base64
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the Data URL prefix (e.g., "data:image/jpeg;base64,")
      const base64Data = result.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const analyzeEyeShape = async (imageFile: File): Promise<EyeAnalysisResult> => {
  try {
    const base64Image = await fileToBase64(imageFile);

    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        shape: {
          type: Type.STRING,
          description: "The identified eye shape from the following list: Almond, Round, Monolid, Hooded, Downturned, Upturned, Wide-set, Close-set, Deep-set.",
        },
        confidence: {
          type: Type.NUMBER,
          description: "Confidence level of the analysis between 0 and 1.",
        },
        description: {
          type: Type.STRING,
          description: "A detailed description of why this eye shape fits the classification based on visible landmarks.",
        },
        features: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "List of key visual features identified (e.g., 'Visible crease', 'Outer corner lifts up', 'Prominent brow bone').",
        },
        makeupTips: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "3-4 short, actionable makeup tips specifically tailored for this eye shape.",
        },
        eyewearRecommendations: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "3 specific eyewear frame styles (e.g., 'Cat-eye', 'Round wire-rims', 'Geometric') that balance and flatter this eye shape.",
        },
      },
      required: ["shape", "description", "makeupTips", "features", "confidence", "eyewearRecommendations"],
    };

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: imageFile.type,
              data: base64Image,
            },
          },
          {
            text: "Analyze this image and identify the person's eye shape. Focus strictly on the eyes. Classify it as one of the following: Almond, Round, Monolid, Hooded, Downturned, Upturned, Wide-set, Close-set, or Deep-set. Return the result in JSON format.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are a professional makeup artist and facial anatomist. Your task is to accurately identify eye shapes from photos and provide helpful beauty advice. Be encouraging and precise.",
      },
    });

    if (response.text) {
      return JSON.parse(response.text) as EyeAnalysisResult;
    } else {
      throw new Error("No analysis result returned from the model.");
    }
  } catch (error) {
    console.error("Error analyzing eye shape:", error);
    throw error;
  }
};