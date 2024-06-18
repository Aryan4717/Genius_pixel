// pages/sign-in/[[...sign-in]].js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Optional: Redirect users if they visit `/sign-in` directly
    router.replace('/');
  }, []);

  return <SignIn />;
};

export default SignInPage;

export async function getStaticPaths() {
  // Since it's a sign-in page, you might not have multiple variations to pre-render statically
  // If you do have specific paths you want to pre-render, define them here
  return {
    paths: [],
    fallback: false, // Show 404 if the page doesn't match any path
  };
}
