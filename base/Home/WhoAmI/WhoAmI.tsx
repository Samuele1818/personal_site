import { FC } from 'react'
import Section from '../../../components/Section'
import { useTranslation } from 'next-i18next'
import WhoAmIBottom from '/public/svg/WhoAmIBottom.svg'
import TextWrapper from '../../../components/TextWrapper'

type Props = {}

const WhoAmI: FC<Props> = () => {
 const { t } = useTranslation(['common', 'whoami'])

 return (
  <Section className='bg-white dark:bg-black'>
   <section className='flex flex-col'>
    <TextWrapper
     title={t('whoami:who-am-i')}
     text={t('whoami:who-am-i-text')}
     link={undefined}
    />
   </section>
   <section></section>
   <WhoAmIBottom className='absolute bottom-0 left-0 right-0 w-full max-w-screen z-[0]' />
  </Section>
 )
}

export default WhoAmI
