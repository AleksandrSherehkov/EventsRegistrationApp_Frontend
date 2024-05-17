'use client';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';

export const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <Button size="lg" color="primary" variant="light" onClick={handleBack}>
        Back
      </Button>
    </div>
  );
};
