'use client';

import { useRouter } from 'next/navigation';
import Router from 'next/router';

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'model' | 'redirect';
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = 'redirect',
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/login');
  };
  if (mode === 'model') {
    return <span>TODO: Implementing model</span>;
  }
  return (
    <span className='cursor-pointer' onClick={onClick}>
      {children}
    </span>
  );
};
