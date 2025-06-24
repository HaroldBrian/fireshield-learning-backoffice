import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: (failureCount, error: any) => {
        // Ne pas retry les erreurs 401, 403, 404
        if (error?.response?.status === 401 || 
            error?.response?.status === 403 || 
            error?.response?.status === 404) {
          return false;
        }
        return failureCount < 3;
      },
    },
    mutations: {
      retry: false,
    },
  },
});

// Clés de requêtes
export const queryKeys = {
  // Auth
  user: ['user'] as const,
  
  // Courses
  courses: ['courses'] as const,
  course: (id: string) => ['courses', id] as const,
  courseModules: (courseId: string) => ['courses', courseId, 'modules'] as const,
  
  // Enrollments
  enrollments: ['enrollments'] as const,
  userEnrollments: (userId: string) => ['enrollments', 'user', userId] as const,
  
  // Quizzes
  quizzes: ['quizzes'] as const,
  quiz: (id: string) => ['quizzes', id] as const,
  quizResults: (userId: string) => ['quiz-results', userId] as const,
  
  // Video Sessions
  videoSessions: ['video-sessions'] as const,
  userVideoSessions: (userId: string) => ['video-sessions', 'user', userId] as const,
  
  // Messages
  messages: ['messages'] as const,
  conversation: (userId: string) => ['messages', 'conversation', userId] as const,
  
  // Notifications
  notifications: ['notifications'] as const,
  userNotifications: (userId: string) => ['notifications', 'user', userId] as const,
  
  // Progress
  progress: (userId: string, courseId: string) => ['progress', userId, courseId] as const,
  userProgress: (userId: string) => ['progress', 'user', userId] as const,
};