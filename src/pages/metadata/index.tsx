import React from 'react';
import DefaultLayout from '@layouts/DefaultLayout'
import Banner from '@modules/home/Banner';
import Projects from '@modules/home/Projects';
import PersonalInformation from '@modules/home/PersonalInformation';
import Footer from '@modules/common/footer/';
import Head from './head';


export default () => {
  return (
    <>
      <Head></Head>
      
      <DefaultLayout>
        
        <Banner></Banner>

        <Projects></Projects>

        <PersonalInformation></PersonalInformation>

        <Footer></Footer>
      </DefaultLayout>
    </>
  )
}

