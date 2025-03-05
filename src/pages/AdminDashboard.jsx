import React, { useEffect, useState } from "react";
import "./../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([
    { id: 1, type: "ขออนุมัติลา", status: "pending", officer: "สมชาย หวังผล", reason: "" },
    { id: 2, type: "ขอทุนการศึกษา", status: "approved", officer: "มะนาว จิตดี", reason: "" },
    { id: 3, type: "ขอเปลี่ยนแปลงรายวิชา", status: "rejected", officer: "สมชาย หวังผล", reason: "ไม่ตรงเงื่อนไข" },
    { id: 4, type: "ขออนุมัติลา", status: "pending", officer: "มะนาว จิตดี", reason: "" },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const correctUser = "admin1";
  const correctPassword = "admin123";

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const handleLogin = () => {
    if (password === correctPassword && user === correctUser) {
      setIsAuthenticated(true);
    } else {
      alert("รหัสผ่านไม่ถูกต้องหรือชื่อผู้ใช้ไม่ถูกต้อง");
    }
  };

  useEffect(() => {
    console.log("อัปเดตข้อมูล requests: ", requests);
  }, [requests]);

  const handleApprove = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "approved" } : req
      )
    );
  };

  const openRejectModal = (id) => {
    setSelectedRequestId(id);
    setRejectReason(""); // รีเซ็ตค่าเหตุผลก่อนเปิด
    setShowRejectModal(true);
  };

  const closeRejectModal = () => {
    setShowRejectModal(false);
    setSelectedRequestId(null);
  };

  const confirmReject = () => {
    if (!rejectReason.trim()) {
      alert("กรุณากรอกเหตุผลการปฏิเสธ!");
      return;
    }

    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === selectedRequestId
          ? { ...req, status: "rejected", reason: rejectReason }
          : req
      )
    );
    closeRejectModal();
  };

  return (
    <div className="admin-container">
      {!isAuthenticated && (
        <div className="admin-login-modal">
          <h2>เข้าสู่ระบบแอดมิน</h2>
          <input
            type="text"
            placeholder="ชื่อผู้ใช้เจ้าหน้าที่"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
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
                  <th>เหตุผล</th>
                  <th>ดาวนืโหลดเอกสาร</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req, index) => (
                  <tr key={req.id}>
                    <td>{index + 1}</td>
                    <td>{req.type}</td>
                    <td>
                      <span>
                        {req.status === "pending" && "⏳ กำลังตรวจสอบ"}
                        {req.status === "approved" && "✅ อนุมัติแล้ว"}
                        {req.status === "rejected" && "❌ ปฏิเสธแล้ว"}
                      </span>
                    </td>
                    <td>{req.officer}</td>
                    <td>
                      {req.status === "pending" && (
                        <>
                          <button className="approve-btn" onClick={() => handleApprove(req.id)}>
                            อนุมัติ
                          </button>
                          <button className="reject-btn" onClick={() => openRejectModal(req.id)}>
                            ปฏิเสธ
                          </button>
                        </>
                      )}
                    </td>
                    <td>{req.reason || "-"}</td>
                    <td>
                      <a href="#">ดาวน์โหลด</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>

          {/* Modal สำหรับใส่เหตุผลปฏิเสธ */}
          {showRejectModal && (
            <div className="modal-overlay">
              <div className="modal">
                <h2>ปฏิเสธคำร้อง</h2>
                <textarea
                  placeholder="กรอกเหตุผลการปฏิเสธ..."
                  value={rejectReason}
                  onChange={(e) => setRejectReason(e.target.value)}
                />
                <div className="modal-actions">
                  <button onClick={confirmReject} className="confirm-btn">
                    ยืนยัน
                  </button>
                  <button onClick={closeRejectModal} className="cancel-btn">
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
