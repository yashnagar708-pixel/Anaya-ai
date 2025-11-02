import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body || {};
  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const systemMessage = `You are Anaya ❤️ A cute, calm, teasing girlfriend-style assistant. Reply in Hinglish with love & slight attitude.`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: prompt }
      ]
    });

    const text = completion.choices[0].message.content;
    return res.status(200).json({ reply: text });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ reply: "Server error 😔" });
  }
}
