'use client';

import { authClient } from '@/lib/client';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const LogoutButton = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await authClient.signOut();
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border soft-grid-border hover:bg-muted/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <LogOut className="w-4 h-4" />
      {isLoading ? 'Signing out...' : 'Sign Out'}
    </button>
  );
};

export default LogoutButton;
