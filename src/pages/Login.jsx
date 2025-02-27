import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom"; 
import "./../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const underlineRef = useRef(null); // ใช้ useRef ติดตาม underline
  const navRef = useRef(null); // ใช้ ref ติดตาม parent ของ NavLink
  const location = useLocation(); // ใช้ location เพื่อติดตาม URL ที่เปลี่ยนแปลง
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ค้นหาลิงก์ที่ active อยู่
    const activeLink = document.querySelector(".nav-links .active-link");
    if (activeLink && underlineRef.current) {
      const { offsetLeft, offsetWidth } = activeLink;
      // กำหนดตำแหน่ง left และ width ของเส้นขีดใต้
      underlineRef.current.style.left = `${offsetLeft}px`;
      underlineRef.current.style.width = `${offsetWidth}px`;
    }
  }, [location.pathname]); // อัปเดตทุกครั้งที่ URL เปลี่ยน

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2 className="nav-links" ref={navRef}>
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link" : "link")}>
              เข้าสู่ระบบ
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/register" className={({ isActive }) => (isActive ? "active-link" : "link")}>
              สมัครสมาชิก
            </NavLink>
            {/* เส้น underline ที่จะขยับตาม active link */}
            <div className="nav-underline" ref={underlineRef}></div>
          </h2>
        </div>

        <h1 className="logo">JC <span>University</span></h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>อีเมล</label>
            <input type="email" placeholder="aaa@gmail.com" required />
          </div>
          <div className="form-group">
            <label>รหัสผ่าน</label>
            <div className="password-field">
              <input type={showPassword ? "text" : "password"} placeholder="*************" required />
              <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button" onClick={handleSubmit}>เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
