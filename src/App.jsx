import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Status from "./pages/Status";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register"; // เพิ่ม import Register
import Upload from "./pages/Uploaddoc"; // เพิ่ม import Upload
import Send from "./pages/Send"; // เพิ่ม import Send
import "leaflet/dist/leaflet.css"; // เพิ่ม import leaflet.css
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router basename="/Servicestudent-frontend/"> {/* ตั้งค่า basename */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/status" element={<Status />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/send" element={<Send />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
