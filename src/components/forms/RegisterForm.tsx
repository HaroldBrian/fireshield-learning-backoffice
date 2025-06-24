import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { RegisterRequest } from '@/types';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

const schema = yup.object({
  first_name: yup
    .string()
    .required('Le prénom est requis'),
  last_name: yup
    .string()
    .required('Le nom est requis'),
  email: yup
    .string()
    .email('Adresse email invalide')
    .required('L\'email est requis'),
  password: yup
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule')
    .matches(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule')
    .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
    .required('Le mot de passe est requis'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas')
    .required('La confirmation du mot de passe est requise'),
});

type FormData = RegisterRequest & { confirmPassword: string };

const RegisterForm: React.FC = () => {
  const { register: registerUser } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const { confirmPassword, ...registerData } = data;
      await registerUser(registerData);
    } catch (error) {
      // L'erreur est gérée dans le hook useAuth
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          {...register('first_name')}
          type="text"
          label="Prénom"
          placeholder="John"
          icon={<User className="w-4 h-4" />}
          error={errors.first_name?.message}
          fullWidth
        />

        <Input
          {...register('last_name')}
          type="text"
          label="Nom"
          placeholder="Doe"
          icon={<User className="w-4 h-4" />}
          error={errors.last_name?.message}
          fullWidth
        />
      </div>

      <Input
        {...register('email')}
        type="email"
        label="Adresse email"
        placeholder="votre@email.com"
        icon={<Mail className="w-4 h-4" />}
        error={errors.email?.message}
        fullWidth
      />

      <div className="relative">
        <Input
          {...register('password')}
          type={showPassword ? 'text' : 'password'}
          label="Mot de passe"
          placeholder="••••••••"
          icon={<Lock className="w-4 h-4" />}
          error={errors.password?.message}
          fullWidth
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-secondary-400 hover:text-secondary-600"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <div className="relative">
        <Input
          {...register('confirmPassword')}
          type={showConfirmPassword ? 'text' : 'password'}
          label="Confirmer le mot de passe"
          placeholder="••••••••"
          icon={<Lock className="w-4 h-4" />}
          error={errors.confirmPassword?.message}
          fullWidth
        />
        <button
          type="button"
          className="absolute right-3 top-8 text-secondary-400 hover:text-secondary-600"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        fullWidth
        size="lg"
      >
        Créer mon compte
      </Button>
    </form>
  );
};

export default RegisterForm;