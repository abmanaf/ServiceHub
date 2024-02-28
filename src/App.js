import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Nav_bar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home_page/Home";
import Login from "./Components/Forms/User_login/Login";
import Signup from "./Components/Forms/User-signup/Signup";
import Provider from "./Components/Forms/Service-provider/Provider";
import Service from "./Components/Servicce/Service";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Terms from "./Components/TermsCondition/Terms";
import Policy from "./Components/Policy/Policy";
import Data from "./Databas/Data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [storedUsers, setStoredUsers] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  return (
    <div className="App">
      <Navbar />
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
}

export default App;
