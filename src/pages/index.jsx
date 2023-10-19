import React from 'react';
import Banner from '../components/home/banner';
import Mileage from '../components/home/mileage';
import HomeServices from '../components/home/homeServices';
import Outstanding from '../components/home/oustanding';
import Rating from '../components/home/rating';

const Home = () => {
  return (
    <main className="mt-[80px]">
      <Banner />
      <section className="px-4 md:px-16 my-4">
        <Outstanding />
        <HomeServices />
        <Mileage />
      </section>
      <Rating />
      {/* <DisclosureSection /> */}
    </main>
  );
};

export default Home;
