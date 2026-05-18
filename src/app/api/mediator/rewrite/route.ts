import { NextResponse } from "next/server";
import { generateCompassionateRewrite } from "@/services/openai";

export async function POST(request: Request) {
  const body = (await request.json()) as { text?: string };

  if (!body.text || body.text.trim().length < 3) {
    return NextResponse.json(
      { error: "A conversation fragment is required." },
      { status: 400 },
    );
  }

  const result = await generateCompassionateRewrite(body.text);
  return NextResponse.json(result);
}
