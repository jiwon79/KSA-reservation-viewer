import React, {useState} from "react";

import Header from "../components/Admin/Header";
import SelectDate from "../components/Log/SelectDate";

export default function Log() {
  const [logDate, setLogDate] = useState(new Date());

  const handleLogDate = (date) => {
    setLogDate(date);
  }

  return (
    <div>
      <Header />
      <SelectDate logDate={logDate} handleLogDate={handleLogDate}/>
      log
    </div>
  )
}
