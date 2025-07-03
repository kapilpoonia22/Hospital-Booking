import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Appointments from './pages/Appointments';
import Layout from './Layout';
import About from './pages/About';
import SchoolOfMedicine from './pages/SchoolOfMedicine';
import Footer from './Footer';
import PatientCare from './pages/PatientCare';
import DoctorProfile from './pages/DoctorProfile';
import Research from './pages/Research';
import MyChart from './pages/MyChart';
import ScheduleAppointment from './pages/ScheduleAppointment';
import FindDoctor from './pages/FindDoctor';
import FindTrial from './pages/FindTrial';
import PayBill from './pages/PayBill';
import Employment from './pages/Employment';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/about" element={<About />} />
          <Route path="/SchoolOfMedicine" element={<SchoolOfMedicine />} />
          <Route path="/PatientCare" element={<PatientCare />} />
          <Route path="/research" element={<Research />} />
          <Route path="/mychart" element={<MyChart />} />
          <Route path="/scheduleAppointment" element={<ScheduleAppointment />} />
          <Route path="/finddoctor" element={<FindDoctor />} />
          <Route path="/findtrial" element={<FindTrial />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
          <Route path="/pay-bill" element={<PayBill />} />
          <Route path="/employment" element={<Employment />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
