'use client';
import React, { useState, useEffect } from 'react';
import { DatePicker } from '@nextui-org/react';
import { DateValue } from '@internationalized/date';

import { toISOStringWithDateFns } from '@/utils/formatDate';
import { useUpdateDatePickerQueryParams } from '@/hooks/useUpdateDatePickerQueryParams';

export const DataPicker = () => {
  const [value, setValue] = useState<DateValue | null>(null);
  const updateQueryParams = useUpdateDatePickerQueryParams();

  useEffect(() => {
    updateQueryParams(value);
  }, [value, updateQueryParams]);

  console.log(
    `value:`,
    value ? toISOStringWithDateFns(value) : 'No date selected'
  );

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
