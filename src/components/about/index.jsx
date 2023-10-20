import React from 'react';
import Banner from './banner';
// import Card from '../card';

const Index = () => {
  return (
    <main className="mt-20 md:px-0">
      <Banner />
      <section>
        <h4 className="text-3xl font-semibold bg-white  lg:px-4 font-titilium text-center my-10 md:my-20">
          Why Choose Us ?
        </h4>
      </section>
      <section className="flex flex-col-reverse md:flex-row justify-center px-4 md:px-0 items-center my-10 md:my-32">
        <aside className="w-full my-4 md:w-[500px] ">
          <h4 className="text-2xl font-semibold bg-white lg:px-4 font-titilium">
            Expertise and Experience
          </h4>
          <div className=" bg-white lg:px-4">
            <p className="my-3">
              With years of experience in the industry, our team has the
              knowledge and skills to handle projects of any scale or
              complexity.
            </p>
            <p className="my-3">
              We stay up-to-date with the latest technological advancements to
              deliver innovative solutions tailored to our clients' specific
              requirements
            </p>
          </div>
        </aside>
        <aside className="h-[400px] w-full md:w-[600px] bg-black"></aside>
      </section>
    </main>
  );
};

export default Index;
