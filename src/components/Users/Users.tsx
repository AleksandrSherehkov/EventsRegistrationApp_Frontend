import { getEventId, getUserByEventId } from '@/services/api';
import React, { FC } from 'react';
import { UserQueryParams } from '@/utils/definitions';
import { Title } from '../Title/Title';
import { notFound } from 'next/navigation';
import { EventDetails } from '../EventDetails/EventDetails';
import { UserCard } from '../UserCard/UserCard';
import { SearchBar } from '../SearchBar/SearchBar';

interface UsersProps {
  eventId: string;
  searchParams?: UserQueryParams;
}

export const Users: FC<UsersProps> = async ({ eventId, searchParams }) => {
  const [eventDetails, users] = await Promise.all([
    getEventId(eventId),
    getUserByEventId(eventId, searchParams),
  ]);
  if (!eventDetails) {
    notFound();
  }

  return (
    <>
      <Title text="Registered users for" span="the event" />
      <EventDetails eventDetails={eventDetails} />
      <SearchBar
        label="Search by name or email"
        placeholder="Enter your name or email"
      />
      <ul className="flex flex-wrap justify-center gap-3 w-full h-max mx-auto rounded-[30px]  p-5    ">
        {users.data.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </ul>
    </>
  );
};
