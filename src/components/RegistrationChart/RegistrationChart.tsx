import React, { FC } from 'react';
import Image from 'next/image';

interface RegistrationChartProps {
  registrationChartUrl: string;
}

export const RegistrationChart: FC<RegistrationChartProps> = ({
  registrationChartUrl,
}) => {
  return (
    <div className="my-4 flex justify-center">
      <Image
        src={registrationChartUrl}
        alt="Registrations per Day"
        width={800}
        height={200}
        priority
      />
    </div>
  );
};
