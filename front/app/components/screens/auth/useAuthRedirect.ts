import { useAuth } from '@/hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useAuthRedirect = () => {
  const { user } = useAuth();
  const { push } = useRouter();
  const query = useSearchParams();

  const redirect = String(query.has('redirect')) || '/';

  useEffect(() => {
    user && push(redirect);
  }, [user, query, push]);
};
