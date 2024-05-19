'use client';
import React, { FC, useEffect, useState, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  getEventId,
  getUserByEventId,
  getRegistrationsPerDay,
} from '@/services/api';
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
import {
  ChartSkeleton,
  DetailsEventSkeleton,
  UserCardSkeleton,
} from '../Skeleton/Skeleton';
import { RegistrationChart } from '../RegistrationChart/RegistrationChart';
import { Card, Skeleton } from '@nextui-org/react';

interface UsersProps {
  eventId: string;
}

export const Users: FC<UsersProps> = ({ eventId }) => {
  const [eventDetails, setEventDetails] = useState<EventResponse | null>(null);
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [registrationChart, setRegistrationChart] = useState<string | null>(
    null
  );

  const fetchUsers = useCallback(
    async (page: number, resetUsers = false) => {
      try {
        setLoading(true);
        const params: UserQueryParams = {
          filterQuery: search,
          page,
          limit: 12,
        };
        const [eventDetails, users, registrationUrl] = await Promise.all([
          getEventId(eventId),
          getUserByEventId(eventId, params),
          getRegistrationsPerDay(eventId),
        ]);

        if (!eventDetails) {
          notFound();
        }

        setEventDetails(eventDetails);
        if (resetUsers) {
          setUsers(users.data);
        } else {
          setUsers(prevUsers => [...prevUsers, ...users.data]);
        }
        setHasMore(users.data.length > 0 && users.pages > page);
        setRegistrationChart(registrationUrl);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    },
    [search, eventId]
  );

  useEffect(() => {
    setPage(1);
    setUsers([]);
    fetchUsers(1, true);
  }, [search, eventId, fetchUsers]);

  const loadMoreUsers = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(nextPage);
  };

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

      {registrationChart ? (
        <RegistrationChart registrationChartUrl={registrationChart} />
      ) : (
        <ChartSkeleton />
      )}

      <InfiniteScroll
        dataLength={users.length}
        next={loadMoreUsers}
        hasMore={hasMore}
        loader={<UserCardSkeleton />}
        endMessage={
          users.length > 12 && (
            <p className="text-fogWhiteHover text-2xl md:text-3xl text-center">
              No more users to show
            </p>
          )
        }
        className="flex justify-center items-center flex-wrap gap-4 mt-5"
      >
        {users.map((user: UserResponse) => (
          <UserCard key={user._id} user={user} />
        ))}
      </InfiniteScroll>
    </>
  );
};
