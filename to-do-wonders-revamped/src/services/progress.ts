import { apiClient, type ApiResponse } from './api';

export interface UserProgress {
  userId: string;
  patternId: string;
  completed: boolean;
  progress: number;
  timeSpent: number;
  attempts: number;
  lastAttempt?: Date;
}

export interface UserStats {
  totalPatterns: number;
  completedPatterns: number;
  totalTimeSpent: number;
  averageScore: number;
  streakDays: number;
}

export class ProgressService {
  static async getUserProgress(userId: string): Promise<ApiResponse<UserProgress[]>> {
    return apiClient.get<UserProgress[]>(`/progress/user/${userId}`);
  }

  static async getPatternProgress(userId: string, patternId: string): Promise<ApiResponse<UserProgress>> {
    return apiClient.get<UserProgress>(`/progress/user/${userId}/pattern/${patternId}`);
  }

  static async updateProgress(userId: string, patternId: string, progress: Partial<UserProgress>): Promise<ApiResponse<UserProgress>> {
    return apiClient.patch<UserProgress>(`/progress/user/${userId}/pattern/${patternId}`, progress);
  }

  static async getUserStats(userId: string): Promise<ApiResponse<UserStats>> {
    return apiClient.get<UserStats>(`/progress/user/${userId}/stats`);
  }
}