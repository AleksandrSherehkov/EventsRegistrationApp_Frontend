import { emailValidator } from '@/constants/regexp';
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
  .refine(value => value.split(' ').length > 1, {
    message: '*Full name must contain at least two words',
  });

export const emailZodShema = z
  .string({ required_error: '*Email is required' })
  .min(1, { message: '*Email is required' })
  .regex(emailValidator, {
    message: '*Please enter a valid email address"',
  });

export const birthDateZodSchema = z
  .string({ required_error: '*Date of birth is required' })
  .transform(value => value.trim())
  .refine(
    value => {
      const date = parse(value, 'dd-MM-yyyy', new Date());
      return isDate(date) && !isNaN(date.getTime());
    },
    { message: '*Incorrect date format' }
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
