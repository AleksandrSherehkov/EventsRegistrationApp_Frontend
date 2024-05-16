import { getEvents } from '@/services/api';
import { EventResponse } from '@/utils/definitions';

import { Title } from '../Title/Title';
import { EventCard } from '../EventCard/EventCard';

export const Events = async () => {
  const events = await getEvents({});

  return (
    <>
      <Title text="Find your" span="events..." />
      <ul className="w-full flex justify-center items-center flex-wrap gap-4">
        {events.data.map((event: EventResponse) => (
          <EventCard key={event._id} event={event} />
        ))}
      </ul>
    </>
  );
};
