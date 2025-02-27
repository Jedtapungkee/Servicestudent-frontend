import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  useEffect(() => {
    // Set underline style
    const activeLink = document.querySelector(".containers a.active");
    if (activeLink && navRef.current) { 
      const { offsetLeft, offsetWidth } = activeLink;
      setUnderlineStyle({
        left: offsetLeft + "px",
        width: offsetWidth + "px",
      });
    }
  }, [location.pathname]);

  if (location.pathname === "/login" || location.pathname === "/register") return null;

  return (
    <nav className="Nav">
      <Link to="/" className="LOGO">JC University</Link>
      <div className="containers" ref={navRef}>
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
        <Link to ="/admin" className={location.pathname === "/admin" ? "active" : ""}>
          สำหรับเจ้าหน้าที่
          </Link>
        <div className="nav-underline" style={underlineStyle}></div>
      </div>
      <Link to="/login" className="login">
        <FaUserCircle className="login-icon" />
      </Link>
    </nav>
  );
};

export default Navbar;
