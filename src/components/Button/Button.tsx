import clsx from 'clsx';
import { FC } from 'react';
interface ButtonProps {
  pending: boolean;
  emailValid?: boolean;
  nameValid?: boolean;
  birthValid?: boolean;
  text?: string;
}
export const ButtonAuth: FC<ButtonProps> = ({
  pending,
  emailValid,
  birthValid,
  text,
  nameValid = true,
}) => {
  return (
    <button
      aria-disabled={pending}
      disabled={!emailValid || !birthValid}
      type="submit"
      title={!emailValid || !birthValid ? 'Please fill in all fields' : ''}
      className={clsx(
        'rounded-[30px] border-[2px] border-inherit bg-fogWhite px-[44px] py-[11px] text-[14px] font-bold leading-[18px] tracking-textButton text-darkGrey  md:px-[53px] md:py-[15px] md:text-[20px]',
        {
          'cursor-not-allowed bg-fogWhite opacity-50':
            !emailValid || !birthValid || !nameValid,
          'transition-all duration-300 hover:border-[2px] hover:border-fogWhiteHover hover:bg-inherit hover:text-fogWhite':
            emailValid && birthValid && nameValid,
        }
      )}
    >
      {text}
    </button>
  );
};
