import { useAuthRedirect } from './useAuthRedirect';
import { FC } from 'react';

const Auth: FC = () => {
  useAuthRedirect();

  return <div>Auth</div>;
};

export default Auth;
