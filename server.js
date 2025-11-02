import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/api/chat", async (req, res) => {
  const userPrompt = req.body.prompt || "";

  // Personality tone
  const systemMessage = `You are Anaya ❤️ A cute, calm, loving, teasing girlfriend who talks sweet, sexy, flirty, supportive & emotionally caring. Reply in Hinglish.`;

  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userPrompt }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (e) {
    res.json({ reply: "Connection issue 😔 try again..." });
  }
});

app.listen(3000, () => console.log("✅ Server running on port 3000"));
