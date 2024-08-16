'use client';
import { signIn } from 'next-auth/react';
import Button from './Button';

const ButtonLogin = () => {
  const onLoginWithSpotify = () => {
    signIn('spotify', { callbackUrl: '/view' });
  };

  return (
    <Button
      message="TRY WITH SPOTIFY"
      style="mt-auto bg-c_black text-c_white text-sm font-semibold"
      event={() => onLoginWithSpotify()}
    />
  );
};

export default ButtonLogin;
