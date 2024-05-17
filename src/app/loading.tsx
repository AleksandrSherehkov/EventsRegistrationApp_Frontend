import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center  min-h-screen max-w-7xl  mx-auto ">
      <Spinner label="Loading..." size="lg" />
    </main>
  );
}
