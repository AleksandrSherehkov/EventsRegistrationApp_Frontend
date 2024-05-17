import { FC } from 'react';
import { Events } from '@/components/Events/Events';

const HomePage: FC = () => {
  return (
    <main className="flex flex-col items-center  min-h-screen max-w-7xl  mx-auto ">
      <Events />
    </main>
  );
};

export default HomePage;
