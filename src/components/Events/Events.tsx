'use client';

import { FC, useState, useEffect } from 'react';
import { getEvents } from '@/services/api';
import { EventResponse, EventsParams } from '@/utils/definitions';

import { Title } from '../Title/Title';
import { EventCard } from '../EventCard/EventCard';
import { SelectCategory } from '../SelectCategory/SelectCategory';
import { SearchBar } from '../SearchBar/SearchBar';
import { DataPicker } from '../DataPicker/DataPicker';
import { ResetButton } from '../ResetButton/ResetButton';

interface EventsProps {
  initialParams?: EventsParams;
}

export const Events: FC<EventsProps> = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [reset, setReset] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const params: EventsParams = {
          filterQuery: searchQuery,
          date: selectedDate,
          category: selectedCategory,
        };
        const response = await getEvents(params);
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, [searchQuery, selectedDate, selectedCategory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedDate(null);
    setSelectedCategory(null);
    setReset(true);
    setTimeout(() => setReset(false), 0);
  };

  return (
    <>
      <Title text="Find your" span="events..." />
      <div className="gap-4 md:gap-10 w-full flex flex-wrap justify-between">
        <SearchBar
          label="Search by title Events or Country"
          placeholder="Enter query"
          description="The country code in ISO 3166-1 alpha-2 format. E.g. AU,NZ,US,CA..."
          reset={reset}
          onChange={setSearchQuery}
        />
        <DataPicker reset={reset} onChange={setSelectedDate} />
        <SelectCategory reset={reset} onChange={setSelectedCategory} />
      </div>
      <ResetButton onReset={handleReset} />
      <ul className="mt-5 w-full flex justify-center items-center flex-wrap gap-4">
        {events.map((event: EventResponse) => (
          <EventCard key={event._id} event={event} />
        ))}
      </ul>
    </>
  );
};
