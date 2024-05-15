import { Register } from '@/components/Register/Register';
import React, { FC } from 'react';

interface PageRegisterProps {
  params: {
    id: string;
  };
}
const PageRegister: FC<PageRegisterProps> = ({ params }) => {
  return (
    <main className="flex justify-center items-center  min-h-screen max-w-7xl flex-wrap gap-4 mx-auto ">
      <Register idEvent={params.id} />
    </main>
  );
};

export default PageRegister;
