import { DATE_REGEX, EMAIL_REGEX, FULL_NAME_REGEX } from '@/constants/regexp';
import { z } from 'zod';

import { parse, isDate, isBefore, isAfter, subYears } from 'date-fns';

const today = new Date();
const minAge = 18;
const maxAge = 100;

const minDate = subYears(today, maxAge);
const maxDate = subYears(today, minAge);

export const fullNameZodSchema = z
  .string({ required_error: '*Full name is required' })
  .min(1, { message: '*Full name is required' })
  .transform(value => value.trim())
  .refine(value => FULL_NAME_REGEX.test(value), {
    message:
      '*Full name can only contain letters and spaces, and must contain at least two words',
  });

export const emailZodShema = z
  .string({ required_error: '*Email is required' })
  .min(1, { message: '*Email is required' })
  .regex(EMAIL_REGEX, {
    message: '*Please enter a valid email address"',
  });

export const birthDateZodSchema = z
  .string({ required_error: '*Date of birth is required' })
  .transform(value => value.trim())
  .refine(
    value => {
      if (!DATE_REGEX.test(value)) {
        return false;
      }
      const date = parse(value, 'dd-MM-yyyy', new Date());
      return isDate(date) && !isNaN(date.getTime());
    },
    {
      message: '*Incorrect date format, please enter correct dd-MM-yyyy',
    }
  )
  .refine(
    value => {
      const date = parse(value, 'dd-MM-yyyy', new Date());
      return isBefore(date, maxDate) && isAfter(date, minDate);
    },
    {
      message: '*Age must be between 18 and 100 years',
    }
  );
