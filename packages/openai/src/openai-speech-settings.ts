export const OPENAI_SPEECH_MODELS = [
  'tts-1',
  'tts-1-hd',
  'gpt-4o-mini-tts',
] as const;

export type OpenAISpeechModelId =
  | (typeof OPENAI_SPEECH_MODELS)[number]
  | (string & {});
