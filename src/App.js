import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Nav_bar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home_page/Home";
import Login from "./Components/Forms/User_login/Login";
import Signup from "./Components/Forms/User-signup/Signup";
//import Signup from "./Components/Forms/User-signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
