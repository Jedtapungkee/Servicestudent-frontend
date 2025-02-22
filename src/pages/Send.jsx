import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./../styles/Send.css"

function Send() {
    const navigate = useNavigate();
    const handleGoToStatus = (e) => {
        e.preventDefault();
        navigate("/status");
    };

  return (
    <div className='send-container'>
        <div className="send-box">
            <h1>ส่งคำร้องเสร็จสิ้น !</h1>
            <p>โปรดติดตามสถานะคำร้องของท่านที่หน้า ติดตามสถานะ</p>
            <botton className="status" onclick={handleGoToStatus}>
                ไปยังหน้าติดตามสถานะ
            </botton>
        </div>

    </div>
  )
}

export default Send