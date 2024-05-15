import { RegisterParams } from '@/utils/definitions';
import { registerUser } from './api';

export const registerEventUser = async (
  prevState: string | undefined,
  formData: FormData
): Promise<string | undefined> => {
  const params: RegisterParams = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const result = await registerUser(params);
  if (result.success) {
    console.log('Registered successfully!');
    return '';
  } else {
    return result.data.toString();
  }
};
