# API Documentation

This document outlines all the APIs required by the frontend application. The API service layer is designed to be flexible and can easily integrate with any backend implementation.

## 📚 API Overview

The frontend expects the following API endpoints to be available. All endpoints should return JSON responses with consistent error handling.

## 🔧 Base Configuration

### Base URL
- **Development**: `http://localhost:3001`
- **Production**: Set via `VITE_API_BASE_URL` environment variable

### Request Headers
```json
{
  "Content-Type": "application/json"
}
```

### Response Format
All successful responses should follow this structure:
```typescript
{
  "data": T,           // Response data of type T
  "success": true,     // Always true for successful responses
  "message"?: string   // Optional success message
}
```

### Error Format
All error responses should follow this structure:
```typescript
{
  "message": string,   // Error description
  "status"?: number,   // HTTP status code
  "code"?: string      // Error code for programmatic handling
}
```

## 🎯 Patterns API

### GET /api/patterns
Retrieve all coding patterns.

**Response:**
```typescript
{
  "data": Pattern[],
  "success": true
}
```

**Pattern Interface:**
```typescript
interface Pattern {
  id: string;
  name: string;
  image?: string;
  progress: number;        // 0 to 1
  status: 'inactive' | 'active' | 'done';
  companies?: string[];
  rating?: number;         // 1 to 5
  difficulty?: 'easy' | 'medium' | 'hard';
  achieved?: boolean;
  nextTrack?: {
    name: string;
  };
}
```

### GET /api/patterns/:id
Retrieve a specific pattern by ID.

**Parameters:**
- `id` (string): Pattern identifier

**Response:**
```typescript
{
  "data": Pattern,
  "success": true
}
```

### PATCH /api/patterns/:id
Update a specific pattern.

**Parameters:**
- `id` (string): Pattern identifier

**Request Body:**
```typescript
{
  progress?: number;
  status?: 'inactive' | 'active' | 'done';
  // Other partial Pattern fields
}
```

**Response:**
```typescript
{
  "data": Pattern,
  "success": true
}
```

### GET /api/patterns/search
Search patterns by name or description.

**Query Parameters:**
- `q` (string): Search query

**Response:**
```typescript
{
  "data": Pattern[],
  "success": true
}
```

## 🛤 Tracks API

### GET /api/tracks
Retrieve all learning tracks.

**Response:**
```typescript
{
  "data": Track[],
  "success": true
}
```

**Track Interface:**
```typescript
interface Track {
  id: string;
  name: string;
  description?: string;
  patterns: string[];      // Array of pattern IDs
  progress: number;        // 0 to 1
  completed: boolean;
}
```

### GET /api/tracks/:id
Retrieve a specific track by ID.

**Parameters:**
- `id` (string): Track identifier

**Response:**
```typescript
{
  "data": Track,
  "success": true
}
```

### POST /api/tracks
Create a new learning track.

**Request Body:**
```typescript
{
  name: string;
  description?: string;
  patterns: string[];
}
```

**Response:**
```typescript
{
  "data": Track,
  "success": true
}
```

### PATCH /api/tracks/:id
Update a specific track.

**Parameters:**
- `id` (string): Track identifier

**Request Body:**
```typescript
{
  name?: string;
  description?: string;
  patterns?: string[];
  progress?: number;
  completed?: boolean;
}
```

**Response:**
```typescript
{
  "data": Track,
  "success": true
}
```

### DELETE /api/tracks/:id
Delete a specific track.

**Parameters:**
- `id` (string): Track identifier

**Response:**
```typescript
{
  "data": null,
  "success": true
}
```

## 📊 Progress API

### GET /api/progress/user/:userId
Retrieve all progress records for a user.

**Parameters:**
- `userId` (string): User identifier

**Response:**
```typescript
{
  "data": UserProgress[],
  "success": true
}
```

**UserProgress Interface:**
```typescript
interface UserProgress {
  userId: string;
  patternId: string;
  completed: boolean;
  progress: number;        // 0 to 1
  timeSpent: number;       // Time in seconds
  attempts: number;
  lastAttempt?: Date;
}
```

### GET /api/progress/user/:userId/pattern/:patternId
Retrieve progress for a specific pattern and user.

**Parameters:**
- `userId` (string): User identifier
- `patternId` (string): Pattern identifier

**Response:**
```typescript
{
  "data": UserProgress,
  "success": true
}
```

### PATCH /api/progress/user/:userId/pattern/:patternId
Update progress for a specific pattern and user.

**Parameters:**
- `userId` (string): User identifier
- `patternId` (string): Pattern identifier

**Request Body:**
```typescript
{
  completed?: boolean;
  progress?: number;
  timeSpent?: number;
  attempts?: number;
}
```

**Response:**
```typescript
{
  "data": UserProgress,
  "success": true
}
```

### GET /api/progress/user/:userId/stats
Retrieve aggregated statistics for a user.

**Parameters:**
- `userId` (string): User identifier

**Response:**
```typescript
{
  "data": UserStats,
  "success": true
}
```

**UserStats Interface:**
```typescript
interface UserStats {
  totalPatterns: number;
  completedPatterns: number;
  totalTimeSpent: number;      // Time in seconds
  averageScore: number;        // 0 to 1
  streakDays: number;
}
```

## 👤 User API (Future Implementation)

### GET /api/user/:id
Retrieve user profile information.

**Parameters:**
- `id` (string): User identifier

**Response:**
```typescript
{
  "data": {
    id: string;
    name: string;
    email: string;
    joinDate: Date;
    preferences: object;
  },
  "success": true
}
```

## 🔐 Authentication (Future Implementation)

### POST /api/auth/login
User authentication.

**Request Body:**
```typescript
{
  email: string;
  password: string;
}
```

**Response:**
```typescript
{
  "data": {
    token: string;
    user: User;
  },
  "success": true
}
```

## 📝 Error Codes

### Common Error Codes
- `NETWORK_ERROR`: Network connectivity issues
- `UNKNOWN_ERROR`: Unexpected errors
- `VALIDATION_ERROR`: Request validation failed
- `NOT_FOUND`: Resource not found
- `UNAUTHORIZED`: Authentication required
- `FORBIDDEN`: Access denied

### HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## 🔧 Implementation Notes

### API Client Configuration
The frontend includes a configurable API client (`src/services/api.ts`) with:
- Automatic timeout handling (30 seconds default)
- Request/response interceptors
- Error handling and formatting
- Type-safe request methods

### Environment Variables
Configure the API base URL using environment variables:
```env
VITE_API_BASE_URL=https://your-api-endpoint.com
```

### Rate Limiting
The frontend is designed to handle rate limiting. Implement appropriate rate limiting on the backend:
- User-based rate limiting
- Endpoint-specific limits
- Proper error responses with retry information

### Caching
Consider implementing caching strategies:
- Pattern data (relatively static)
- User progress (cache with invalidation)
- Track information (moderate caching)

### Real-time Updates (Future)
For real-time progress updates, consider implementing:
- WebSocket connections
- Server-Sent Events (SSE)
- Polling fallback

## 🚀 Getting Started

1. **Set up your backend** to implement these endpoints
2. **Configure the base URL** in your environment variables
3. **Test the integration** using the provided TypeScript interfaces
4. **Handle errors appropriately** using the standardized error format

The frontend is ready to integrate with any backend that implements this API specification.

---

For questions or clarifications about the API requirements, please refer to the frontend service implementations in `src/services/`.