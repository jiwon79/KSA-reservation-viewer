import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './style.css'

export default function SelectDate({logDate, handleLogDate}) {
  return (
    <div className="selectDate">
      <span>날짜 선택</span>
      <DatePicker selected={logDate} onChange={(date) => handleLogDate(date)} />
    </div>
  )
}
