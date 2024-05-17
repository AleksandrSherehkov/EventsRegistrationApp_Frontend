'use client';
import React, { useState, useEffect, FC } from 'react';
import { DatePicker } from '@nextui-org/react';
import { DateValue } from '@internationalized/date';

import { toISOStringWithDateFns } from '@/utils/formatDate';
import { useUpdateDatePickerQueryParams } from '@/hooks/useUpdateDatePickerQueryParams';

interface DataPickerProps {
  reset: boolean;
}

export const DataPicker: FC<DataPickerProps> = ({ reset }) => {
  const [value, setValue] = useState<DateValue | null>(null);
  console.log(`value:`, value);
  const updateQueryParams = useUpdateDatePickerQueryParams();

  useEffect(() => {
    if (reset) setValue(null);
  }, [reset]);

  useEffect(() => {
    updateQueryParams(value);
  }, [value, updateQueryParams]);

  return (
    <div className="flex w-[284px] flex-col gap-y-2">
      <DatePicker
        className="dark max-w-[284px] text-fogWhite"
        label="Search date"
        variant="underlined"
        value={value}
        onChange={newValue => {
          setValue(newValue);
          updateQueryParams(newValue);
        }}
        classNames={{
          base: '',
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
