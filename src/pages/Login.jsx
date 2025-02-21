import React, { useState } from "react";
import "./../styles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>เข้าสู่ระบบ <span className="sub-text">สมัครสมาชิก</span></h2>
        <h1 className="logo">JC <span>University</span></h1>

        <form className="login-form">
          <label>อีเมล</label>
          <input type="email" placeholder="aaa@gmail.com" required />

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

          <button type="submit" className="login-button">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
