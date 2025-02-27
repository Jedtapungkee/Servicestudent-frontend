import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./../styles/Register.css"; // ไฟล์ CSS
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const underlineRef = useRef(null);
    

    useEffect(() => {
        const activeLink = document.querySelector(".nav-links .active-link");
        if (activeLink && underlineRef.current) {
            const { offsetLeft, offsetWidth } = activeLink;
            underlineRef.current.style.left = `${offsetLeft}px`;
            underlineRef.current.style.width = `${offsetWidth}px`;
        }
    }, [location.pathname]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div className="register-container">
            <div className="register-box">
                {/* Header */}
                <div className="register-header">
                    <h2 className="nav-links">
                        <NavLink
                            to="/login"
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                        >
                            เข้าสู่ระบบ
                        </NavLink>
                        &nbsp;|&nbsp;
                        <NavLink
                            to="/register"
                            className={({ isActive }) => (isActive ? "active-link" : "link")}
                        >
                            สมัครสมาชิก
                        </NavLink>
                        {/* เส้นขีดใต้ */}
                        <div className="nav-underline" ref={underlineRef}></div>
                    </h2>
                </div>

                <h1 className="register-logo">
                    JC <span>University</span>
                </h1>

                {/* Form */}
                <form className="register-form">
                    {/* ส่วน 2 คอลัมน์ */}
                    <div className="two-columns">
                        {/* คอลัมน์ซ้าย */}
                        <div className="left-column">
                            <div className="form-group">
                                <label>ชื่อ-นามสกุล</label>
                                <input type="text" placeholder="ชื่อ-นามสกุล" required />
                            </div>
                            <div className="form-group">
                                <label>อีเมล</label>
                                <input type="email" placeholder="aaa@gmail.com" required />
                            </div>
                        </div>

                        {/* คอลัมน์ขวา */}
                        <div className="right-column">
                            <div className="form-group">
                                <label>สาขา</label>
                                <select required>
                                    <option value="">เทคโนโลยีสารสนเทศ</option>
                                    <option value="">วิทยาการคอมพิวเตอร์</option>
                                    <option value="">อื่นๆ</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>คณะ</label>
                                <select required>
                                    <option value="">ศิลปศาสตร์และวิทยาศาสตร์</option>
                                    <option value="">วิศวกรรมศาสตร์</option>
                                    <option value="">อื่นๆ</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* รหัสผ่าน */}
                    <div className="form-group full-width">
                        <label>รหัสผ่าน</label>
                        <input type="password" placeholder="*************" required />
                    </div>

                    {/* ปุ่มสมัครสมาชิก */}
                    <button type="submit" className="register-button" onClick={handleSubmit}>
                        สมัครสมาชิก
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
