import { apiClient, type ApiResponse } from './api';

export interface Track {
  id: string;
  name: string;
  description?: string;
  patterns: string[];
  progress: number;
  completed: boolean;
}

export class TracksService {
  static async getAllTracks(): Promise<ApiResponse<Track[]>> {
    return apiClient.get<Track[]>('/tracks');
  }

  static async getTrackById(id: string): Promise<ApiResponse<Track>> {
    return apiClient.get<Track>(`/tracks/${id}`);
  }

  static async createTrack(track: Omit<Track, 'id'>): Promise<ApiResponse<Track>> {
    return apiClient.post<Track>('/tracks', track);
  }

  static async updateTrack(id: string, updates: Partial<Track>): Promise<ApiResponse<Track>> {
    return apiClient.patch<Track>(`/tracks/${id}`, updates);
  }

  static async deleteTrack(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete<void>(`/tracks/${id}`);
  }
}