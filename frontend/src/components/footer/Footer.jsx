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

const Footer = () => {
  return <div>Footer</div>;
};

export default Footer;
