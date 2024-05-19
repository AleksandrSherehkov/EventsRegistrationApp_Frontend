'use client';

import React, { FC, useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';

interface SortOptionsProps {
  reset: boolean;
  onChangeSortBy: (sortBy: string) => void;
  onChangeSortOrder: (sortOrder: string) => void;
}

export const SortOptions: FC<SortOptionsProps> = ({
  reset,
  onChangeSortBy,
  onChangeSortOrder,
}) => {
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<string>('asc');

  useEffect(() => {
    if (reset) {
      setSortBy('date');
      setSortOrder('asc');
    }
  }, [reset]);

  useEffect(() => {
    onChangeSortBy(sortBy);
  }, [sortBy, onChangeSortBy]);

  useEffect(() => {
    onChangeSortOrder(sortOrder);
  }, [sortOrder, onChangeSortOrder]);

  return (
    <div className="flex flex-col gap-2 w-[250px]">
      <Select
        items={[
          { value: 'date', label: 'Date' },
          { value: 'title', label: 'Title' },
          { value: 'category', label: 'Category' },
        ]}
        labelPlacement="outside-left"
        variant="bordered"
        label="Sort By"
        placeholder="Select Sort By"
        className="w-52 dark"
        classNames={{
          label: 'min-w-20 self-center',
          trigger: 'text-default-700 min-w-36',
          popoverContent: 'bg-mediumGrey text-default-300',
        }}
        selectedKeys={sortBy ? [sortBy] : []}
        onSelectionChange={keys => setSortBy(Array.from(keys)[0] as string)}
      >
        {option => <SelectItem key={option.value}>{option.label}</SelectItem>}
      </Select>
      <Select
        items={[
          { value: 'asc', label: 'Ascending' },
          { value: 'desc', label: 'Descending' },
        ]}
        labelPlacement="outside-left"
        variant="bordered"
        label="Sort Order"
        placeholder="Select Sort Order"
        className="w-52 dark"
        classNames={{
          label: 'min-w-20 self-center',
          trigger: 'text-default-700 min-w-36 ',
          popoverContent: 'bg-mediumGrey text-default-300 ',
        }}
        selectedKeys={sortOrder ? [sortOrder] : []}
        onSelectionChange={keys => setSortOrder(Array.from(keys)[0] as string)}
      >
        {option => <SelectItem key={option.value}>{option.label}</SelectItem>}
      </Select>
    </div>
  );
};
