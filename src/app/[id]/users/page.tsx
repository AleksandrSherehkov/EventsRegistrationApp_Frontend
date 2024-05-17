import React, { FC } from 'react';

import { Users } from '@/components/Users/Users';

interface PageUsersProps {
  params: {
    id: string;
  };
}

const PageUsers: FC<PageUsersProps> = ({ params }) => {
  return (
    <main className=" flex flex-col  min-h-screen max-w-7xl  mx-auto ">
      <Users eventId={params.id} />
    </main>
  );
};

export default PageUsers;
