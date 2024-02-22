import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Doctors from './pages/doctors/Doctors';
import DoctorDetails from './pages/doctors/DoctorDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Services from './pages/Services';
import ProtectedRoute from './routes/ProtectedRoute';
import MyAccount from './dashboard/userAccount/MyAccount';
import Dashboard from './dashboard/doctorAccount/Dashboard';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  return (
    <>
      <BrowserRouter>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/users/profile/me"
            element={
              <ProtectedRoute allowedRoles={['patient']}>
                <MyAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/profile/me"
            element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
