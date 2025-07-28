require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_AI_API,
});

const model = "models/gemini-2.5-pro";

exports.convert = async (req, res) => {
  try {
    const { code, targetLang } = req.body;
    if (!code || !targetLang) {
      return res
        .status(400)
        .json({ success: false, message: "All values are required!" });
    }

    const prompt = `${code} this is the code. Convert it into ${targetLang}. Only return the converted code without any explanation.`;

    const result = await ai.models.generateContent({
      model,
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const response = await result.text;
    const text = response;

    return res.status(200).json({
      success: true,
      convertedCode: text.trim(),
    });
  } catch (err) {
    console.error("Conversion Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
  }
};
