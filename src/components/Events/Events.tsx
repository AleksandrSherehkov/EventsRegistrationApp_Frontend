import { getEvents } from '@/services/api';

export const Events = async () => {
  const events = await getEvents({});

  console.log(`events:`, events);

  return <div>Events</div>;
};
