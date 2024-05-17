import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { DateValue } from '@internationalized/date';
import { toISOStringWithDateFns } from '@/utils/formatDate';

export const useUpdateDatePickerQueryParams = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateQueryParams = useCallback(
    (dateValue: DateValue | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (dateValue) {
        params.set('date', toISOStringWithDateFns(dateValue));
      } else {
        params.delete('date');
      }
      router.replace(`?${params.toString()}`);
    },
    [searchParams, router]
  );

  return updateQueryParams;
};
