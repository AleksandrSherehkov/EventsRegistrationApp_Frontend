'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

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
