import IntroductionStatement from '../components/IntroductionStatement';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects/Projects';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="2xl:px-[26rem] xl:px-60 lg:px-16 md:px-12 px-8 overflow-x-hidden">
      <Head>
        <title>Andrew Lin </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroductionStatement />

      <About />

      <Technologies />

      <Projects />

      <ContactInfo />

      <Footer />
    </div>
  );
};

export default Home;
