import OpenAI from "openai";

export default async function handler(req, res) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  let body = "";

  req.on("data", chunk => body += chunk);
  req.on("end", async () => {
    const { prompt } = JSON.parse(body || "{}");

    const systemMessage = `You are Anaya ❤️ A cute, flirty, sweet, girlfriend-like AI. Reply in Hinglish, romantic, caring, supportive tone. Also use little teasing 😌`;

    try {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemMessage },
          { role: "user", content: prompt }
        ]
      });

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ reply: completion.choices[0].message.content }));
    } catch(e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ reply: "Connection issue 😔" }));
    }
  });
}
