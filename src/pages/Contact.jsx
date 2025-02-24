import React, {useState, useEffect}from "react";
import "./../styles/Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from "react-modal";

const Contact = () => {

  useEffect(() => {
    Modal.setAppElement("#root"); // ✅ ป้องกัน Error ใน Console
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <h1 className="page-title">ติดต่อเรา</h1>
      <h2 className="section-title">เส้นทางการเดินทาง</h2>

      <div className="contact-content">
        {/* แผนที่ */}
        <div className="map-container">
          <MapContainer center={[14.02396, 99.97741]} zoom={15} scrollWheelZoom={false} style={{ height: "400px", width: "600px" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[14.02419, 99.97741]}>
              <Popup>มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตกำแพงแสน</Popup>
            </Marker>
          </MapContainer>

        </div>
        {/* ข้อมูลติดต่อ */}
        <div className="contact-info">
          <h3>ติดต่อเจ้าหน้าที่</h3>
          <p>
            <strong>คุณ สมชาย หวังผล</strong> (เจ้าหน้าที่) <br />
            โทร : 068-555-5555
          </p>
          <p>
            <strong>คุณ มะนาว จิตดี</strong> (เจ้าหน้าที่) <br />
            โทร : 068-585-4444
          </p>

          {/* ปุ่มแชท */}
          <div className="chat-button">
            <p>สามารถแชทกับเจ้าหน้าที่ได้</p>
            <button className="chat-btn" onClick={() => setModalIsOpen(true)}>แชทเลย !</button>

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
