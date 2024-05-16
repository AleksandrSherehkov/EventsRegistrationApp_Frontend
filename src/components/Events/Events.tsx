import { getEvents } from '@/services/api';
import { EventResponse, EventsParams } from '@/utils/definitions';

import { Title } from '../Title/Title';
import { EventCard } from '../EventCard/EventCard';
import { SelectCategory } from '../SelectCategory/SelectCategory';
import { FC } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { DataPicker } from '../DataPicker/DataPicker';

interface EventsProps {
  searchParams: EventsParams;
}

export const Events: FC<EventsProps> = async ({ searchParams }) => {
  const events = await getEvents(searchParams);

  return (
    <>
      <Title text="Find your" span="events..." />
      <div className="gap-4 md:gap-10 w-full flex flex-wrap justify-between px-10">
        <SearchBar
          label="Search by title Events or Country"
          placeholder="Enter query "
        />
        <DataPicker />
        <SelectCategory />
      </div>
      <ul className="w-full flex justify-center items-center flex-wrap gap-4">
        {events.data.map((event: EventResponse) => (
          <EventCard key={event._id} event={event} />
        ))}
      </ul>
    </>
  );
};
