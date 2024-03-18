/**
 * LLM
 */
export enum LanguageModel {
  /**
   * GPT 3.5 Turbo
   */
  GPT3_5 = 'gpt-3.5-turbo',
  GPT3_5_16K = 'gpt-3.5-turbo-16k',
  /**
   * GPT 4
   */
  GPT4 = 'gpt-4',
  GPT4_32K = 'gpt-4-32k',
}

//
export interface LLMParams {
  /**
   *
   * @default 0
   */
  frequency_penalty?: number;
  /**
   *
   */
  max_tokens?: number;
  /**
   *
   * @default 0
   */
  presence_penalty?: number;
  /**
   *
   * @default 0.6
   */
  temperature?: number;
  /**
   *
   * @default 1
   */
  top_p?: number;
}

export type LLMRoleType = 'user' | 'system' | 'assistant' | 'function';

export interface LLMMessage {
  content: string;
  role: LLMRoleType;
}

export type LLMExample = LLMMessage[];
