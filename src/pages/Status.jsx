import React from "react";
import "./../styles/Status.css"
import { FaTrashAlt, FaSyncAlt } from "react-icons/fa"; // ไอคอนจาก react-icons

const Status = () => {
  // ตัวอย่างข้อมูลคำร้อง
  const requests = [
    {
      id: "REQ001",
      type: "คำร้องทั่วไป",
      status: "กำลังตรวจสอบ",
      statusColor: "orange",
      officer: "คุณ สมชาย หวังผล",
      remark: "",
    },
    {
      id: "REQ002",
      type: "ใบลาพักการศึกษา",
      status: "ถูกปฏิเสธ",
      statusColor: "red",
      officer: "คุณ สมชาย หวังผล",
      remark: "อัปโหลดเอกสารเพิ่มเติม",
    },
    {
      id: "REQ003",
      type: "ใบลาออก",
      status: "ดำเนินการเสร็จสิ้น",
      statusColor: "green",
      officer: "คุณ สมชาย หวังผล",
      remark: "",
    },
    {
      id: "REQ005",
      type: "คำร้องทั่วไป",
      status: "ดำเนินการเสร็จสิ้น",
      statusColor: "green",
      officer: "คุณ สมชาย หวังผล",
      remark: "",
    },
  ];

  return (
    <div className="status-container">
      {requests.map((request, index) => (
        <div className="status-card" key={index}>
          <div className="card-content">
            {/* ข้อมูลด้านซ้าย */}
            <div className="card-info">
              <p><strong>คำร้องที่:</strong> {request.id}</p>
              <p><strong>ประเภทคำร้อง:</strong> {request.type}</p>
              <p>
                <strong>สถานะ:</strong>{" "}
                <span className="status-dot" style={{ backgroundColor: request.statusColor }}></span>
                {request.status}
              </p>
            </div>

            {/* ข้อมูลด้านขวา */}
            <div className="card-info-right">
              <p><strong>เจ้าหน้าที่:</strong> {request.officer}</p>
              <p><strong>หมายเหตุ:</strong> {request.remark}</p>
            </div>

            {/* ปุ่มจัดการคำร้อง */}
            <div className="button-group">
              <button className="refresh-btn">
                <FaSyncAlt /> รีเฟรช
              </button>
              <button className="delete-btn">
                <FaTrashAlt /> ยกเลิกคำร้อง
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Status;
