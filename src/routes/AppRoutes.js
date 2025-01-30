import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "../features/navBar/NavBar";
import Home from "../pages/homePage/Home";
import Login from "../pages/userLogin/Login";
import Signup from "../pages/userSignup/Signup";
import Provider from "../pages/serviceProvider/Provider";
import Service from "../pages/service/Service";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Terms from "../features/termsCondition/Terms";
import Policy from "../features/policy/Policy";
import Data from "../Databas/Data";
import Footer from "../features/footer/Footer";

const AppRoutes = () => {
  const [storedUsers, setStoredUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route
          path="/Provider"
          element={
            <Provider
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
        <Route
          path="/Signup"
          element={
            <Signup
              storedUsers={storedUsers}
              updateEnteredDetails={setStoredUsers}
            />
          }
        />
        <Route
          path="/Data"
          element={<Data storedUsers={storedUsers} userDetails={userDetails} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Policy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRoutes;
