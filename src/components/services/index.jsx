import imageOne from '../../assets/services/services_1.jpg';
import imageTwo from '../../assets/services/services_2.jpg';
import imageThree from '../../assets/services/services_3.jpg';
import imageFour from '../../assets/services/services_4.jpg';
import Card from '../card/card';

const Index = () => {
  const services = [
    {
      id: 1,
      title: 'Electrical Installation',
      text_one:
        'We offer comprehensive electrical installation services for residential, commercial, and industrial buildings.',
      text_two:
        ' Our experienced electricians ensure safe and efficient installation of electrical systems, including wiring, lighting fixtures, switches, sockets, circuit breakers, and distribution boards.',
      imageSrc: imageOne,
    },
    {
      id: 2,
      title: 'Electrical Maintenance',
      text_one:
        'Our team of experts provides regular maintenance and inspection services to ensure that your electrical systems are functioning optimally and comply with safety standards. ',
      text_two:
        ' We offer preventive maintenance, troubleshooting, and repairs to minimize downtime and extend the lifespan of your electrical equipme ',
      imageSrc: imageTwo,
    },
    {
      id: 3,
      title: 'Automation Systems',
      text_one:
        'We specialize in designing and installing advanced automation systems for residential and commercial properties. ',
      text_two:
        ' Our solutions include smart lighting, home automation, security systems, access control, energy management, and more. We integrate cutting-edge technology to enhance comfort, convenience, and energy efficiency',
      imageSrc: imageThree,
    },
    {
      id: 4,
      title: 'Data and Networking Solutions',
      text_one:
        'We offer comprehensive data and networking solutions to meet the increasing demands of the digital age.  ',
      text_two:
        'Our services include structured cabling, network design and installation, wireless network setup, data center infrastructure, and IT equipment installation. We ensure reliable connectivity and seamless data transmission for your business n ',
      imageSrc: imageFour,
    },
  ];

  return (
    <>
      {services.map((service) => (
        <Card service={service} />
      ))}
    </>
  );
};

export default Index;
