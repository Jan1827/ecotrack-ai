import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    console.log("API route called");

    console.log(
      "API Key exists:",
      !!process.env.GEMINI_API_KEY
    );

    const { electricity, transport, flights } =
      await req.json();

    console.log({ electricity, transport, flights });

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY!
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(`
      Electricity: ${electricity}
      Transport: ${transport}
      Flights: ${flights}

      Give 3 personalized carbon reduction tips.
    `);

    const text = result.response.text();

    console.log("Gemini response:", text);

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