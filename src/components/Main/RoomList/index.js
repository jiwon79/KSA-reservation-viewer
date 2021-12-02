import React, {useState, useEffect} from 'react'
import Room from '../Room';
import { Reservation } from '../../../common/api';
import "./style.css"

export default function RoomList() {
  const [reserveData, setReserveData] = useState('');
  useEffect(() => {
    const fetch = async () => {
      const fetchData = await Reservation.getReservationList();
      setReserveData(fetchData.data);
    }
    fetch();
  }, [])

  return (
    <div className="roomList">
      {
        reserveData === '' 
        ? 
        '로딩중' 
        : 
        <>
          <Room room={'A'} name={reserveData.name.a} number={reserveData.number.a}/>
          <Room room={'B'} name={reserveData.name.b} number={reserveData.number.b}/>
          <Room room={'C'} name={reserveData.name.c} number={reserveData.number.c}/>
          <Room room={'D'} name={reserveData.name.d} number={reserveData.number.d}/>
          <Room room={'E'} name={reserveData.name.e} number={reserveData.number.e}/>
        </>
      }
    </div>
  )
}
