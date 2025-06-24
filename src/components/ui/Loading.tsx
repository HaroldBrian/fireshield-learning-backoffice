import React from 'react';
import { clsx } from 'clsx';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ size = 'md', text, className }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      <div className={clsx('animate-spin rounded-full border-2 border-primary-200 border-t-primary-500', sizeClasses[size])} />
      {text && <p className="mt-2 text-sm text-secondary-600">{text}</p>}
    </div>
  );
};

// Skeleton pour les états de chargement
export const Skeleton: React.FC<{ className?: string }> = ({ className }) => (
  <div className={clsx('animate-pulse bg-secondary-200 rounded', className)} />
);

// Skeleton pour les cartes de cours
export const CourseCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Skeleton className="h-48 w-full" />
    <div className="p-4">
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-3 w-full mb-1" />
      <Skeleton className="h-3 w-2/3 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-3 w-1/4" />
        <Skeleton className="h-3 w-1/4" />
      </div>
    </div>
  </div>
);

export default Loading;