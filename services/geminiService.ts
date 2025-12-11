import { GoogleGenAI, Type, Schema } from "@google/genai";
import { EyeAnalysisResult } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Static data for low-latency, zero-token recommendations
// This ensures consistent, high-quality advice without consuming AI tokens.
const SHAPE_GUIDES: Record<string, { makeupTips: string[], eyewearRecommendations: string[] }> = {
  "Almond": {
    makeupTips: [
      "Apply a medium shade on the lid and a darker shade in the outer crease.",
      "Winged eyeliner complements this shape perfectly.",
      "Highlight the inner corner to open up the eyes."
    ],
    eyewearRecommendations: [
      "Cat-eye frames",
      "Rectangular shapes",
      "Geometric styles"
    ]
  },
  "Round": {
    makeupTips: [
      "Focus dark shadow on the outer top corner to elongate the eye.",
      "Keep the center of the lid light.",
      "Avoid heavy eyeliner on the bottom waterline."
    ],
    eyewearRecommendations: [
      "Square frames",
      "Rectangular frames",
      "Aviators"
    ]
  },
  "Monolid": {
    makeupTips: [
      "Create a gradient effect with shadow, darkest at the lash line.",
      "Tightline the upper waterline to define the shape.",
      "Use vertical gradient application to create dimension."
    ],
    eyewearRecommendations: [
      "Oversized frames",
      "Rectangular frames",
      "Wayfarer styles"
    ]
  },
  "Hooded": {
    makeupTips: [
      "Apply eyeshadow slightly above the natural crease so it's visible.",
      "Focus on tightlining the upper lash line.",
      "Use waterproof mascara to prevent transfer to the brow bone."
    ],
    eyewearRecommendations: [
      "Large frames",
      "Upswept styles",
      "Frames with high temples"
    ]
  },
  "Downturned": {
    makeupTips: [
      "Lift the outer corners with upward-angled eyeliner.",
      "Avoid heavy shadow on the lower outer lash line.",
      "Focus mascara on the center and inner lashes."
    ],
    eyewearRecommendations: [
      "Cat-eye frames",
      "Browline glasses",
      "Detailed upper rims"
    ]
  },
  "Upturned": {
    makeupTips: [
      "Apply dark shadow to the lower outer corner to balance the lift.",
      "Follow the natural lower lash line for eyeliner.",
      "Smudge liner on the lower lash line for a softer look."
    ],
    eyewearRecommendations: [
      "Pilot frames",
      "Oval shapes",
      "Rounded bottom frames"
    ]
  },
  "Wide-set": {
    makeupTips: [
      "Bring eyeshadow closer to the inner nose bridge.",
      "Line the inner corners completely.",
      "Keep the outer corners lighter to draw focus inward."
    ],
    eyewearRecommendations: [
      "Thick bridges",
      "Prominent brow bars",
      "Oversized frames"
    ]
  },
  "Close-set": {
    makeupTips: [
      "Highlight the inner corners with a shimmer shade.",
      "Concentrate dark colors on the outer V.",
      "Start eyeliner from the middle of the lid, not the inner corner."
    ],
    eyewearRecommendations: [
      "Clear bridges",
      "Outer-accented frames",
      "Rimless styles"
    ]
  },
  "Deep-set": {
    makeupTips: [
      "Use light, reflective shades on the mobile lid.",
      "Avoid very dark colors in the crease.",
      "Use volumizing mascara to bring lashes forward."
    ],
    eyewearRecommendations: [
      "Round frames",
      "Oval frames",
      "Thin rims"
    ]
  }
};

const DEFAULT_GUIDE = {
  makeupTips: ["Focus on enhancing your natural eye shape.", "Blend eyeshadow well for a seamless look.", "Use mascara to open up the eyes."],
  eyewearRecommendations: ["Classic oval frames", "Rectangular frames", "Browline styles"]
};

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

    // Optimized schema: Only ask for dynamic analysis data.
    // We offload static advice to client-side maps to save tokens and time.
    const schema: Schema = {
      type: Type.OBJECT,
      properties: {
        shape: {
          type: Type.STRING,
          description: "One of: Almond, Round, Monolid, Hooded, Downturned, Upturned, Wide-set, Close-set, Deep-set.",
        },
        confidence: {
          type: Type.NUMBER,
          description: "0 to 1.",
        },
        description: {
          type: Type.STRING,
          description: "Brief explanation of visible landmarks (e.g. 'Outer corner is higher than inner corner').",
        },
        features: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "Key visual traits (max 3).",
        },
      },
      required: ["shape", "description", "features", "confidence"],
    };

    // Using gemini-2.5-flash for maximum speed and efficiency
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: imageFile.type,
              data: base64Image,
            },
          },
          {
            text: "Identify the eye shape. Check horizontal axis (inner vs outer corner height) for Upturned/Downturned. Check crease visibility for Monolid/Hooded. Return JSON.",
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are an expert eye shape analyzer. Be precise and concise.",
      },
    });

    if (response.text) {
      const aiResult = JSON.parse(response.text);
      
      // Merge AI analysis with static expert guides
      const guide = SHAPE_GUIDES[aiResult.shape] || DEFAULT_GUIDE;
      
      return {
        ...aiResult,
        makeupTips: guide.makeupTips,
        eyewearRecommendations: guide.eyewearRecommendations
      } as EyeAnalysisResult;
    } else {
      throw new Error("No analysis result returned from the model.");
    }
  } catch (error) {
    console.error("Error analyzing eye shape:", error);
    throw error;
  }
};