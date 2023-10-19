import React from 'react';
import Banner from '../components/banner';
import Mileage from '../components/mileage';
import HomeServices from '../components/homeServices';
import Outstanding from '../components/oustanding';
import Rating from '../components/rating';

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
