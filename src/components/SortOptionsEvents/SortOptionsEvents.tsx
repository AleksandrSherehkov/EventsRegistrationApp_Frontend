'use client';

import React, { FC, useState, useEffect } from 'react';

interface SortOptionsProps {
  reset: boolean;
  onChangeSortBy: (sortBy: string) => void;
  onChangeSortOrder: (sortOrder: string) => void;
}

export const SortOptions: FC<SortOptionsProps> = ({
  reset,
  onChangeSortBy,
  onChangeSortOrder,
}) => {
  const [sortBy, setSortBy] = useState<string>('date');
  const [sortOrder, setSortOrder] = useState<string>('asc');

  useEffect(() => {
    if (reset) {
      setSortBy('date');
      setSortOrder('asc');
    }
  }, [reset]);

  useEffect(() => {
    onChangeSortBy(sortBy);
  }, [sortBy, onChangeSortBy]);

  useEffect(() => {
    onChangeSortOrder(sortOrder);
  }, [sortOrder, onChangeSortOrder]);

  return (
    <div className="sort-options">
      <label htmlFor="sort-by">Sort By:</label>
      <select
        id="sort-by"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        <option value="date">Date</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
      </select>

      <label htmlFor="sort-order">Sort Order:</label>
      <select
        id="sort-order"
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
