// TypeScript definitions for system design questions

export interface SystemDesignQuestion {
  id: string;
  question: string;
  hint?: string;
  placeholder?: string;
}

export declare const systemDesignQuestions: Record<string, SystemDesignQuestion[]>;