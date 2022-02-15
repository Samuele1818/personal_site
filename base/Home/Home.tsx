import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import Header from "./Header";
import Hero from "./Hero";
import ProjectContainer from "../../components/ProjectContainer";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import BestProjectSecondBlob from "../../public/svg/BestProjectSecondBlob";
import BestProjectFirstBlob from "../../public/svg/BestProjectFirstBlob";

const Home: NextPage = () => {
 const { t } = useTranslation('common')
 return (
  <>
   <Header />
   <Hero />
   <section className='relative mt-24 h-screen w-full flex justify-start'>
     <BestProjectFirstBlob width='25%' height='25%' className='absolute -top-16 -left-12 lg:-left-32 hidden lg:block' />
     <ProjectContainer
     link='/best-project'
     image='/images/best-project.png'
     subTitle={'best-project'}
     title={t('best-project-title')}
     text={t('best-project-text')}
     rtl/>
    <BestProjectSecondBlob width='50%' height='100%' className='absolute bottom-12 -right-80 hidden lg:block'/>
   </section>
   <Projects />
   <AboutMe />
   <Skills />
  </>
 )
}

export default Home
