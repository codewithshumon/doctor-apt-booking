import { Link } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from 'react-icons/ai';

import logo from './../../assets/images/logo.png';

const socialLinks = [
  {
    path: 'https://www.youtube.com/',
    icon: <AiFillYoutube className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: 'https://github.com/',
    icon: <AiFillGithub className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: 'https://www.instagram.com/',
    icon: <AiOutlineInstagram className=" group-hover:text-white w-4 h-5" />,
  },
  {
    path: 'https://www.linkedin.com/',
    icon: <RiLinkedinFill className=" group-hover:text-white w-4 h-5" />,
  },
];

const quickLink01 = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About Us',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/blog',
    display: 'Blog',
  },
];

const quickLink02 = [
  {
    path: '/fing-a-doctor',
    display: 'Find a Doctor',
  },
  {
    path: '/appointment',
    display: 'Request a Appointment',
  },
  {
    path: '/location',
    display: 'Find a Location',
  },
  {
    path: '/opinion',
    display: 'Get a Opinion',
  },
];
const quickLink03 = [
  {
    path: '/donate',
    display: 'Donate',
  },
  {
    path: '/contact',
    display: 'Contact Us',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer_section pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by{' '}
              <Link to={'https://softozet.vercel.app'} className=" font-bold">
                Softozet Limited
              </Link>{' '}
              all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>

            <ul>
              {quickLink01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>

            <ul>
              {quickLink02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>

            <ul>
              {quickLink03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
