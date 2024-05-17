import React, { FC } from 'react';

import { Users } from '@/components/Users/Users';
import { UserQueryParams } from '@/utils/definitions';

interface PageUsersProps {
  params: {
    id: string;
  };
  searchParams: UserQueryParams;
}

const PageUsers: FC<PageUsersProps> = ({ params, searchParams }) => {
  return (
    <main className=" flex flex-col  min-h-screen max-w-7xl  mx-auto ">
      <Users eventId={params.id} searchParams={searchParams} />
    </main>
  );
};

export default PageUsers;
