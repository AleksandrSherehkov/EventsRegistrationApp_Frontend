'use client';
import React, { FC, useEffect, useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import { eventsOptions } from './data';

interface SelectCategoryProps {
  reset: boolean;
  onChange: (value: string | null) => void;
}

export const SelectCategory: FC<SelectCategoryProps> = ({
  reset,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    if (reset) setSelectedValue('');
  }, [reset]);

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue, onChange]);

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
