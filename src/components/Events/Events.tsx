'use client';

import { FC, useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getEvents } from '@/services/api';
import { EventResponse, EventsParams } from '@/utils/definitions';

import { Title } from '../Title/Title';
import { EventCard } from '../EventCard/EventCard';
import { SelectCategory } from '../SelectCategory/SelectCategory';
import { SearchBar } from '../SearchBar/SearchBar';
import { DataPicker } from '../DataPicker/DataPicker';
import { ResetButton } from '../ResetButton/ResetButton';
import { CardSkeleton } from '../Skeleton/Skeleton';
import { SortOptions } from '../SortOptionsEvents/SortOptionsEvents';

interface EventsProps {
  initialParams?: EventsParams;
}

export const Events: FC<EventsProps> = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [reset, setReset] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<string>('asc');

  const fetchEvents = useCallback(
    async (page: number, resetEvents = false) => {
      try {
        const params: EventsParams = {
          filterQuery: searchQuery,
          date: selectedDate,
          category: selectedCategory,
          page,
          limit: 9,
          sortBy,
          sortOrder,
        };
        const response = await getEvents(params);
        if (resetEvents) {
          setEvents(response.data);
        } else {
          setEvents(prevEvents => [...prevEvents, ...response.data]);
        }
        setHasMore(response.pages > page);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    },
    [searchQuery, selectedDate, selectedCategory, sortBy, sortOrder]
  );

  useEffect(() => {
    setPage(1);
    setEvents([]);
    fetchEvents(1, true);
  }, [
    searchQuery,
    selectedDate,
    selectedCategory,
    sortBy,
    sortOrder,
    fetchEvents,
  ]);

  const loadMoreEvents = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchEvents(nextPage);
  };

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDate(null);
    setSelectedCategory(null);
    setSortBy('date');
    setSortOrder('asc');
    setReset(true);
    setPage(1);
    setEvents([]);
    fetchEvents(1, true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <>
      <Title text="Find your" span="events..." />
      <div className="gap-4 md:gap-10 w-full flex flex-wrap justify-center xl:items-start  xl:gap-5">
        <SearchBar
          label="Search by title Events or Country"
          placeholder="Enter query"
          description="The country code in ISO 3166-1 alpha-2 format. E.g. AU,NZ,US,CA..."
          reset={reset}
          onChange={setSearchQuery}
        />
        <DataPicker reset={reset} onChange={setSelectedDate} />
        <SelectCategory reset={reset} onChange={setSelectedCategory} />
        <SortOptions
          reset={reset}
          onChangeSortBy={setSortBy}
          onChangeSortOrder={setSortOrder}
        />
      </div>
      <ResetButton onReset={handleReset} />
      <InfiniteScroll
        dataLength={events.length}
        next={loadMoreEvents}
        hasMore={hasMore}
        loader={<CardSkeleton />}
        endMessage={
          <p className="text-fogWhiteHover text-2xl md:text-3xl">
            No more events to show
          </p>
        }
        className="h-screen w-full flex justify-center items-center flex-wrap gap-4 mt-5"
      >
        {events.map((event: EventResponse) => (
          <EventCard key={event._id} event={event} />
        ))}
      </InfiniteScroll>
    </>
  );
};
