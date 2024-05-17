'use client';
import React, { useState, useEffect } from 'react';
import { Select, SelectItem, Selection } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

import { useUpdateSelectQueryParams } from '@/hooks/useUpdateSelectQueryParams';

import { eventsOptions } from './data';

export const SelectCategory = () => {
  const searchParams = useSearchParams();
  const categoryQuery = searchParams.get('category') ?? '';
  const [value, setValue] = useState<Selection>(
    new Set(categoryQuery ? [categoryQuery] : [])
  );

  useEffect(() => {
    setValue(new Set(categoryQuery ? [categoryQuery] : []));
  }, [categoryQuery]);

  const updateQueryParams = useUpdateSelectQueryParams();

  useEffect(() => {
    const selectedValue = Array.from(value).join('');
    updateQueryParams(selectedValue);
  }, [value, updateQueryParams]);

  return (
    <div className="flex min-w-[177px] gap-2 mb-4">
      <Select
        label="Category of Event"
        variant="underlined"
        placeholder="Select a Category"
        selectedKeys={value}
        className="dark max-w-44"
        onSelectionChange={keys => {
          setValue(keys);
          const selectedValue = Array.from(keys).join('');
          updateQueryParams(selectedValue);
        }}
        classNames={{
          label: '',
          base: '',
          mainWrapper: ' ',
          trigger: 'text-default-700 ',
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
