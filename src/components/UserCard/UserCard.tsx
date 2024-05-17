import React, { FC } from 'react';
import { UserResponse } from '@/utils/definitions';
import { User } from '@nextui-org/react';

type UserCardProps = {
  user: UserResponse;
};

export const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <User
      as="li"
      key={user._id}
      name={user.name}
      description={user.email}
      classNames={{
        base: 'bg-fogGreyHover p-3 h-36 w-72 ring-1 ring-lightGrey ring-offset-1 ring-offset-lightBlack',
        wrapper: 'w-56 flex flex-col gap-2',
        name: 'text-xl text-default-300 font-medium italic',
        description: 'text-sm text-default-400',
      }}
      avatarProps={{
        isDisabled: false,
        size: 'lg',
      }}
    />
  );
};
