/* eslint-disable no-array-constructor */
import React from 'react'
import './style.css'

export default function Room({room, name, number}) {
  console.log(name, number);
  const timeList = Array('1', '2', '3', '4', '점심', '5', '6', '7', '8', '9', '저녁', '10', '11', '12', '13');
  const list = name.map((name, index) => {
    if (name === '-') return <div className="box empty"><div className="time">{timeList[index]}</div></div>
    return (
      <div className="box fill">
        <div className="time">{timeList[index]}</div>
        {name}<br/>{number[index]}
      </div>
    )
  });

  return (
    <div className="room">
      <div className="room__header">
        <span>Room {room}</span>
        <div className="colorBox1"></div>
        <span>예약되지 않음</span>
        <div className="colorBox2"></div>
        <span>예약됨</span>
      </div>
      <div className="room__list">
        {list}
      </div>
    </div>
  )
}
