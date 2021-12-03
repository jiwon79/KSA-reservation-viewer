import React, { useState, useEffect } from 'react'
import { Reservation } from '../../../common/api';

export default function LogList({logDate}) {
  const [userLog, setUserLog] = useState('');
  const [dayLog, setDayLog] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const fetchUserLog = await Reservation.getUserLog({logDate: logDate});
      const fetchDayLog = await Reservation.getDayLog({logDate: logDate});
      setUserLog(fetchUserLog);
      setDayLog(fetchDayLog);
    }
    fetch();
  }, [logDate])
  console.log(userLog);

  return (
    <div className="userLog">
      <span></span>
      {
        userLog === '' 
        ? '로딩중' 
        : dayLog === '' 
        ? '로딩중' 
        : 
        <table>
          <thead>
            <tr>
              <th>option</th>
              <th>reserve room</th>
              <th>reserve time</th>
              <th>student</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            {userLog.map((log, index) => 
              <tr key={index}>
                <td>
                  {log.option}
                </td>
                <td>
                  seminar {log.reserve.room}
                </td>
                <td>
                  {log.reserve.time}
                </td>
                <td>
                  {log.user.name} {log.user.number} {log.user.tel}
                </td>
                <td>
                  {log.time}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </div>
  )
}
