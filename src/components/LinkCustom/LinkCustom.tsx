import { FC } from 'react';
import Link from 'next/link';

interface LinkCustomProps {
  href: string;
  text: string;
}

export const LinkCustom: FC<LinkCustomProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="text-xs font-medium leading-[14px] tracking-textForm text-lightGrey underline transition-all duration-300 hover:text-fogWhite md:text-sm md:leading-[18px] md:tracking-textFormTablet"
    >
      {text}
    </Link>
  );
};
