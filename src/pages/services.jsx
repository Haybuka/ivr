import React from 'react';
import Banner from '../components/about/banner';
import Index from '../components/services';

const Services = () => {
  return (
    <main className="mt-20 md:px-0">
      <Banner text={'Services'} />
      <Index />
    </main>
  );
};

export default Services;
