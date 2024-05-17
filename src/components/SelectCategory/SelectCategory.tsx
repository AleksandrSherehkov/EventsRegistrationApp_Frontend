'use client';
import React, { FC, useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import { useUpdateSelectQueryParams } from '@/hooks/useUpdateSelectQueryParams';
import { eventsOptions } from './data';

interface SelectCategoryProps {
  reset: boolean;
}

export const SelectCategory: FC<SelectCategoryProps> = ({ reset }) => {
  const searchParams = useSearchParams();
  const filterCategory = searchParams.get('category') ?? '';
  const [selectedValue, setSelectedValue] = useState<string | null>(
    filterCategory
  );

  console.log(`selectedValue:`, selectedValue);
  const updateQueryParams = useUpdateSelectQueryParams();

  useEffect(() => {
    if (reset) setSelectedValue(null);
  }, [reset]);

  useEffect(() => {
    updateQueryParams(selectedValue ?? '');
  }, [selectedValue, updateQueryParams]);

  return (
    <Select
      items={eventsOptions}
      variant="underlined"
      label="Category of Event"
      placeholder="Select a Category"
      className="max-w-xs dark"
      classNames={{
        trigger: 'text-default-700 ',
        popoverContent: 'bg-mediumGrey text-default-300',
      }}
      selectedKeys={selectedValue ? [selectedValue] : []}
      onSelectionChange={keys =>
        setSelectedValue(Array.from(keys)[0] as string)
      }
    >
      {eventsOption => (
        <SelectItem key={eventsOption.value}>{eventsOption.label}</SelectItem>
      )}
    </Select>
  );
};
