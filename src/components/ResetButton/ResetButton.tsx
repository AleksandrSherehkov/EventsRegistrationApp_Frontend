'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@nextui-org/react';

export const ResetButton: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleReset = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('filterQuery');
    params.delete('date');
    params.delete('category');
    router.replace(`?${params.toString()}`);
  };

  return (
    <Button
      className="w-[200px]"
      size="lg"
      color="primary"
      variant="light"
      onClick={handleReset}
    >
      Reset
    </Button>
  );
};
