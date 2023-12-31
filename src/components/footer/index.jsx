import React from 'react';
import Section from './section';
import { Link } from 'react-router-dom';

const Footer = () => {
  const about = ['Our story', 'Designer', 'Products'];
  const support = [`FAQ's`, 'Features', 'Help center'];
  const contact = [`0814 278 7101`, 'Iivrpowerworks@gmail.com'];
  const icons = [
    { name: 'twitter', url: '/social_icons/twitter.svg' },
    { name: 'linkedIn', url: '/social_icons/linked.svg' },
    { name: 'youtube', url: '/social_icons/youtube.svg' },
    { name: 'instagram', url: '/social_icons/insta.svg' },
  ];

  return (
    <footer className="py-6 md:px-16 pt-0 px-4 bg-white text-black">
      <div className="md:flex justify-between items-start flex-row-reverse">
        <Section heading="About us" list={about} />
        <Section heading="Support" list={support} />
        <Section heading="Contact us" list={contact} />
        <section className="mb-6 md:mb-0">
          <aside className="flex items-center text-black font-bold">
            <h3 className="text-orange-600 font-bold text-2xl lg:text-3xl font-odor ">
              <Link to={'/'} className="inline-block">
                IPW
              </Link>
            </h3>
          </aside>
          <p className="my-3">
            <span className="block">39 Ope Ifa street, </span>
            <span className="block">anthony village, Lagos.</span>
          </p>
          {/* <ul className="flex my-4">
            {icons.map((icon, id) => (
              <li className="rounded-md overflow-hidden mr-3" key={id}>
                <Image src={icon.url} alt={icon.name} width={30} height={30} />
              </li>
            ))}
          </ul> */}
        </section>
      </div>
      <aside className="flex justify-center border-t-2 pt-6 md:mt-10">
        <p>&copy; 2023; IVR Power</p>
      </aside>
    </footer>
  );
};

export default Footer;
