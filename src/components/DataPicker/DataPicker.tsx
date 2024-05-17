'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { DatePicker } from '@nextui-org/react';
import { DateValue, getLocalTimeZone } from '@internationalized/date';
import { toZonedTime } from 'date-fns-tz';
import { useRouter, useSearchParams } from 'next/navigation';
import debounce from 'lodash.debounce';

export const DataPicker = () => {
  const [value, setValue] = useState<DateValue | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const toISOStringWithDateFns = (dateValue: DateValue) => {
    if (!dateValue) return 'No date selected';
    const date = dateValue.toDate(getLocalTimeZone());
    const zonedDate = toZonedTime(date, 'UTC');
    return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
  };

  const updateQueryParams = useCallback(
    (dateValue: DateValue | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (dateValue) {
        params.set('date', toISOStringWithDateFns(dateValue));
      } else {
        params.delete('date');
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
    debouncedUpdateQueryParams(value);

    return () => {
      debouncedUpdateQueryParams.cancel();
    };
  }, [value, debouncedUpdateQueryParams]);

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
        onChange={setValue}
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
