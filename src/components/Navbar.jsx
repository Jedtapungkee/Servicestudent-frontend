import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation(); // ตรวจสอบ path ปัจจุบัน
  if (location.pathname === "/login") return null; // ถ้าอยู่ที่ path /login ให้ไม่แสดง Navbar
  if (location.pathname === "/register") return null; // ถ้าอยู่ที่ path /register ให้ไม่แสดง Navbar

  return (
    <nav className="Nav">
      <Link to="/" className="LOGO">JC University</Link>
      <div className="containers">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          หน้าหลัก
        </Link>
        <Link to="/request" className={location.pathname.includes("/request") ||
          location.pathname.includes("/upload") ||
          location.pathname.includes("/send") ? "active" : ""}>
          ยื่นคำร้องออนไลน์
        </Link>
        <Link to="/status" className={location.pathname === "/status" ? "active" : ""}>
          ติดตามสถานะ
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          ติดต่อเจ้าหน้าที่
        </Link>
      </div>
      <Link to="/login" className="login">
        <FaUserCircle className="login-icon" /> {/* แสดงไอคอนแทนข้อความ */}
      </Link>
    </nav>
  );
};

export default Navbar;
