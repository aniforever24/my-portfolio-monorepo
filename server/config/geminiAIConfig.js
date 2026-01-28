import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import SYSTEM_INSTRUCTION from "../utilis/aiData.js";

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const geminiModel = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview",
    systemInstruction: SYSTEM_INSTRUCTION
})

export default geminiModel;