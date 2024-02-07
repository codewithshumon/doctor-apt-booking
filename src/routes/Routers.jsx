import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Doctors from '../pages/doctors/Doctors';
import DoctorDetails from '../pages/doctors/DoctorDetails';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import MyAccount from '../dashboard/userAccount/MyAccount';
import Dashboard from '../dashboard/doctorAccount/Dashboard';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/users/profile/me" element={<MyAccount />} />
      <Route path="/doctors/profile/me" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
