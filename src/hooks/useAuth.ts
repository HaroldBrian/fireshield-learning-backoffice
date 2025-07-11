import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import api from '@/lib/api';
import { 
  User, 
  AuthContextType, 
  LoginRequest, 
  RegisterRequest, 
  SocialAuthRequest,
  ConfirmResetPasswordRequest,
  VerifyOTPRequest,
  ApiResponse,
  AuthResponse 
} from '@/types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Vérifier le token au chargement
  useEffect(() => {
    const initAuth = async () => {
      const token = Cookies.get('auth-token');
      if (token) {
        try {
          const response = await api.get<ApiResponse<User>>('/auth/profile');
          setUser(response.data.data);
        } catch (error) {
          console.error('Erreur lors de la récupération du profil:', error);
          Cookies.remove('auth-token');
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      setLoading(true);
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
      const { user, token } = response.data.data;
      
      Cookies.set('auth-token', token, { expires: 7, secure: true, sameSite: 'strict' });
      setUser(user);
      toast.success('Connexion réussie !');
      router.push('/dashboard');
    } catch (error: any) {
      const message = error.message || 'Erreur lors de la connexion';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterRequest) => {
    try {
      setLoading(true);
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data);
      const { user, token } = response.data.data;
      
      Cookies.set('auth-token', token, { expires: 7, secure: true, sameSite: 'strict' });
      setUser(user);
      toast.success('Inscription réussie !');
      router.push('/dashboard');
    } catch (error: any) {
      const message = error.message || 'Erreur lors de l\'inscription';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithSocial = async (data: SocialAuthRequest) => {
    try {
      setLoading(true);
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/social', data);
      const { user, token } = response.data.data;
      
      Cookies.set('auth-token', token, { expires: 7, secure: true, sameSite: 'strict' });
      setUser(user);
      toast.success('Connexion réussie !');
      router.push('/dashboard');
    } catch (error: any) {
      const message = error.message || 'Erreur lors de la connexion sociale';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    Cookies.remove('auth-token');
    setUser(null);
    toast.success('Déconnexion réussie');
    router.push('/');
  };

  const refreshUser = async () => {
    try {
      const response = await api.get<ApiResponse<User>>('/auth/profile');
      setUser(response.data.data);
    } catch (error) {
      console.error('Erreur lors du rafraîchissement du profil:', error);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await api.post<ApiResponse<void>>('/auth/reset-password', { email });
      toast.success('Email de réinitialisation envoyé');
    } catch (error: any) {
      const message = error.message || 'Erreur lors de l\'envoi de l\'email';
      toast.error(message);
      throw error;
    }
  };

  const confirmResetPassword = async (data: ConfirmResetPasswordRequest) => {
    try {
      await api.post<ApiResponse<void>>('/auth/confirm-reset-password', data);
      toast.success('Mot de passe réinitialisé avec succès');
      router.push('/auth/login');
    } catch (error: any) {
      const message = error.message || 'Erreur lors de la réinitialisation';
      toast.error(message);
      throw error;
    }
  };

  const verifyOTP = async (data: VerifyOTPRequest) => {
    try {
      const response = await api.post<ApiResponse<AuthResponse>>('/auth/verify-otp', data);
      const { user, token } = response.data.data;
      
      Cookies.set('auth-token', token, { expires: 7, secure: true, sameSite: 'strict' });
      setUser(user);
      toast.success('Compte vérifié avec succès');
      router.push('/dashboard');
    } catch (error: any) {
      const message = error.message || 'Code OTP invalide';
      toast.error(message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      loginWithSocial,
      logout, 
      refreshUser,
      resetPassword,
      confirmResetPassword,
      verifyOTP
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};