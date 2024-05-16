'use client';
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Select, SelectItem, Selection } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';
import { eventsOptions } from './data';

export const SelectCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category') ?? '';
  const [value, setValue] = useState<Selection>(
    new Set(categoryQuery ? [categoryQuery] : [])
  );

  console.log(`value:`, value);
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

  const debouncedUpdateQueryParams = useMemo(
    () => debounce(updateQueryParams, 300),
    [updateQueryParams]
  );

  useEffect(() => {
    const selectedValue = Array.from(value).join('');
    debouncedUpdateQueryParams(selectedValue);

    return () => {
      debouncedUpdateQueryParams.cancel();
    };
  }, [value, debouncedUpdateQueryParams]);

  return (
    <div className="flex w-full gap-2 justify-end mb-4">
      <Select
        label="Category of Event"
        variant="underlined"
        placeholder="Select a Category"
        selectedKeys={value}
        className="dark max-w-44"
        onSelectionChange={setValue}
        classNames={{
          label: '',
          base: '',
          mainWrapper: '',
          trigger: 'text-default-700',
          innerWrapper: '',
          listboxWrapper: '',
          listbox: '',
          value: '',
          popoverContent: 'bg-mediumGrey text-default-300',
        }}
      >
        {eventsOptions.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
