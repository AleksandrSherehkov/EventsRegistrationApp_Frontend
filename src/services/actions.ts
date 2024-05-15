'use server';

import { RegisterParams } from '@/utils/definitions';
import { registerUser } from './api';

export const registerEventUser = async (
  _state: void | undefined,
  formData: FormData
): Promise<void> => {
  const params: RegisterParams = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    birthDate: formData.get('birthDate') as string,
    referralSource: formData.get('referralSource') as string,
    eventId: formData.get('eventId') as string,
  };
  console.log(`params:`, params);

  // const result = await registerUser(params);
};
