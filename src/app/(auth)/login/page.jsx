'use client';

import { authClient } from '@/lib/client';
import { Button } from '@/components/ui/button';

const Login = () => {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/area51',
    });
    console.log(data);
  };

  return (
    <div>
      Login
      <Button onClick={signIn}>Sign In with Google</Button>
    </div>
  );
};

export default Login;
