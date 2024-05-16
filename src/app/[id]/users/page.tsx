import { Users } from '@/components/Users/Users';
import React, { FC } from 'react';

interface PageUsersProps {
  params: {
    id: string;
  };
}

const PageUsers: FC<PageUsersProps> = ({ params }) => {
  return (
    <main className="   min-h-screen max-w-7xl  mx-auto ">
      <Users eventId={params.id} />
    </main>
  );
};

export default PageUsers;
