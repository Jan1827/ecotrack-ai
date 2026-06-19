import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { electricity, transport, flights } =
      await req.json();

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY!
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(`
      Electricity Emissions: ${electricity} kg CO₂
      Transport Emissions: ${transport} kg CO₂
      Flight Emissions: ${flights} kg CO₂

      Give 3 personalized sustainability recommendations
      to reduce this user's carbon footprint.
      Keep the response concise and actionable.
    `);

    const text = result.response.text();

    return Response.json({
      insight: text,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    return Response.json({
      insight: "Could not generate AI insights.",
    });
  }
}