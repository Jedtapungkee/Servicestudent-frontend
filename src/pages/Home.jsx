import React from "react";
import "./../styles/Home.css"; // Import CSS

const Home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <div className="header-text">
          <h1>ยื่นคำร้อง & <br />
            ส่งเอกสารออนไลน์ <br />
            ได้ง่ายๆ <br />
            ในไม่กี่ขั้นตอน!</h1>
          <p>ประหยัดเวลาและสะดวกสบาย</p>
        </div>
        <div className="header-images">
          <img src="./images/docbg1.png" alt="study" className="image-left" />
          <img src="./images/docbg2.png" alt="document" className="image-center" />
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <FeatureCard
          title="ยื่นคำร้องออนไลน์"
          description={"ส่งคำร้องต่างๆ\nได้สะดวกและรวดเร็ว"}
          icon="./icons/doc_icon.png"
        />
        <FeatureCard
          title="อัปโหลดเอกสาร รวดเร็ว"
          description={"ไม่ต้องเดินทางส่งเอกสาร\nผ่านระบบได้เลย!"}
          icon="./icons/uploadcl_icon.png"
        />
        <FeatureCard
          title="ตรวจสอบสถานะ"
          description={"รู้ผลแบบเรียลไทม์\nไม่ต้องรอการติดต่อ"}
          icon="./icons/correct_icon.png"
        />
        <FeatureCard
          title="แจ้งเตือนอัตโนมัติ"
          description="ไม่พลาดทุกขั้นตอนเอกสารสำคัญ"
          icon="./icons/alarm_icon.png"
        />
      </div>

      {/* Steps Section */}
      <div className="steps">
      <div className="steps-content">
        <h2>4 ขั้นตอน <br/>
        การใช้งานง่ายๆ</h2>
        <ol className="steps-list">
          <li><span></span> ลงทะเบียน/เข้าสู่ระบบ</li>
          <li><span></span> ดาวน์โหลดแบบฟอร์มที่ต้องการส่ง</li>
          <li><span></span> เลือกประเภทคำร้อง/อัปโหลดเอกสาร</li>
          <li><span></span> รอการตรวจสอบ & รับการแจ้งเตือน</li>
        </ol>
      </div>
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Home;
