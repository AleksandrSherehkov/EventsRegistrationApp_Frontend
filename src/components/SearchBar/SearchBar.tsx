'use client';

import { Input } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

export const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterQuery = searchParams.get('filterQuery') ?? '';
  const [inputValue, setInputValue] = useState(filterQuery);

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

  const debouncedUpdateQueryParams = useMemo(
    () => debounce(updateQueryParams, 300),
    [updateQueryParams]
  );

  useEffect(() => {
    debouncedUpdateQueryParams(inputValue);

    return () => {
      debouncedUpdateQueryParams.cancel();
    };
  }, [inputValue, debouncedUpdateQueryParams]);

  return (
    <div className="flex w-full pl-10">
      <div className="justify-center max-w-[240px]">
        <Input
          className="dark"
          type="text"
          label="Search by name or email"
          radius="full"
          size="sm"
          placeholder="Enter your name or email"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          variant="underlined"
        />
      </div>
    </div>
  );
};
