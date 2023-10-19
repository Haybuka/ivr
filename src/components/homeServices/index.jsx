import React from 'react';

const HomeServices = () => {
  const overview = [
    {
      title: '',
      description: '',
      id: 1,
    },
    {
      title: '',
      description: '',
      id: 2,
    },
    {
      title: '',
      description: '',
      id: 3,
    },
    {
      title: '',
      description: '',
      id: 4,
    },
  ];

  return (
    <section>
      <h4 className="text-2xl font-semibold bg-white py-3 px-4 text-center my-4">
        Our services
      </h4>
      <aside className="grid grid-cols-12 justify-between items-center flex-wrap gap-4">
        {overview.map((view) => (
          <div
            key={view.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 md:w-full w-full h-[400px] md:h-[350px] bg-black rounded-md"
          ></div>
        ))}
      </aside>
      <p className="border capitalize rounded-md w-[160px] mx-auto text-center my-4 py-3">
        Learn More
      </p>
    </section>
  );
};

export default HomeServices;
