import OpenAI from "openai";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    return new Response(
      JSON.stringify({ reply: completion.choices[0].message.content }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Server Error:", error);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
