// pages/sign-up/[[...sign-up]].js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect users if they visit `/sign-up` directly
    router.replace('/');
  }, []);

  return <SignUp />;
};

export default SignUpPage;

export async function getStaticPaths() {
  // Since it's a sign-up page, you might not have multiple variations to pre-render statically
  // If you do have specific paths you want to pre-render, define them here
  return {
    paths: [],
    fallback: false, // Show 404 if the page doesn't match any path
  };
}
