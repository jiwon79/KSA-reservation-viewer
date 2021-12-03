import React, {useState} from "react";

import Header from "../components/Admin/Header";
import SelectDate from "../components/Log/SelectDate";
import LogList from "../components/Log/LogList";

export default function Log() {
  const [logDate, setLogDate] = useState(new Date());

  const handleLogDate = (date) => {
    setLogDate(date);
  }

  return (
    <div>
      <Header />
      <SelectDate logDate={logDate} handleLogDate={handleLogDate}/>
      <LogList logDate={logDate}/>
    </div>
  )
}
