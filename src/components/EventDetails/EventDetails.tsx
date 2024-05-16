import { EventResponse } from '@/utils/definitions';
import { formatDate } from '@/utils/formatDate';
import React, { FC } from 'react';

interface EventDetailsProps {
  eventDetails: EventResponse;
}

export const EventDetails: FC<EventDetailsProps> = ({ eventDetails }) => {
  return (
    <div className="flex flex-col items-end mb-5 md:mb-10 px-5">
      <p className=" text-end mb-2 text-lg md:text-2xl text-slate-500 font-semibold">
        {eventDetails.title}
      </p>
      <p className="text-large text-default-500">
        Category:{' '}
        <span className="text-default-300">{eventDetails.category}</span>
      </p>
      <p className="text-large text-default-500">
        Country:{' '}
        <span className="text-default-300">{eventDetails.country}</span>
      </p>
      <p className="text-large text-default-500">
        Date:{' '}
        <span className="text-default-300">
          {formatDate(eventDetails.date)}
        </span>
      </p>
    </div>
  );
};
