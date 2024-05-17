import { FC } from 'react';
import { Card, Skeleton } from '@nextui-org/react';

export const CardSkeleton: FC = () => {
  const skeletonCards = Array.from({ length: 6 });
  const skeletonLines = Array.from({ length: 9 });

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skeletonCards.map((_, cardIndex) => (
        <Card
          className="dark w-[340px] h-[402px] space-y-5 p-4"
          radius="lg"
          key={cardIndex}
        >
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-3 flex flex-col justify-center items-center">
              {skeletonLines.map((_, lineIndex) => (
                <Skeleton className="w-4/5 rounded-lg" key={lineIndex}>
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
              ))}
            </div>
            <div className="flex justify-around">
              <Skeleton className="w-36 rounded-lg h-10">
                <div className="h-3 w-36  rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-36  rounded-lg h-10">
                <div className="h-3 w-36  rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
