'use client'
import { About, BackToTop, Collection, Contact, Discount, Discover, Footer, Header, Hero, Newsletter, Reviews } from '@/components';
import React from 'react';

const Page = () => {
  return (
    <div className='duration-700 selection:bg-green-500 selection:text-white transition-all ease-in-out' >
      <BackToTop/>
      <Header/>
      <Hero/>
      <Discover/>
      <Collection/>
      <About/>
      <Reviews/>
      <Discount/>
      <Newsletter/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Page;
