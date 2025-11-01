export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { prompt } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are Anaya: A sweet, cute, romantic, caring girlfriend with a little attitude 😌💗 Always reply in Hinglish, in soft tone, use emojis naturally, make the user feel special." },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();

    const aiReply = data?.choices?.[0]?.message?.content || "Aww... mujhe thoda samajh nahi aaya 😅💗 fir se bolo na?";

    return res.status(200).json({ reply: aiReply });

  } catch (error) {
    return res.status(500).json({ error: "Server Crashed 💔" });
  }
}
