import React from 'react'
import { useSelector } from 'react-redux'
import OneSession from './OneSession';

export default function AllSessions() {
    const { sessions } = useSelector( state => state.patientSlice)
    const sessionArr = sessions.data

  return (
    <>
    <table className="table table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>Diagnosis</th>
        <th>Medicien</th>
        <th>requires</th>
        <th>doctor name</th>
      </tr>
    </thead>
    <tbody>
    {sessionArr.map(session => (
              <OneSession key={session.id} session={session} />
            ))}
    </tbody>
  </table>
    </>
  )
}
