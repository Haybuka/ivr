import React from 'react';
import Form from './form';
import Aside from './aside';
const Quote = () => {
  const contactDeets = [
    {
      title: 'email',
      src: '../../../assets/contact/mail.png',
      value: 'ivrpowerworks@gmail.com',
    },
    {
      title: 'Phone',
      src: '../../../assets/contact/phone.svg',
      value: '09786275265479',
    },
    {
      title: 'Address',
      src: '../../../assets/contact/address.png',
      value: '39 Ope Ifa street anthony village, Lagos.',
    },
  ];

  return (
    <section className="my-14 lg:flex md:px-[50px] lg:px-[110px] justify-center">
      <Aside contactDetails={contactDeets} />
      <Form />
    </section>
  );
};

export default Quote;
