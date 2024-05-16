import { getEventId, getUserByEventId } from '@/services/api';
import { EventResponse, ResponseList, UserResponse } from '@/utils/definitions';
import { User } from '@nextui-org/user';
import React, { FC } from 'react';
import { Title } from '../Title/Title';
import { notFound } from 'next/navigation';
import { formatDate } from '@/utils/formatDate';

interface UsersProps {
  eventId: string;
}

export const Users: FC<UsersProps> = async ({ eventId }) => {
  const [eventDetails, users] = await Promise.all([
    getEventId(eventId),
    getUserByEventId(eventId),
  ]);
  if (!eventDetails) {
    notFound();
  }

  return (
    <>
      <Title text="Registered users for" span="the event" />
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
      <ul className="flex flex-wrap justify-center gap-3 w-full h-max mx-auto rounded-[30px]  p-5    ">
        {users.data.map(user => (
          <User
            as="li"
            key={user._id}
            name={user.name}
            description={user.email}
            classNames={{
              base: 'bg-fogGreyHover p-3 h-36 w-72 ring-1 ring-lightGrey ring-offset-1 ring-offset-lightBlack',
              wrapper: 'w-56 flex flex-col gap-2',
              name: 'text-xl text-default-300 font-medium italic',
              description: 'text-sm text-default-400',
            }}
            avatarProps={{
              isDisabled: false,
              size: 'lg',
            }}
          />
        ))}
      </ul>
    </>
  );
};
