import React from "react";
import "./../styles/Home.css"; // Import CSS

const Home = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="header">
        <h1>ยื่นคำร้อง & <br/>
        ส่งเอกสารออนไลน์ <br/>
        ได้ง่ายๆ <br/>
        ในไม่กี่ขั้นตอน </h1>
        <p>ประหยัดเวลาและสะดวกสบาย</p>
      </div>

      {/* Features Section */}
      <div className="features">
        <FeatureCard
          title="ยื่นคำร้องออนไลน์"
          description="เลือกประเภทคำร้องได้สะดวกรวดเร็ว"
          icon="/assets/feature1.png"
        />
        <FeatureCard
          title="อัปโหลดเอกสาร รวดเร็ว"
          description="ไม่ต้องเดินทาง ส่งเอกสารผ่านระบบได้เลย!"
          icon="/assets/feature2.png"
        />
        <FeatureCard
          title="ตรวจสอบสถานะ"
          description="รู้ผลแบบเรียลไทม์ ไม่ต้องรอการติดต่อ"
          icon="/assets/feature3.png"
        />
        <FeatureCard
          title="แจ้งเตือนอัตโนมัติ"
          description="ไม่พลาดทุกขั้นตอนเอกสารสำคัญ"
          icon="/assets/feature4.png"
        />
      </div>

      {/* Steps Section */}
      <div className="steps">
        <h2>4 ขั้นตอน การใช้งานง่ายๆ</h2>
        <ol>
          <li><span>1.</span> ลงทะเบียน/เข้าสู่ระบบ</li>
          <li><span>2.</span> ดาวน์โหลดแบบฟอร์มที่ต้องการส่ง</li>
          <li><span>3.</span> เลือกประเภทคำร้อง/อัปโหลดเอกสาร</li>
          <li><span>4.</span> รอการตรวจสอบ & รับการแจ้งเตือน</li>
        </ol>
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
