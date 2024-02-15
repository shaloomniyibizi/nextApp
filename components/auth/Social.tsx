'use client';

import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';

export const Social = () => {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button onClick={() => {}} size='lg' variant='outline' className='w-full'>
        <FcGoogle className='h-5 w-5' />
      </Button>
      <Button onClick={() => {}} size='lg' variant='outline' className='w-full'>
        <FaGithub className='h-5 w-5' />
      </Button>
    </div>
  );
};
