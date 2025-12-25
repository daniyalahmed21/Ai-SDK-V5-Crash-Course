import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

const model = google('gemini-1.5-flash');

const prompt = 'What is the capital of France?';

const result = await generateText({
  model,
  prompt,
  maxOutputTokens: 50,
  system: 'You are a helpful assistant.',
});

console.log(result.text);
