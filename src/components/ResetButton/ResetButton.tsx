'use client';

import { FC } from 'react';
import { Button } from '@nextui-org/react';

interface ResetButtonProps {
  onReset: () => void;
}

export const ResetButton: FC<ResetButtonProps> = ({ onReset }) => {
  return (
    <Button
      className="w-[200px]"
      size="lg"
      color="primary"
      variant="light"
      onClick={onReset}
    >
      Reset
    </Button>
  );
};
