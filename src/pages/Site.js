import React from 'react';
import Homepage from './Homepage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from './Login';
import SignUp from './Signup';
import Error from '../components/Error';
import Gallery from './Gallery';
import Contact from './Contact';
import ListUsers from './ListUsers';
import { Route, Routes } from "react-router-dom";
import EditUserProfile from './EditUserProfile';

const Site = () => {
  return (
    <>
    <div className="site">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="list" element={<ListUsers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="user/:id/edit" element={<EditUserProfile />} />
        <Route
          path="*"
          element={<Error type="404">Page doesn't exist</Error>}
        />
      </Routes>
      <div className="min-site"></div>
    </div>

    <Footer />
  </>
  )
}

export default Site