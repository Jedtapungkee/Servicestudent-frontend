import React, { useState } from "react";
import "./../styles/Uploaddoc.css"; // นำเข้าไฟล์ CSS
import { FaFileUpload, FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const UploadDocument = () => {
  const [selectedCategory, setSelectedCategory] = useState("คำร้องทั่วไป");
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const navigation = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileUpload = (event, setFile) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile); // บันทึกไฟล์ที่อัปโหลด
  };

  const handleSubmit = (e) => {
    navigation("/send");
    };

  const handleBack = (e) => {
    navigation("/request");
  };

  return (
    <div className="upload-container">
      <h2 className="title">อัปโหลดเอกสาร</h2>

      {/* Section เลือกประเภทคำร้อง */}
      <div className="category-section">
        <label className="category-label">เลือกประเภทคำร้อง</label>
        <select value={selectedCategory} onChange={handleCategoryChange} className="category-select">
          <option>คำร้องทั่วไป</option>
          <option>ใบลาพักการศึกษา</option>
          <option>คำร้องขอลาออก</option>
          <option>ขอผ่อนผันค่าธรรมเนียม</option>
          <option>คำร้องของลงทะเบียนเรียน</option>
        </select>
      </div>

      {/* Section อัปโหลดเอกสาร */}
      <div className="file-upload-section">
        <div className="file-box">
          <p>ไฟล์เอกสารคำร้อง</p>
          <label className="file-upload">
            <FaFileUpload className="upload-icon" />
            <input type="file" onChange={(e) => handleFileUpload(e, setFile1)} />
            <span className="file-label">{file1 ? file1.name : "Add file"}</span>
          </label>
        </div>

        <div className="file-box">
          <p>ไฟล์เอกสารเพิ่มเติม (ถ้ามี)</p>
          <label className="file-upload">
            <FaFileUpload className="upload-icon" />
            <input type="file" onChange={(e) => handleFileUpload(e, setFile2)} />
            <span className="file-label">{file2 ? file2.name : "Add file"}</span>
          </label>
        </div>
      </div>

      {/* ปุ่มส่งเอกสาร */}
      <button className="submit-btn" onClick={handleSubmit}>
        ส่งเอกสาร
      </button>

       {/* กล่องคำแนะนำ */}
       <div className="warning-box">
        <h3>ข้อควรระวัง !</h3>
        <ul>
          <li>1.ตั้งชื่อไฟล์เป็น <strong>คำร้อง_ชื่อนักศึกษา.pdf</strong></li>
          <li>2.ไฟล์ควรเป็น <strong>นามสกุล .pdf</strong></li>
          <li>3.ขนาดไฟล์ต้องไม่เกิน <strong>10 MB</strong></li>
          <li>4.ตรวจสอบไฟล์ก่อนส่ง<strong>เเละไฟล์สามารถเปิดได้ปกติก่อนส่ง</strong></li>
        </ul>
      </div>


      {/* ปุ่มย้อนกลับ */}
      <button className="back-btn" onClick={handleBack}>
        <FaArrowLeft className="back-icon" />
        ย้อนกลับ
      </button>
    </div>
  );
};

export default UploadDocument;
