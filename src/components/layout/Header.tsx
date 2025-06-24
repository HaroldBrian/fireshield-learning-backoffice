import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Bell, User, Search, BookOpen, MessageCircle } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface HeaderProps {
  onMenuToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    setIsProfileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et menu mobile */}
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-md text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <Link href="/" className="flex items-center ml-2 lg:ml-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-secondary-900">
                  Fireshield Learning
                </span>
              </div>
            </Link>
          </div>

          {/* Barre de recherche */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <Input
                type="text"
                placeholder="Rechercher des formations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-4 h-4" />}
                fullWidth
              />
            </form>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                {/* Notifications */}
                <button className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
                </button>

                {/* Messages */}
                <Link href="/messages">
                  <button className="p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </Link>

                {/* Menu profil */}
                <div className="relative">
                  <button
                    onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                    className="flex items-center p-2 text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100 rounded-lg"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                    <span className="ml-2 text-sm font-medium hidden sm:block">
                      {user.firstName}
                    </span>
                  </button>

                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-1 z-50">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Mon profil
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Tableau de bord
                      </Link>
                      <Link
                        href="/courses/my-courses"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        Mes formations
                      </Link>
                      <div className="border-t border-secondary-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-100"
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">
                    Connexion
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="primary" size="sm">
                    Inscription
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;