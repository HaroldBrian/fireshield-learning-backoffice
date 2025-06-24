import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  BookOpen, 
  PlayCircle, 
  Trophy, 
  Calendar, 
  MessageCircle, 
  User,
  Heart,
  FileText,
  Settings,
  X
} from 'lucide-react';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    {
      icon: Home,
      label: 'Tableau de bord',
      href: '/dashboard',
    },
    {
      icon: BookOpen,
      label: 'Catalogue',
      href: '/courses',
    },
    {
      icon: PlayCircle,
      label: 'Mes formations',
      href: '/courses/my-courses',
    },
    {
      icon: Heart,
      label: 'Favoris',
      href: '/courses/favorites',
    },
    {
      icon: Calendar,
      label: 'Planning',
      href: '/schedule',
    },
    {
      icon: PlayCircle,
      label: 'Visioconférences',
      href: '/video-sessions',
    },
    {
      icon: Trophy,
      label: 'Évaluations',
      href: '/quizzes',
    },
    {
      icon: FileText,
      label: 'Certificats',
      href: '/certificates',
    },
    {
      icon: MessageCircle,
      label: 'Messages',
      href: '/messages',
    },
    {
      icon: User,
      label: 'Profil',
      href: '/profile',
    },
    {
      icon: Settings,
      label: 'Paramètres',
      href: '/settings',
    },
  ];

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header avec bouton fermer (mobile) */}
          <div className="flex items-center justify-between p-4 border-b border-secondary-200 lg:hidden">
            <span className="text-lg font-semibold text-secondary-900">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={clsx(
                    'flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                      : 'text-secondary-700 hover:bg-secondary-100 hover:text-secondary-900'
                  )}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-secondary-200">
            <div className="text-xs text-secondary-500">
              © 2024 Fireshield Learning
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;