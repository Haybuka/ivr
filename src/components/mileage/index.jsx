import React from 'react';
import styles from './mileage.module.css';

const Mileage = () => {
  const ratings = [
    { rating: 50, title: 'lorem', text: 'ipsumate' },
    { rating: 950, title: 'Projects', text: 'Completed' },
    { rating: '100+', title: 'awards', text: 'received' },
  ];
  return (
    <section className={styles.mileage}>
      <aside className={styles.mileage_bg}></aside>
      <article className=" lg:w-[600px] my-10 lg:my-0 lg:px-0 lg:mx-3">
        <section className="">
          <h4 className="text-2xl font-semibold bg-white py-3 lg:px-4">
            What makes us different from others
          </h4>
          <div className=" py-3 bg-white lg:px-4">
            <p className="my-3">
              IVR power works is a fast growing electrical and electronics
              business specializing in the installation and maintenance of
              building electrical fittings and various other electrical
              equipment.
            </p>
            <p className="my-3">
              With a team of highly skilled professionals and a commitment to
              delivering exceptional service, we provide reliable and efficient
              electrical and electronic solutions to our valued clients. We
              pride ourselves on our expertise, quality workmanship, and
              dedication to customer satisfaction.
            </p>
          </div>
        </section>
        <section className="flex md:mt-3 bg-white lg:px-4 py-3">
          {ratings.map((rate, id) => (
            <article key={id} className="mr-10 md:mr-14">
              <h5 className="text-2xl font-semibold">{rate.rating}</h5>
              <p>
                <span className="block">{rate.title}</span>
                <span className="block">{rate.text}</span>
              </p>
            </article>
          ))}
        </section>
      </article>
    </section>
  );
};

export default Mileage;
