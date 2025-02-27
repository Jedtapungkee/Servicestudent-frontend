import React, { useEffect, useState } from "react";
import "./../styles/AdminDashboard.css";

const AdminDashboard = () => {



  const [requests, setRequests] = useState([
    { id: 1, type: "ขออนุมัติลา", status: "pending", officer: "สมชาย หวังผล"},
    { id: 2, type: "ขอทุนการศึกษา", status: "approved", officer: "มะนาว จิตดี" },
    { id: 3, type: "ขอเปลี่ยนแปลงรายวิชา", status: "rejected", officer: "สมชาย หวังผล" },
    { id: 4, type: "ขออนุมัติลา", status: "pending", officer: "มะนาว จิตดี" },
    { id: 5, type: "ขออนุมัติลา", status: "pending", officer: "มะนาว จิตดี" },
    { id: 6, type: "ขอทุนการศึกษา", status: "pending", officer: "สมชาย หวังผล" },
    { id: 7, type: "ขอเปลี่ยนแปลงรายวิชา", status: "pending", officer: "มะนาว จิตดี" },
    { id: 8, type: "ขออนุมัติลา", status: "pending", officer: "สมชาย หวังผล" },
    { id: 9, type: "ขอเปลี่ยนแปลงรายวิชา", status: "pending", officer: "มะนาว จิตดี" },
    { id: 10, type: "ขออนุมัติลา", status: "pending", officer: "สมชาย หวังผล" },
  ]);

  
  // สร้าง State สำหรับจัดการการล็อกอิน
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  // รหัสผ่านที่ถูกต้อง (สามารถเปลี่ยนเป็นดึงจาก Backend ได้)
  const correctPassword = "admin123";

  // ฟังก์ชันตรวจสอบรหัสผ่าน
  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true); // อนุญาตให้เข้าถึงหน้า Admin
    } else {
      alert("รหัสผ่านไม่ถูกต้อง!"); // แจ้งเตือนเมื่อรหัสผิด
    }
  };


    // ตรวจสอบค่า requests ทุกครั้งที่มีการเปลี่ยนแปลง
    useEffect(() => {
      console.log("อัปเดตข้อมูล requests: ", requests);
    }, [requests]);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map(req =>
        req.id === id ? { ...req, status: "approved" } : req
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map(req =>
        req.id === id ? { ...req, status: "rejected" } : req
      )
    );
  };


  return (
    <div className="admin-container">

      {/* แสดง Modal ถ้ายังไม่ล็อกอิน */}
      {!isAuthenticated && (
        <div className="admin-login-modal">
          <h2>เข้าสู่ระบบแอดมิน</h2>
          <input
            type="password"
            placeholder="กรอกรหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>เข้าสู่ระบบ</button>
        </div>
      )}
       {isAuthenticated && (
        <>
      <aside className="sidebar">
        <h2>แผงควบคุมแอดมิน</h2>
        <ul>
          <li>คำร้องทั้งหมด</li>
        </ul>
      </aside>

      <main className="dashboard">
        <h1>จัดการคำร้อง</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>ประเภทคำร้อง</th>
              <th>สถานะ</th>
              <th>เจ้าหน้าที่</th>
              <th>การดำเนินการ</th>
              <th>เอกสาร</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req, index) => (
              <tr key={req.id}>
                <td>{index + 1}</td>
                <td>{req.type}</td>
                <td>
                  {console.log(req.status)}
                  <span >
                    {req.status === "pending" && "⏳ กำลังตรวจสอบ"}
                    {req.status === "approved" && "✅ อนุมัติแล้ว"}
                    {req.status === "rejected" && "❌ ปฏิเสธแล้ว"}
                  </span>
                </td>
                <td>{req.officer}</td>
                <td>
                  {req.status === "pending" && (
                    <>
                      <button className="approve-btn" onClick={() => handleApprove(req.id)}>อนุมัติ</button>
                      <button className="reject-btn" onClick={() => handleReject(req.id)}>ปฏิเสธ</button>
                    </>
                  )}
                </td>
                <td>
                  <a href="#" className="doccument">ดาวน์โหลด เอกสาร</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      </>
       )}
    </div>
  );
};

export default AdminDashboard;
