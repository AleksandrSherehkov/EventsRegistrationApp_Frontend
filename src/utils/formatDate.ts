import { format } from 'date-fns';

import { toZonedTime } from 'date-fns-tz';
import { DateValue, getLocalTimeZone } from '@internationalized/date';

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'MMMM d, yyyy');
};

export const toISOStringWithDateFns = (dateValue: DateValue) => {
  if (!dateValue) return 'No date selected';
  const date = dateValue.toDate(getLocalTimeZone());
  const zonedDate = toZonedTime(date, 'UTC');
  return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
};
