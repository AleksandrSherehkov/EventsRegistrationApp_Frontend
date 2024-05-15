import { Users } from '@/components/Users/Users';
import React, { FC } from 'react';

interface PageUsersProps {
  params: {
    id: string;
  };
}

const PageUsers: FC<PageUsersProps> = ({ params }) => {
  return <Users idEvent={params.id} />;
};

export default PageUsers;
