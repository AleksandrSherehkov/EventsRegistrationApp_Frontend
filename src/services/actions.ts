'use server';

import { RegisterParams } from '@/utils/definitions';
import { registerUser } from './api';
import { redirect } from 'next/navigation';

export const registerEventUser = async (
  prevState: string | undefined,
  formData: FormData
): Promise<string> => {
  const params: RegisterParams = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    birthDate: formData.get('birthDate') as string,
    referralSource: formData.get('referralSource') as string,
    eventId: formData.get('eventId') as string,
  };

  const result = await registerUser(params);
  if (result.success) {
    redirect(`/${params.eventId}/users`);
    return '';
  } else {
    return result.data.toString();
  }
};
