import React from 'react';
import styles from './banner.module.css';
import cls from 'classnames';
import Button from '../button/button';

const Banner = () => {
  return (
    <section className={cls(styles.banner)}>
      <aside className={cls(styles.banner_grid, 'hidden')}>
        <div className={cls(styles.grid_one)}></div>
        <div className={cls(styles.grid_two)}></div>
        <div className={cls(styles.grid_three)}></div>
      </aside>
      <aside className={styles.mobile}></aside>
      <article className="py-6 px-4 md:px-[30px] lg:mr-[80px] font-titilium">
        <h2 className="uppercase font-semibold text-4xl md:text-5xl lg:text-6xl ">
          <p>ivr</p>
          <p className="flex items-center">power</p>
          <p>works</p>
        </h2>
        <p className="w-auto lg:w-[380px] my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo
          explicabo minima minus autem perspiciatis quo saepe consequatur
          aperiam sunt.
        </p>
        <Button text="Get in Touch" propStyle="inline-block my-3" />
      </article>
    </section>
  );
};

export default Banner;
