import { FC, useState } from "react";
import Input from "../../../components/Input";
import { isValidEmail, isValidMessage, isValidUsername } from "../../../utils/utils";
import CTA from "../../../components/CTA";
import { CodeSandBoxIcon, GithubIcon, LinkedinIcon, SendIcon } from "../../../public/icons/icons";
import { useTranslation } from "next-i18next";
import FooterDecoration from "../../../public/svg/FooterDecoration";
import Link from 'next/link'
import FooterDecorationSM from "../../../public/svg/FooterDecorationSM";

type Props = {}

const Footer: FC<Props> = () => {
  const [emailErrorInformation, setEmailErrorInformation] =
    useState<{
      error: boolean
      errorText: string
    }>({ error: true, errorText: '' })
  const [
    usernameErrorInformation,
    setUsernameErrorInformation,
  ] = useState<{
    error: boolean
    errorText: string
  }>({ error: true, errorText: '' })
  const [
    messageErrorInformation,
    setMessageErrorInformation,
  ] = useState<{
    error: boolean
    errorText: string
  }>({ error: true, errorText: '' })
  
  const {t} = useTranslation('common')
  
  return (
    <footer id='footer' className='mt-s px-8 lg:pl-16 block md:inline-flex w-full text-white bg-electricViolet relative justify-between'>
      <section className='flex flex-col w-full md:w-[40%] pt-16'>
        <h1 className='text-lg font-bold'>{t('contact-me')}</h1>
        <div className='inline-flex mt-12'>
          <div className='flex w-1/2 md:w-unset flex-col'>
            <Input
              elementType='input'
              label='Email'
              inputType='email'
              errorInformation={emailErrorInformation}
              checkErrorFunction={(email) =>
                setEmailErrorInformation(
                  isValidEmail(email)
                )
              }
            />
          </div>
          <div className='flex w-1/2 md:w-unset flex-col ml-4'>
            <Input
              elementType='input'
              label='Username'
              inputType='username'
              errorInformation={usernameErrorInformation}
              checkErrorFunction={(username) =>
                setUsernameErrorInformation(
                  isValidUsername(username)
                )
              }
            />
          </div>
        </div>
        <div className='flex flex-col mt-8'>
          <Input
            elementType='textarea'
            label={t('message')}
            errorInformation={messageErrorInformation}
            checkErrorFunction={(message) =>
              setMessageErrorInformation(
                isValidMessage(message)
              )
            }
          />
          <CTA
            className='mr-auto w-[7.5rem] mt-6 inline-flex bg-lavenderRose'
            text='Send it'
            icon={<SendIcon />}
            isError={
              emailErrorInformation.error ||
              usernameErrorInformation.error ||
              messageErrorInformation.error
            }
          />
        </div>
        <div className='inline-flex mt-12 text-white md:pb-12'>
          <LinkedinIcon className='mr-4 fill-white cursor-pointer w-6 h-6' />
          <GithubIcon className='mr-4 fill-white cursor-pointer w-6 h-6' />
          <CodeSandBoxIcon className='mr-4 fill-white cursor-pointer w-6 h-6' />
          <a href='mailto:samsciatore.19@gmail.com' className='underline'>samsciatore.19@gmail.com</a>
        </div>
      </section>
      <section className='relative mt-16 md:mt-16 flex flex-col w-full md:w-[50%] pb-12 md:pb-0'>
        <h1 className='text-lg font-bold'>{t('navigation')}</h1>
        <Link href='#hero'><a className='mt-8'>{t('home')}</a></Link>
        <Link href='#about-me'><a className='mt-4'>{t('about-me')}</a></Link>
        <Link href='#projects'><a className='mt-4'>{t('projects')}</a></Link>
      </section>
      <FooterDecoration className='hidden md:block absolute right-0 bottom-0 w-96 h-96'/>
      <FooterDecorationSM className='md:hidden absolute right-0 bottom-0 w-[10.5rem] h-40'/>
    </footer>
  );
};

export default Footer;
