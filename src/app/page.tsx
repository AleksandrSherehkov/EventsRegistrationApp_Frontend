import { FC } from 'react';
import { Events } from '@/components/Events/Events';
import { EventsParams } from '@/utils/definitions';

interface HomePageProps {
  searchParams: EventsParams;
}

const HomePage: FC<HomePageProps> = ({ searchParams }) => {
  return (
    <main className="  min-h-screen max-w-7xl  mx-auto ">
      <Events searchParams={searchParams} />
    </main>
  );
};

export default HomePage;
