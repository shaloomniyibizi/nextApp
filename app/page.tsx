import { LoginButton } from '@/components/auth/login-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main
      className='flex h-full flex-col items-center justify-center 
    '
    >
      <div className='spac-y-6 text-center'>
        <h1 className='text-6xl font-semibold drop-shadow-md'>Auth</h1>
        <p className='text-lg'>A simple Authontication Service</p>
      </div>
      <LoginButton>
        <Button variant='secondary' size='lg'>
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
}
