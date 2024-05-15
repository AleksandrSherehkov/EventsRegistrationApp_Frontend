import { fullNameZodSchema } from '@/utils/validationSchema';
import { useState } from 'react';

export const useNameValidation = () => {
  const [nameValid, setNameValid] = useState(false);

  const validateName = (value: string) => {
    const result = fullNameZodSchema.safeParse(value);
    setNameValid(result.success);
    return result.success ? '' : result.error.errors[0].message;
  };

  return { nameValid, validateName };
};
