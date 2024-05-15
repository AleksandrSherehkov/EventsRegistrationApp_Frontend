import { getUserByEventId } from '@/services/api';
import React, { FC } from 'react';

interface UsersProps {
  idEvent: string;
}

export const Users: FC<UsersProps> = async ({ idEvent }) => {
  const users = await getUserByEventId(idEvent);
  console.log(`users:`, users);
  return <div>Users</div>;
};
