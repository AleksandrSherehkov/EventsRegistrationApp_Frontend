import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useUpdateSelectQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set('category', value);
      } else {
        params.delete('category');
      }
      router.replace(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  return updateQueryParams;
};
