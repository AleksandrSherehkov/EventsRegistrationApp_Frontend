'use client';
import React, { FC, useEffect, useState } from 'react';
import { getEventId, getUserByEventId } from '@/services/api';
import {
  EventResponse,
  UserQueryParams,
  UserResponse,
} from '@/utils/definitions';
import { Title } from '../Title/Title';
import { notFound } from 'next/navigation';
import { EventDetails } from '../EventDetails/EventDetails';
import { UserCard } from '../UserCard/UserCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { BackButton } from '../BackButton/BackButton';

interface UsersProps {
  eventId: string;
  searchParams?: UserQueryParams;
}

export const Users: FC<UsersProps> = ({ eventId }) => {
  const [eventDetails, setEventDetails] = useState<EventResponse | null>(null);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params: UserQueryParams = {
          filterQuery: search,
        };
        const [eventDetails, users] = await Promise.all([
          getEventId(eventId),
          getUserByEventId(eventId, params),
        ]);

        if (!eventDetails) {
          notFound();
        }

        setEventDetails(eventDetails);
        setUsers(users.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchData();
  }, [eventId, search]);

  return (
    <>
      <Title text="Registered users for" span="the event" />
      <div className="flex justify-between">
        <BackButton />
        {eventDetails && <EventDetails eventDetails={eventDetails} />}
      </div>

      <SearchBar
        label="Search by name or email"
        placeholder="Enter your name or email"
        onChange={setSearch}
        reset={false}
      />
      <ul className="flex flex-wrap justify-center gap-3 w-full h-max mx-auto rounded-[30px] p-5">
        {users.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </ul>
    </>
  );
};
