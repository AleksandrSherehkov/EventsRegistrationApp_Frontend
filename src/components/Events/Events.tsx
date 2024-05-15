import { getEvents } from '@/services/api';
import { EventResponse } from '@/utils/definitions';
import { formatDate } from '@/utils/formatDate';
import { removeSourcePrefix } from '@/utils/removeSourcePrefix';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  ScrollShadow,
} from '@nextui-org/react';

export const Events = async () => {
  const events = await getEvents({});

  console.log(`events:`, events);

  return events.data.map((event: EventResponse) => (
    <Card key={event._id} className="dark w-[400px] ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="h-12 text-base text-slate-500 font-semibold">
            {event.title}
          </p>
          <p className="text-small text-default-500">
            Category: <span className="text-default-700">{event.category}</span>
          </p>
          <p className="text-small text-default-500">
            Country: <span className="text-default-700">{event.country}</span>
          </p>
          <p className="text-small text-default-500">
            Date:{' '}
            <span className="text-default-700">{formatDate(event.date)}</span>
          </p>
        </div>
      </CardHeader>
      <Divider />

      <CardBody>
        <p className="text-small text-default-700 mb-2">Description:</p>
        <p className=" h-60 text-sm text-default-400 overflow-x-auto border-x-scroll-white px-2  scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-medium-grey">
          {removeSourcePrefix(event.description)}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex w-full justify-around items-center gap-8">
        <Link isBlock href="https://github.com/nextui-org/nextui">
          Register
        </Link>
        <Link isBlock href="https://github.com/nextui-org/nextui">
          View
        </Link>
      </CardFooter>
    </Card>
  ));
};
