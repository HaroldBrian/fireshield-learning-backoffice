import api from '@/lib/api';
import { 
  User, 
  UpdateProfileData, 
  ChangePasswordData,
  Enrollment,
  Certificate,
  ApiResponse,
  FileUploadResponse 
} from '@/types';

export const userService = {
  // Récupérer le profil utilisateur
  getProfile: async (): Promise<User> => {
    const response = await api.get<ApiResponse<User>>('/users/profile');
    return response.data.data;
  },

  // Mettre à jour le profil
  updateProfile: async (data: UpdateProfileData): Promise<User> => {
    const response = await api.put<ApiResponse<User>>('/users/profile', data);
    return response.data.data;
  },

  // Changer le mot de passe
  changePassword: async (data: ChangePasswordData): Promise<void> => {
    await api.put<ApiResponse<void>>('/users/change-password', data);
  },

  // Uploader un avatar
  uploadAvatar: async (file: File): Promise<FileUploadResponse> => {
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await api.post<ApiResponse<FileUploadResponse>>('/users/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data;
  },

  // Récupérer les inscriptions de l'utilisateur
  getEnrollments: async (): Promise<Enrollment[]> => {
    const response = await api.get<ApiResponse<Enrollment[]>>('/users/enrollments');
    return response.data.data;
  },

  // Récupérer les certificats
  getCertificates: async (): Promise<Certificate[]> => {
    const response = await api.get<ApiResponse<Certificate[]>>('/users/certificates');
    return response.data.data;
  },

  // Télécharger un certificat
  downloadCertificate: async (certificateId: number): Promise<Blob> => {
    const response = await api.get(`/users/certificates/${certificateId}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },

  // Supprimer le compte utilisateur
  deleteAccount: async (): Promise<void> => {
    await api.delete<ApiResponse<void>>('/users/account');
  },

  // Exporter les données utilisateur (RGPD)
  exportUserData: async (): Promise<Blob> => {
    const response = await api.get('/users/export-data', {
      responseType: 'blob',
    });
    return response.data;
  },
};