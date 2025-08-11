// TypeScript definitions for system design data

export interface SystemDesignTrack {
  id: string;
  name: string;
  description: string;
  difficulty: string;
  estimatedTime: string;
  prerequisites: string[];
}

export interface SystemDesignQuestion {
  id: string;
  question: string;
  hint?: string;
  placeholder?: string;
}

export declare const systemDesignTracks: SystemDesignTrack[];
export declare const systemDesignQuestions: Record<string, SystemDesignQuestion[]>;