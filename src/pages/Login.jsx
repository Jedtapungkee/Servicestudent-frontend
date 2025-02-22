import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // ใช้ NavLink แทน Link
import "./../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/"); 

  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>
            {/* ใช้ NavLink พร้อมกำหนด className ตาม isActive */}
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              เข้าสู่ระบบ
            </NavLink>
            &nbsp;|&nbsp; {/* ใช้ &nbsp; ในการเว้นวรรค */}
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              สมัครสมาชิก
            </NavLink>
          </h2>
        </div>

        <h1 className="logo">JC <span>University</span></h1>

        <form className="login-form">
          <div className="form-group">
            <label>อีเมล</label>
            <input type="email" placeholder="aaa@gmail.com" required />
          </div>
          <div className="form-group">
            <label>รหัสผ่าน</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "" : ""}
              </span>
            </div>
          </div>
          <button type="submit" className="login-button" onClick={handlesubmit}>เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
