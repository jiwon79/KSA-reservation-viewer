import React from 'react'
import {Link} from "react-router-dom";

import Header from '../components/Admin/Header';

export default function Admin() {
  return (
    <div>
      <Header/>
      <Link to="/log">로그</Link>
      <Link to="/teacher">선생님 에약 페이지</Link>
    </div>
  )
}
