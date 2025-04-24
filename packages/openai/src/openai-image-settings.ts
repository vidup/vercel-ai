export const OPENAI_IMAGE_MODELS = ['dall-e-3', 'dall-e-2'] as const;

export type OpenAIImageModelId =
  | (typeof OPENAI_IMAGE_MODELS)[number]
  | (string & {});

// https://platform.openai.com/docs/guides/images
export const modelMaxImagesPerCall: Record<OpenAIImageModelId, number> = {
  'dall-e-3': 1,
  'dall-e-2': 10,
};

export interface OpenAIImageSettings {
  /**
Override the maximum number of images per call (default is dependent on the
model, or 1 for an unknown model).
   */
  maxImagesPerCall?: number;
}
