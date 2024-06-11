import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

export const runtime = 'edge';

export async function POST(req) {
        const { messages } = await req.json();

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: "say this is a test"
                },
                // ...messages
            ],
            stream: true,
            temperature: 1,
        });

        const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);
        // return NexxtResponse.json("Hello");
        
}