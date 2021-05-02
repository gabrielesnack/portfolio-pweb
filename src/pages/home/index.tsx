import React from 'react';
import DefaultLayout from '@layouts/DefaultLayout'
import Banner from '@modules/home/Banner';
import Projects from '@modules/home/Projects';
import PersonalInformation from '@modules/home/PersonalInformation';
import Footer from '@modules/common/footer/';


export default () => {
  return (
    <DefaultLayout>
      
      <Banner></Banner>

      <Projects></Projects>

      <PersonalInformation></PersonalInformation>

      <Footer></Footer>
    </DefaultLayout>
  )
}

