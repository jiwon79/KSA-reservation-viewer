import React, {useState, useEffect} from 'react'
import Room from '../Room';
import { Reservation } from '../../../common/api';

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
    <div>
      {
        reserveData === '' 
        ? 
        '로딩중' 
        : 
        <>
          <Room name={reserveData.name.a} number={reserveData.number.a}/>
          <Room name={reserveData.name.b} number={reserveData.number.b}/>
          <Room name={reserveData.name.c} number={reserveData.number.c}/>
          <Room name={reserveData.name.d} number={reserveData.number.d}/>
          <Room name={reserveData.name.e} number={reserveData.number.e}/>
        </>
      }
    </div>
  )
}
