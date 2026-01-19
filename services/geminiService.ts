
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTutorResponse = async (userPrompt: string, subject: string = 'General') => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are Lumina, a brilliant and friendly AI tutor specialized in ${subject}. 
        Keep your explanations concise, encouraging, and clear. 
        If the student is confused, break down the concept into simpler steps. 
        Always use markdown for formatting math or code blocks.`,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Can you try rephrasing?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of a technical hiccup. Please try again in a moment!";
  }
};
