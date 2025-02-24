import React, { useState } from "react";
import Modal from "react-modal";
import "./../styles/ChatModal.css"; // เพิ่มไฟล์ CSS สำหรับแชท

Modal.setAppElement("#root"); // ป้องกัน Error ใน Console

const ChatModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>
      {/* ปุ่มเปิดแชท */}
      <button className="chat-btn" onClick={() => setModalIsOpen(true)}>
        แชทเลย !
      </button>

      {/* Modal แชท */}
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="chat-modal">
        <h2>แชทกับเจ้าหน้าที่</h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="พิมพ์ข้อความที่นี่..."
        />
        <div className="chat-buttons">
          <button onClick={() => alert(`ส่งข้อความ: ${message}`)}>ส่งข้อความ</button>
          <button onClick={() => setModalIsOpen(false)}>ปิด</button>
        </div>
      </Modal>
    </div>
  );
};

export default ChatModal;
