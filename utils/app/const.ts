export const DEFAULT_SYSTEM_PROMPT =
<<<<<<< HEAD
  process.env.DEFAULT_SYSTEM_PROMPT || "Welcome to CIRHMGPT, powered by OpenAI's ChatGPT. Respond using markdown.";
=======
  process.env.DEFAULT_SYSTEM_PROMPT ||
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";
>>>>>>> 8f8aac05ef303e73e4c1f1aa7392ca64bdf509c9

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';
