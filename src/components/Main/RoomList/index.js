import React, {useState, useEffect} from 'react'
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
      {reserveData === '' ? '로딩중' : '로딩 끝'}
    </div>
  )
}
