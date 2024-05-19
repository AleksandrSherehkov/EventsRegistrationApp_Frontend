'use client';
import React, { useState, useEffect, FC } from 'react';
import { DatePicker } from '@nextui-org/react';
import { DateValue } from '@internationalized/date';
import { toISOStringWithDateFns } from '@/utils/formatDate';

interface DataPickerProps {
  reset: boolean;
  onChange: (date: string | null) => void;
}

export const DataPicker: FC<DataPickerProps> = ({ reset, onChange }) => {
  const [value, setValue] = useState<DateValue | null>(null);

  useEffect(() => {
    if (reset) setValue(null);
  }, [reset]);

  useEffect(() => {
    onChange(value ? toISOStringWithDateFns(value) : null);
  }, [value, onChange]);

  return (
    <div className="flex w-[250px] flex-col gap-y-2 ">
      <DatePicker
        className="dark max-w-[284px] text-fogWhite"
        label="Search date"
        variant="underlined"
        value={value}
        onChange={newValue => {
          setValue(newValue);
          onChange(newValue ? toISOStringWithDateFns(newValue) : null);
        }}
        classNames={{
          base: 'h-[48px]',
          selectorButton: '',
          selectorIcon: ' ',
          popoverContent: '',
          calendar: 'bg-darkGrey ',
          calendarContent: 'bg-fogWhiteHover  ',
          timeInputLabel: ' ',
          timeInput: '',
        }}
      />
    </div>
  );
};
