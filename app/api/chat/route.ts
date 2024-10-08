import { google } from "@ai-sdk/google";
import { type CoreMessage, streamText } from "ai";
export const runtime = 'edge';
export const preferredRegion = 'fra1';
export const maxDuration = 300;

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system: "You are a helpful assistant",
    messages,
  });

  return result.toAIStreamResponse();
}
