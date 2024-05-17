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

import { DetailsEventSkeleton, UserCardSkeleton } from '../Skeleton/Skeleton';

interface UsersProps {
  eventId: string;
}

export const Users: FC<UsersProps> = ({ eventId }) => {
  const [eventDetails, setEventDetails] = useState<EventResponse | null>(null);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [eventId, search]);

  return (
    <>
      <Title text="Registered users for" span="the event" />
      <div className="flex justify-between flex-col md:flex-row">
        <BackButton />
        {loading ? (
          <DetailsEventSkeleton />
        ) : eventDetails ? (
          <EventDetails eventDetails={eventDetails} />
        ) : (
          <DetailsEventSkeleton />
        )}
      </div>

      <SearchBar
        label="Search by name or email"
        placeholder="Enter your name or email"
        onChange={setSearch}
        reset={false}
      />
      {loading ? (
        <UserCardSkeleton />
      ) : users.length ? (
        <ul className="flex flex-wrap justify-center gap-3 w-full h-max mx-auto  p-5">
          {users.map(user => (
            <UserCard key={user._id} user={user} />
          ))}
        </ul>
      ) : (
        <p className="text-fogWhiteHover text-2xl md:text-3xl text-center">
          No registered users yet
        </p>
      )}
    </>
  );
};
