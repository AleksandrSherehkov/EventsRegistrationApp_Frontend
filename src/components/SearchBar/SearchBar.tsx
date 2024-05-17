'use client';

import { Input } from '@nextui-org/react';
import { FC, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { useSearchParams } from 'next/navigation';
import { useUpdateSearchBarQueryParams } from '@/hooks/useUpdateSearchBarQueryParams';

interface SearchBarProps {
  label: string;
  placeholder: string;
  description?: string;
  reset: boolean;
}

export const SearchBar: FC<SearchBarProps> = ({
  label,
  placeholder,
  description,
  reset,
}) => {
  const searchParams = useSearchParams();
  const filterQuery = searchParams.get('filterQuery') ?? '';
  const [inputValue, setInputValue] = useState(filterQuery);
  console.log(`inputValue:`, inputValue);

  const updateQueryParams = useUpdateSearchBarQueryParams();

  const debouncedUpdateQueryParams = useMemo(
    () => debounce(updateQueryParams, 300),
    [updateQueryParams]
  );

  useEffect(() => {
    if (reset) setInputValue('');
  }, [reset]);

  useEffect(() => {
    debouncedUpdateQueryParams(inputValue);

    return () => {
      debouncedUpdateQueryParams.cancel();
    };
  }, [inputValue, debouncedUpdateQueryParams]);

  return (
    <div className="w-max pl-10">
      <Input
        className="dark w-[300px]"
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
  );
};
