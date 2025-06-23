import { LogIn } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Login = () => {
  return (
		<Link href='#' className='flex items-center gap-2 hover:bg-brand-opacity-10 rounded-md p-3'>
          <LogIn className='size-4' />
          <p>Login</p>
		</Link>
	);
}

export default Login