import api from '@/lib/api';
import { 
  Course, 
  CourseSession, 
  CourseContent, 
  CourseFilters, 
  CoursesResponse,
  ApiResponse, 
  PaginatedResponse,
  LearnerProgress,
  ProgressStats 
} from '@/types';

export const courseService = {
  // Récupérer tous les cours avec filtres
  getCourses: async (filters: CourseFilters = {}): Promise<PaginatedResponse<Course>> => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== '' && value !== 0) {
        params.append(key, value.toString());
      }
    });

    const response = await api.get<ApiResponse<PaginatedResponse<Course>>>(`/courses?${params}`);
    return response.data.data;
  },

  // Récupérer un cours par ID
  getCourse: async (id: number): Promise<Course> => {
    const response = await api.get<ApiResponse<Course>>(`/courses/${id}`);
    return response.data.data;
  },

  // Récupérer les sessions d'un cours
  getCourseSessions: async (courseId: number): Promise<CourseSession[]> => {
    const response = await api.get<ApiResponse<CourseSession[]>>(`/courses/${courseId}/sessions`);
    return response.data.data;
  },

  // Récupérer les contenus d'un cours
  getCourseContents: async (courseId: number): Promise<CourseContent[]> => {
    const response = await api.get<ApiResponse<CourseContent[]>>(`/courses/${courseId}/contents`);
    return response.data.data;
  },

  // S'inscrire à une session de cours
  enrollInSession: async (sessionId: number): Promise<void> => {
    const response = await api.post<ApiResponse<void>>(`/courses/sessions/${sessionId}/enroll`);
    return response.data.data;
  },

  // Marquer un contenu comme complété
  markContentCompleted: async (contentId: number): Promise<LearnerProgress> => {
    const response = await api.post<ApiResponse<LearnerProgress>>(`/courses/contents/${contentId}/complete`);
    return response.data.data;
  },

  // Récupérer la progression d'un utilisateur pour un cours
  getUserProgress: async (courseId: number): Promise<ProgressStats> => {
    const response = await api.get<ApiResponse<ProgressStats>>(`/courses/${courseId}/progress`);
    return response.data.data;
  },

  // Ajouter un cours aux favoris
  addToFavorites: async (courseId: number): Promise<void> => {
    await api.post<ApiResponse<void>>(`/courses/${courseId}/favorite`);
  },

  // Retirer un cours des favoris
  removeFromFavorites: async (courseId: number): Promise<void> => {
    await api.delete<ApiResponse<void>>(`/courses/${courseId}/favorite`);
  },

  // Récupérer les cours favoris
  getFavoriteCourses: async (): Promise<Course[]> => {
    const response = await api.get<ApiResponse<Course[]>>('/courses/favorites');
    return response.data.data;
  },

  // Récupérer les catégories
  getCategories: async (): Promise<string[]> => {
    const response = await api.get<ApiResponse<string[]>>('/courses/categories');
    return response.data.data;
  },

  // Rechercher des cours
  searchCourses: async (query: string): Promise<Course[]> => {
    const response = await api.get<ApiResponse<Course[]>>(`/courses/search?q=${encodeURIComponent(query)}`);
    return response.data.data;
  },
};