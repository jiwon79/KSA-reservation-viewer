import React from 'react'
import './style.css'

export default function Room({room, name, number}) {
  console.log(name, number);
  return (
    <div className="room">
      <div className="room__header">
        <span>Room {room}</span>
        <div className="colorBox1"></div>
        <span>예약되지 않음</span>
        <div className="colorBox2"></div>
        <span>예약됨</span>
      </div>
      <div>
        {number}
      </div>
    </div>
  )
}
