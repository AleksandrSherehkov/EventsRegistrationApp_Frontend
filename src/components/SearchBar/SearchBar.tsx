'use client';

import { Input } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

interface SearchBarProps {
  label: string;
  placeholder: string;
  description?: string;
}

export const SearchBar: FC<SearchBarProps> = ({
  label,
  placeholder,
  description,
}) => {
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
    <div className="flex min-w-[300px] ">
      <div className="justify-center w-[300px]">
        <Input
          className="dark"
          type="text"
          label={label}
          description={description}
          radius="full"
          size="sm"
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          variant="underlined"
        />
      </div>
    </div>
  );
};
