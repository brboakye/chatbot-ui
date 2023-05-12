export const DEFAULT_SYSTEM_PROMPT =
<<<<<<< HEAD
<<<<<<< HEAD
  process.env.DEFAULT_SYSTEM_PROMPT || "Welcome to CIRHMGPT, powered by OpenAI's ChatGPT. Respond using markdown.";
=======
  process.env.DEFAULT_SYSTEM_PROMPT ||
=======
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
>>>>>>> fa3f6e93bbe0d1ff9f208ddefae6fc7dfb738dc7
  "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";
>>>>>>> 8f8aac05ef303e73e4c1f1aa7392ca64bdf509c9

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
