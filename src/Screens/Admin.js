import React from 'react'
import {Link} from "react-router-dom";
export default function Admin() {
  
  return (
    <div>
      Admin
      <Link to="/log">로그</Link>
      <Link to="/teacher">선생님 에약 페이지</Link>
    </div>
  )
}
