import React from 'react';
import styles from './disclosure.module.css';
import DisclosureComponent from './disclosure/disclosure';

const DisclosureSection = () => {
  return (
    <section className={styles.disclosure}>
      <aside className={styles.disclosure_img}></aside>
      <article className="mt-10 md:w-[380px] lg:w-[600px] md:px-0">
        <h4 className="text-2xl font-semibold">Reasons why people use us</h4>
        <DisclosureComponent />
      </article>
    </section>
  );
};

export default DisclosureSection;
