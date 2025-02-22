import React from "react";
import "./..//styles/Request.css"; // ไฟล์ CSS
import { useNavigate } from "react-router-dom";

const DownloadForms = () => {
  const navigate = useNavigate();
  const handleGoToUpload = (e) => {
    navigate("/upload");
  };

  return (
    <div className="download-container">
      {/* Header Section */}
      <div className="header-section">
        <h2>ดาวน์โหลดแบบฟอร์มคำร้องที่ต้องการส่ง</h2>
      </div>

      {/* Forms List (จัดเรียง 2 คอลัมน์) */}
      <div className="forms-list">
        <div className="form-item">
          <p>คำร้องของลงทะเบียนเรียน</p>
          <button className="download-btn">Download</button>
        </div>
        <div className="form-item">
          <p>ใบลาพักการศึกษา</p>
          <button className="download-btn">Download</button>
        </div>
        <div className="form-item">
          <p>คำร้องทั่วไป</p>
          <button className="download-btn">Download</button>
        </div>
        <div className="form-item">
          <p>ใบลาออก</p>
          <button className="download-btn">Download</button>
        </div>
        <div className="form-item">
          <p>คำร้องขอผ่อนผันค่าธรรมเนียมการศึกษา</p>
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* ปุ่มไปยังหน้าอัปโหลดเอกสาร */}
      <div className="upload-section">
        <button className="upload-btn" onClick={handleGoToUpload}>
          ไปยังหน้าอัปโหลดเอกสาร
        </button>
      </div>
    </div>
  );
};

export default DownloadForms;
