import { FC } from 'react';

interface TitleProps {
  text: string;
  span: string;
}

export const Title: FC<TitleProps> = ({ text, span }) => {
  return (
    <h1 className="mb-5 text-center text-[32px] font-bold leading-8 tracking-titleForm text-fogWhite md:mb-10 md:text-[54px]  lg:text-[64px] md:leading-[60px] md:tracking-titleFormTablet ">
      {text} <span className="text-grey"> {span}</span>
    </h1>
  );
};
