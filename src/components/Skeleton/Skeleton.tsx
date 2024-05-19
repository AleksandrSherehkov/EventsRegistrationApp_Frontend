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

export const DetailsEventSkeleton: FC = () => {
  return (
    <Card
      className="bg-fogGreyHover dark w-full md:w-[519px] md:h-[164px] space-y-5 p-4"
      radius="lg"
    >
      <Skeleton className=" h-8 rounded-lg">
        <div className="h-8 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="flex flex-col items-end space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export const UserCardSkeleton: FC = () => {
  const skeletonCardsUser = Array.from({ length: 12 });

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-5">
      {skeletonCardsUser.map((_, cardIndex) => (
        <Card
          key={cardIndex}
          className="bg-fogGreyHover dark w-[288px] h-[144px] space-y-5 p-4 flex items-center "
          radius="lg"
        >
          <div className="w-full h-full flex gap-4 items-center justify-center ">
            <div>
              <Skeleton className=" rounded-full w-12 h-12" />
            </div>
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-3 w-[150px] rounded-lg" />
              <Skeleton className="h-3  w-[150px] rounded-lg" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export const ChartSkeleton: FC = () => {
  const skeletonCardsRow = Array.from({ length: 9 });

  return (
    <Card
      className="mx-auto flex flex-col items-center gap-1 md:gap-2 mt-5 dark w-full h-[88px] md:w-[728px] md:h-[178px] lg:w-[800px] lg:h-[200px] bg-fogGreyHover md:p-4 p-2"
      radius="lg"
    >
      {skeletonCardsRow.map((_, cardIndex) => (
        <div key={cardIndex} className="w-full">
          <Skeleton className="h-1 md:h-3 w-full rounded-lg" />
        </div>
      ))}
    </Card>
  );
};
