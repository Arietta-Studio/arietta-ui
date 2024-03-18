import { ErrorType } from './error';
import { LLMRoleType } from './llm';
import { BaseDataModel } from './meta';

/**
 *
 */
export interface ChatMessageError {
  body?: any;
  message: string;
  type: ErrorType;
}
export interface OpenAIFunctionCall {
  arguments?: string;
  name: string;
}

export interface ChatMessage extends BaseDataModel {
  /**
   * @title
   * @description
   */
  content: string;
  error?: any;
  //
  extra?: any;

  /**
   * replace with plugin
   * @deprecated
   */
  function_call?: OpenAIFunctionCall;
  name?: string;

  parentId?: string;

  plugin?: any;

  //
  quotaId?: string;
  /**
   *
   * @description
   */
  role: LLMRoleType;
  /**
   *
   */
  topicId?: string;
}

export type ChatMessageMap = Record<string, ChatMessage>;
