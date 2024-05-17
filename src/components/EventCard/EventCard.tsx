import React, { FC } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from '@nextui-org/react';
import { EventResponse } from '@/utils/definitions';
import { formatDate } from '@/utils/formatDate';
import { removeSourcePrefix } from '@/utils/removeSourcePrefix';

interface EventCardProps {
  event: EventResponse;
}
export const EventCard: FC<EventCardProps> = ({ event }) => {
  return (
    <Card as="li" key={event._id} className="dark w-[340px] ">
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
        <p className=" h-40 text-sm text-default-400 overflow-x-auto border-x-scroll-white px-2  scrollbar-thin scrollbar-track-neutral-950 scrollbar-thumb-medium-grey">
          {removeSourcePrefix(event.description)}
        </p>
      </CardBody>
      <Divider />
      <CardFooter className="flex w-full justify-around items-center gap-8">
        <Link isBlock href={`/${event._id}/register`}>
          Register
        </Link>
        <Link isBlock href={`/${event._id}/users`}>
          View
        </Link>
      </CardFooter>
    </Card>
  );
};
