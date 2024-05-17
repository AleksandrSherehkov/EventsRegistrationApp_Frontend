import { useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useUpdateSearchBarQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set('filterQuery', value);
      } else {
        params.delete('filterQuery');
      }
      router.replace(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  return updateQueryParams;
};
