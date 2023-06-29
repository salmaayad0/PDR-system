import React from "react";

export default function SideBar(props) {
  const { id, name, age, gender, address, phone_number, email } = props.patient;
  return (
    <>
      <ul>
        <li>
          <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Phone: {phone_number}</p>
            <p>email: {email}</p>
            <p>Address: {address}</p>
          </div>
        </li>

        <li>
          <div>History</div>
        </li>
      </ul>
    </>
  );
}
