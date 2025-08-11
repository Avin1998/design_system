import { apiClient, type ApiResponse } from './api';
import type { PatternStatus, DifficultyLevel } from '../constants';

export interface Pattern {
  id: string;
  name: string;
  image?: string;
  progress: number;
  status: PatternStatus;
  companies?: string[];
  rating?: number;
  difficulty?: DifficultyLevel;
  achieved?: boolean;
  nextTrack?: {
    name: string;
  };
}

export class PatternsService {
  static async getAllPatterns(): Promise<ApiResponse<Pattern[]>> {
    return apiClient.get<Pattern[]>('/patterns');
  }

  static async getPatternById(id: string): Promise<ApiResponse<Pattern>> {
    return apiClient.get<Pattern>(`/patterns/${id}`);
  }

  static async updatePattern(id: string, updates: Partial<Pattern>): Promise<ApiResponse<Pattern>> {
    return apiClient.patch<Pattern>(`/patterns/${id}`, updates);
  }

  static async searchPatterns(query: string): Promise<ApiResponse<Pattern[]>> {
    return apiClient.get<Pattern[]>(`/patterns/search?q=${encodeURIComponent(query)}`);
  }
}