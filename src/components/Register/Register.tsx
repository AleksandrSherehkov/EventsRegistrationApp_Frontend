'use client';

import React from 'react';
import { TitleAuth } from './Title/Title';
import { useFormState, useFormStatus } from 'react-dom';
import { useEmailValidation } from '@/hooks/useEmailValidation';

import { InputForm } from '../InputForm/InputForm';

import { LinkCustom } from '../LinkCustom/LinkCustom';
import { useNameValidation } from '@/hooks/useNameValidation';
import { registerEventUser } from '@/services/actions';
import { useBirthDateValidation } from '@/hooks/useBirthDateValidation';
import { ButtonAuth } from '../Button/Button';
import { Radio, RadioGroup } from '@nextui-org/react';

export const Register = () => {
  const [errorMessage, dispatch] = useFormState(registerEventUser, undefined);

  const { nameValid, validateName } = useNameValidation();
  const { emailValid, validateEmail } = useEmailValidation();
  const { birthDateValid, validateBirthDate } = useBirthDateValidation();

  const { pending } = useFormStatus();

  return (
    <div className="w-full h-1/2 mx-auto rounded-[30px] bg-darkGrey p-5  md:px-16  md:pt-10 xl:py-10 sm:w-2/3 lg:w-1/2">
      <div className="max-w-[472px]">
        <TitleAuth text="Event registration" span="a user" />

        <form action={dispatch} className="flex flex-col gap-20 ">
          <div className="flex flex-col gap-8">
            <div className="relative flex flex-col gap-4">
              <InputForm
                type="text"
                name="name"
                label="Full name:"
                errorMessage={errorMessage}
                validate={validateName}
              />
              <InputForm
                type="text"
                name="email"
                label="Email:"
                errorMessage={errorMessage}
                validate={validateEmail}
              />
              <InputForm
                type="text"
                name="birtDate"
                placeholder="dd-MM-yyyy"
                label="Date of birth:"
                errorMessage={errorMessage}
                validate={validateBirthDate}
              />
            </div>
            {errorMessage && (
              <p className="ml-4 mt-4 text-[10px]  text-red md:text-xs ">
                {errorMessage}
              </p>
            )}
            <RadioGroup
              label="Where did yuo hear about this event?"
              orientation="horizontal"
            >
              <Radio value="social">
                <span className="text-fogWhite">Social media</span>
              </Radio>
              <Radio value="friends">
                <span className="text-fogWhite">Friends</span>
              </Radio>
              <Radio value="myself">
                <span className="text-fogWhite">Found myself</span>
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex w-full items-center justify-center sm:justify-around gap-[14px] md:justify-start md:gap-5">
            <ButtonAuth
              pending={pending}
              emailValid={emailValid}
              birthValid={birthDateValid}
              nameValid={nameValid}
              text="Registration"
            />
            <LinkCustom href="/" text="Back to Events" />
          </div>
        </form>
      </div>
    </div>
  );
};
