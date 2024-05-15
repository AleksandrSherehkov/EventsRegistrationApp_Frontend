import { birthDateZodSchema } from '@/utils/validationSchema';
import { useState } from 'react';

export const useBirthDateValidation = () => {
  const [birthDateValid, setBirthDateValid] = useState(false);

  const validateBirthDate = (value: string) => {
    const result = birthDateZodSchema.safeParse(value);
    setBirthDateValid(result.success);
    return result.success ? '' : result.error.errors[0].message;
  };

  return { birthDateValid, validateBirthDate };
};