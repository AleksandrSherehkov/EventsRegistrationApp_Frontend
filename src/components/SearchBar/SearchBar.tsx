'use client';

import { Input } from '@nextui-org/react';
import { FC, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

interface SearchBarProps {
  label: string;
  placeholder: string;
  description?: string;
  reset: boolean;
  onChange: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  label,
  placeholder,
  description,
  reset,
  onChange = () => {},
}) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedOnChange = useMemo(() => debounce(onChange, 300), [onChange]);

  useEffect(() => {
    if (reset) setInputValue('');
  }, [reset]);

  useEffect(() => {
    if (debouncedOnChange) {
      debouncedOnChange(inputValue);

      return () => {
        debouncedOnChange.cancel();
      };
    }
  }, [inputValue, debouncedOnChange]);

  return (
    <div className="w-max ">
      <Input
        className="dark w-[250px]"
        type="text"
        label={label}
        description={description}
        radius="full"
        size="sm"
        placeholder={placeholder}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        variant="underlined"
      />
    </div>
  );
};
